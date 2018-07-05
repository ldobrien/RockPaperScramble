"use strict";
/* eslint-disable import/first */
// @ts-ignore: No types.
const bareAcorn = require("acorn");
// @ts-ignore: No types.
const inject_1 = require("acorn-dynamic-import/lib/inject");
// @ts-ignore: No types.
const injectObjectRestSpread = require("acorn-object-rest-spread/inject");
const acorn = injectObjectRestSpread(inject_1.default(bareAcorn));
// All code below was copied and pasted from webpack, with small modifications.
/* eslint-disable */
const ECMA_VERSION = 2017;
const POSSIBLE_AST_OPTIONS = [
    {
        ranges: true,
        locations: true,
        ecmaVersion: ECMA_VERSION,
        sourceType: "module",
        plugins: {
            dynamicImport: true,
            objectRestSpread: true,
        },
    },
    {
        ranges: true,
        locations: true,
        ecmaVersion: ECMA_VERSION,
        sourceType: "script",
        plugins: {
            dynamicImport: true,
            objectRestSpread: true,
        },
    },
];
/**
 * This is a copy-paste from the Parser.parse method in Webpack, with the parse calls replaced with
 * the new acorn parser.
 */
function patchedParse(source, initialState) {
    let ast;
    const comments = [];
    for (let i = 0, len = POSSIBLE_AST_OPTIONS.length; i < len; i++) {
        if (!ast) {
            try {
                comments.length = 0;
                POSSIBLE_AST_OPTIONS[i].onComment = comments;
                ast = acorn.parse(source, POSSIBLE_AST_OPTIONS[i]);
            }
            catch (e) {
                // ignore the error
            }
        }
    }
    if (!ast) {
        // for the error
        ast = acorn.parse(source, {
            ranges: true,
            locations: true,
            ecmaVersion: ECMA_VERSION,
            sourceType: "module",
            plugins: {
                dynamicImport: true,
                objectRestSpread: true,
            },
            onComment: comments,
        });
    }
    if (!ast || typeof ast !== "object")
        throw new Error("Source couldn't be parsed");
    const oldScope = this.scope;
    const oldState = this.state;
    const oldComments = this.comments;
    this.scope = {
        inTry: false,
        definitions: [],
        renames: {},
    };
    const state = (this.state = initialState || {});
    this.comments = comments;
    if (this.applyPluginsBailResult("program", ast, comments) === undefined) {
        this.prewalkStatements(ast.body);
        this.walkStatements(ast.body);
    }
    this.scope = oldScope;
    this.state = oldState;
    this.comments = oldComments;
    return state;
}
function patchedWalkObjectExpression(expression) {
    for (let propIndex = 0, len = expression.properties.length; propIndex < len; propIndex++) {
        const prop = expression.properties[propIndex];
        if (prop.type === "SpreadElement") {
            this.walkExpression(prop.argument);
            continue;
        }
        if (prop.computed)
            this.walkExpression(prop.key);
        if (prop.shorthand)
            this.scope.inShorthand = true;
        this.walkExpression(prop.value);
        if (prop.shorthand)
            this.scope.inShorthand = false;
    }
}
function patchedWalkObjectPattern(pattern) {
    for (let i = 0, len = pattern.properties.length; i < len; i++) {
        const prop = pattern.properties[i];
        if (prop.type === "RestElement") {
            this.walkExpression(prop.argument);
            continue;
        }
        if (prop) {
            if (prop.computed)
                this.walkExpression(prop.key);
            if (prop.value)
                this.walkPattern(prop.value);
        }
    }
}
module.exports = class ObjectRestSpreadPlugin {
    apply(compiler) {
        compiler.plugin("compilation", (compilation, params) => {
            params.normalModuleFactory.plugin("parser", (parser) => {
                parser.parse = patchedParse;
                parser.walkObjectExpression = patchedWalkObjectExpression;
                parser.walkObjectPattern = patchedWalkObjectPattern;
            });
        });
    }
};

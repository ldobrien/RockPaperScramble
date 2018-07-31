const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var express = require('express');
var app = express();


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
   
  },
  password: String,
  name: String,
  maxScore: Number
});


UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


UserSchema.pre('save', function saveHook(next) {
  const user = this;

 
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

  
      user.password = hash;
      user.maxScore = '0';

      return next();
    });
  });
});





module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var express = require('express');
var app = express();

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    // index: { unique: true }
  },
  password: String,
  name: String,
  maxScore: String
});

// QUERY
// var usersModel = mongoose.model('RPSDatabase.users', UserSchema);
// app.get('/getusers', function(req, res){
//   usersModel.find({},
//     function(err, foundData) {
//       if(err) {
//         console.log(err);
//         return res.status(400).send();
//       } else {
//         // console.log(foundData);
//         return res.status(200).send(foundData);
//       }
//     });
// });

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;
      user.maxScore = '20';

      return next();
    });
  });
});





module.exports = mongoose.model('User', UserSchema);
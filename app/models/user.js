import mongoose from 'mongoose';
import Poll from './poll'
var bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        select: false
        
    },
    name: {
        type: String,
       
    },
  polls:[{
    type:Schema.Types.ObjectId, ref:'Poll'
  }]

})


userSchema.pre('save', function (next) {
  var user = this;

  if (!user.isModified('password')) return next();
  // before saving a hashed version of the password is created and saved into the db
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePwd = function(password, done) {
  // Compare the password sent by the user with the one stored in the db
  bcrypt.compare(password, this.password, (err, isMatch) => {
    console.log(password, this.password)
    done(err, isMatch);
  });
};


export default mongoose.model('User', userSchema);
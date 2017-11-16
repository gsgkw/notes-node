console.log('starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
//
// var res = notes.addNote();
// console.log(res);

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`, function (err) {
  if (err) {
    console.log('unable to write to file');
  }
});

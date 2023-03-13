const studentInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.think({text: `${studentInfo.name}${studentInfo.campus}`

})); 
   

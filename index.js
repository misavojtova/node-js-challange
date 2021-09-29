// with userInformation.js
/*
const userInfo = require("./userInformation");
console.log(
  `Hi, my name is ${userInfo.name} and I'm ${userInfo.age} years old`
);
userInfo.displayPassions();*/

// information.js

const fromInfoFile = require("./infromation");
console.log(`${fromInfoFile.campus}`);

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello I'm ${fromInfoFile.name} from ${fromInfoFile.campus}`,
    e: "oO",
    T: "U ",
  })
);

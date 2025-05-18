const { use } = require("react")

const name = "shreya"
const salary = new String ('60lpa')

// console.log( `my name is ${name} and i have a salary of ${salary}`);
// console.log(salary[3]);
// console.log(salary.__proto__);
// console.log(salary.toUpperCase());
const url = "https://shreya.com/shreya%20games"
// console.log(url.replace('%20','-'))

// const newString = salary
// console.log(newString.substring(0,4))

// console.log(Temporal.Now.instant());

let mydate =  new Date()
// console.log(mydate.toLocaleDateString());

let mycreatedDate = new Date("10-11-2025")
// console.log(mycreatedDate.toDateString());

let mytimestamp = Date.now()
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))
// console.log(Math.floor(mydate/1000));

let newDate = new Date()
// console.log(newDate.toLocaleString('default',{weekday:"long"}))

const sym= Symbol("key1")

const studentDetails = {
    name: "shreya",
    age: 20,
    [sym]: "mykey",
    cllg: "cu",
    contact: 3349423,
    lastloggin: ["monday", "thursday"]
}

// console.log(studentDetails["name"]);
// console.log(studentDetails["lastloggin"]);
// console.log(studentDetails[sym]);
// console.log(typeof studentDetails[sym]);
// console.log(typeof sym);

studentDetails.age = 21
// console.log(studentDetails["age"]);

// Object.freeze(studentDetails)

studentDetails.greet = function() {
    console.log("Welcome to JS");
}
// console.log(studentDetails.greet());

studentDetails.greetAgain = function() {
    console.log(`Welcome to JS, ${this.name}`);
    
}
// console.log(studentDetails.greetAgain());

const user = {}
user.id = 1324
user.name = "sus"
user.loggedin = false

// console.log(Object.keys(user));
// console.log(Object.values(user));



// console.log(user);

const joint = Object.assign({}, studentDetails, user)
const obj = {...studentDetails, ...user}

// console.log(joint);
// console.log(obj);

// console.log(user.hasOwnProperty('loggedin'));   works with react

const {contact} = studentDetails
// console.log(contact); works with react






























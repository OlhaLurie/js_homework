var str = "Wonderful, Joyful, Happinness, Time, Task, Apple";
var re = /\b[^a\s]{6,}\b/ig;
var res= str.match(re);
console.log (res);
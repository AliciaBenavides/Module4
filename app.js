{
let text1 = "This is my";
let text2 = "string variable example"; //string variable
let text3 = text1.concat(" ",text2);

console.log(text3);
}


let grade = 85
if (grade > 70){ 
console.log("Passing score"); //if conditional statement
}

let day;    //switch statement
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday"; }
    console.log(day);
   

let str = "Web Design 1, Digital Media Programming, Web Design 2"; //string method
let part = str.slice(14, 39);
console.log(part);


let x = 2022;
console.log(x.toString());
console.log((2022).toString());
console.log((2000 + 22).toString());
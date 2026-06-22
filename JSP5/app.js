// let student={
//     name:"harry",
//     age:20,
//     marks:94.4
// };

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// const classInfo={
//     aman:{
//         grade:"A",
//         city:"delhi"    

//     },
//     shradha:{
//         grade:"A",
//         city:"Pune"
//     },

//     karan:+{
//         grade:"O",
//         city:"Mumbai"
//     }
// };

const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter your guess");

while (true){
 if(guess == random){
       console.log("you ar e right ! congratulations");
    break;
}

else if(guess < random){
    guess = prompt("your guess is too low ! try again");
}
else{
    guess = prompt("your guess is wrong ! try again");
}
}
for(let i=1;i<=10;i=i+2){
    console.log(i);
}


for(let i =10;i>=1;i=i-2){
    console.log(i);
}

for(let i=2;i<=10;i=i+2){
    console.log(i);
}

let n =prompt("Enter your name");  
n= parseInt(n);

for(let i =n; i<=n*10; i=i+n){
    console.log(i);
}   


for(let i=1;i<=5;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=5;j++){
        console.log(j);
    }       
}

const favMovie ="Avatar";

let guess = prompt("Guess the movie name");

while(guess != favMovie && guess != "quit"){
        guess = prompt("wrong movie name");
}

if(guess == favMovie){
    console.log("you guessed it right");
}
else{
    console.log("you quit the game");

}

//LOOPS WITH ARRAYS

let students=["harry","rohan","aakash"];
for(let i=0;i<students.length;i++){
    console.log(i,students[i]);
}

let heros =["ironman","thor","hulk"];
for(let i=0;i<heros.length;i++){
    console.log('list #${i}');
    for(let j=0;j<heros[i].length;j++){
        console.log(heros[i][j]);
    } 
}
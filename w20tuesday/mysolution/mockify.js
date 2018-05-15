"use strict";

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.
//get the original text

function mockify(mytext){
 
    
    //convert it into an array
const letters = Array.from(mytext);

//loop through an array one character at a time
letters.forEach(randomize);

function randomize(value, index, array){
    //console.log(${value} i:${index});

    let letter = array[index]

    const rand = Math.random();

    if (rand < 0.5){
        letter = letter.toUpperCase();
    } else{
        letter = letter.toLowerCase();
    }

    array[index] = letter;
};
let newWord = letters.join("");
return newWord;
};




// let text = document.querySelector('#original').textContent;
// let element = document.querySelector('#original');
// element.textContent = letters.join("");

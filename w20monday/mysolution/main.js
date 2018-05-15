"use strict";


//page loads
const message = document.querySelector(".message");
document.addEventListener("DOMContentLoaded", function() {
    console.log("page loaded")
    message.style.transform = `translateY(-10vh)`;

})
//the div slides after click the button
const button = document.querySelector("button");
button.addEventListener("click", function(){
    console.log("clicked")
    message.style.transform = `translateY(100vh)`;
})


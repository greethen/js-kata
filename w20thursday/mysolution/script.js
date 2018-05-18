"use strict";
// to try to aovid having the global variables because they mess up merging the code
// window.addEventListener("load", function()

//add front bracket to wrap global variables
{
// listen for clicks on the color-selectors
const container = document.querySelector("#colorselector");
container.addEventListener("click", e=>{
    // console.log(e.target);
    const clickedLi = e.target;
    console.log(clickedLi.dataset.color);
    document.documentElement.style.setProperty("--basecolor", clickedLi.dataset.color);
})
}
//add end bracket to wrap global variables

// when one is clicked:

    // find the element that was clicked

    // find the color from that element

    // set the css variable --basecolor 

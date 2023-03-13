// Day 8: Create A Button

// Problem

// Given index.html, js/button.js, and css/button.css
// Create an html button with an id of btn
// btn must have the styling of: width 96px, height 48px, font-size 24px
// The default innerHTML of button is set to 0
// Create the interaction where when the button is clicked its internal value displayed is incremented


// solution

window.onload = () => {
    const button = document.getElementById('btn');

    button.addEventListener('click', (e) => {
         const clicks = parseInt(e.currentTarget.innerText, 0) + 1;
         e.currentTarget.innerText = clicks;
    });  
}
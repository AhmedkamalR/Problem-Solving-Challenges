// Day 8: Buttons Container

// Problem

// Given index.html, js/buttonsGrid.js, and css/buttonsGrid.css
// Create 9 html buttons with an id of btn1,btn2,btn3,.. btn9
// The buttons must be contained in a div with an id of btns
// btns must be a width of 75% of the document’s body
// Each button within btns must have a width of 30%
// Each button must be a height of 48px, and a font-size of 24px
// The buttons must be in a grid of 3 x 3 with sequential numbers starting from 1

// solution
window.onload = () => {
    const button5 = document.getElementById('btn5');
    button5.addEventListener('click', () => {
         // get all the values from the buttons
         let arr = [
              document.getElementById('btn1').innerText,
              document.getElementById('btn2').innerText,
              document.getElementById('btn3').innerText,
              document.getElementById('btn6').innerText,
              document.getElementById('btn9').innerText,
              document.getElementById('btn8').innerText,
              document.getElementById('btn7').innerText,
              document.getElementById('btn4').innerText       
         ];

         // create new shifted array 
         arr = [
              ...arr.slice(arr.length - 1),
              ...arr.slice(0, arr.length - 1)
         ];
         
         // assign new values to buttons
         document.getElementById('btn1').innerText = arr[0];
         document.getElementById('btn2').innerText = arr[1];
         document.getElementById('btn3').innerText = arr[2];
         document.getElementById('btn6').innerText = arr[3];
         document.getElementById('btn9').innerText = arr[4];
         document.getElementById('btn8').innerText = arr[5];
         document.getElementById('btn7').innerText = arr[6];
         document.getElementById('btn4').innerText = arr[7];       
    });  
}
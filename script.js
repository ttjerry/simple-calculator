//the calculator display
let screeni = document.querySelector('.display-items');

//loop through the buttons array and find out which is getting clicked, display on the screen
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        screeni.innerHTML += button.value;
    })
});

let delete2 =()=>{
    let text = screeni.innerHTML;
    screeni.innerHTML = text.slice(0, -1);
}

let calculate = () => {
    //get all the text contents in the screen.innerHTML and convert from strings to integers then evaluate
    //using the eval method since we're accepting the inputs as string and would like to convert to numbers
    let result = eval(screeni.innerHTML);
    screeni.innerHTML = result;
}

//number validation
// let validation =()=>{

// }

//implementing the delete function


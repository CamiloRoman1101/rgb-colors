const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');    
const blueText = document.getElementById('blue-text');

let redValue = red.value;
let greenValue = green.value;
let blueValue = blue.value;

redText.innerText = redValue;
greenText.innerText = greenValue;
blueText.innerText = blueValue;

function changeColor(redValue,green,blue) {
    const RGBcolor = `rgb(${redValue},${green},${blue})`;
    document.body.style.backgroundColor = RGBcolor;
}
red.addEventListener('change', (e) => {
    let redValue = e.target.value;
    redText.innerText = redValue;
    changeColor(redValue,greenValue,blueValue);   
})

green.addEventListener('change', (e) =>{
    let greenValue = e.target.value;
    greenText.innerText = greenValue;
    changeColor(redValue,greenValue,blueValue);
})

blue.addEventListener('change', (e) => {
    let blueValue = e.target.value;
    blueText.innerText = blueValue;
    changeColor(redValue,greenValue,blueValue);
})

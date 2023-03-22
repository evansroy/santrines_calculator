//Declare Variable
let display = document.getElementsByName("display")[0]

//Function to append a value to the display
function appendValue(val){
    display.value += val
}

//Function to clear the display field
function clearDisplay(){
    display.value = ""
}

//Function to delete the last value in the display field
function deleteValue(){
    display.value = display.value.toString().slice(0,-1)
}

//Fuction to Evaluate the Expression
function calculate(){
    display.value = eval(display.value)
}


//the code to prevent the buttons from submitting
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
});

//code for reseting the expression and output 
var delButton = document.getElementById('clear');
var expression = document.getElementById('input');
var answer = document.getElementById('output');

delButton.addEventListener('click', function(e){
    //console.log("am clicked");
    
    expression.defaultValue = "";
    answer.defaultValue = "";
});


//designed the button when clicked
//the button value should appear on the expression box


var buttons = document.getElementsByClassName('c');

//console.log(buttons.length);

for  (var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener('click', function(){
        expression.defaultValue = this.value; 
    })
    
}
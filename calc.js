var expression = document.getElementById('input');
var buttons = document.getElementsByClassName('c');
var currentValue = expression.defaultValue;
var answer = document.getElementById('output');
var delButton = document.getElementById('clear');

//the code to prevent the buttons from submitting
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
});

//designed the button when clicked
//the button value should appear on the expression box

for  (var i = 0; i < buttons.length; i++){
    
    buttons[i].addEventListener('click', function(){
        
    var inValue = this.value;
    currentValue = currentValue + inValue;
    expression.defaultValue = currentValue;
    intiateSequence();   
    }) 
}

function intiateSequence(){
    
    try{
        var product = document.getElementById('input').value;
        var investment = document.getElementById('output');
        investment.defaultValue = eval(product);          
        
    }
    catch(e){
       //console.log("incomplete expression");
    }
    
    
}

//code for reseting the expression and output 
delButton.addEventListener('click', function(e){
    //console.log("am clicked");
    expression.defaultValue = "";
    answer.defaultValue = "";
    currentValue = "";  
    
});





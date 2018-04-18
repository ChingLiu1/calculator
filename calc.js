document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
});

var delButton = document.getElementById('clear');
var postMe = document.getElementById('input');
var postMe2 = document.getElementById('output');

delButton.addEventListener('click', function(e){
    //console.log("am clicked");
    
    postMe.defaultValue = "";
    postMe2.defaultValue = "";
});
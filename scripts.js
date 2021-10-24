/* Add your JavaScript to this file */
var run = function(){
    var getEmail = document.getElementById("email");
    var btnClick = document.getElementsByClassName("btn")[1].onclick
    btnClick = function(clickEvent){
        clickEvent.preventDefault();
        var email = getEmail.value;
        if (email == ""){
            document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";
        }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    }
}
window.onload = run();
console.log('hello world')


//make sure dom has been fully parsed before clicking the button
//this isnt neeeded if you call your script below the button though!
document.addEventListener('DOMContentLoaded', function() {


    const buttonAlert = document.getElementById("buttonAlert")
    const loginButton = document.querySelector(".login-btn")
    const menuTab = document.querySelector(".menu")
    
    
    buttonAlert.addEventListener("click", function (event) {
        event.stopPropagation();
        alert("you clicked the button");
    });

    loginButton.addEventListener("click", function (event) {
        event.stopPropagation();
        toggileMenu();
    });

    function toggileMenu() {
        menuTab.classList.toggle('show');
    };


});
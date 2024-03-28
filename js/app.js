console.log('hello world')


//make sure dom has been fully parsed before clicking the button
//this isnt neeeded if you call your script below the button though!
document.addEventListener('DOMContentLoaded', function() {

    prompt("hi there")

    const buttonAlert = document.getElementById("buttonAlert")
    
    
    buttonAlert.addEventListener("click", function (event) {
        event.stopPropagation();
        alert("you clicked the button");
    });
});
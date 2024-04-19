document.querySelector("form").addEventListener("submit", function(event){
    email = document.querySelector("input").value.trim();
    errorMessage = document.querySelector(".errorMessage");
    subscribeMessage = document.querySelector(".subscribe-message");


    errorMessage.textContent = "";



    if (email === ""){
        errorMessage.textContent = "Please, provide email";
        event.preventDefault();

    } else if ( !validateEmail(email)){
        errorMessage.textContent = "invaild email";
        event.preventDefault();
    } else {
        document.querySelector(".signup-form").style.display = "none"
        subscribeMessage.style.display = "flex";
        event.preventDefault();

    }


})



function validateEmail(email) {
    //define the email patter
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email);
}
const form = document.querySelector("form");
const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const age = document.querySelector("#age");
const submit = document.querySelector("#submit");

function validate() {
    const input = document.getElementById("email");
    if (email.checkValidity()) {
        // alert("Email and Password are valid!");
    } else {
        alert("Email is not valid!");
        email.reportValidity();
        throw new Error("email not valid");
    }
}

function checkAge() {
    if (age.value < 18) {
        alert("You must be at least 18 years old!")
        throw new Error("age not valid");
    }
    else if (age.value > 60) {
        alert("You must be less than 60 years old!")
        throw new Error("age not valid");
    }
    else {
    }
    
    age.reportValidity();
}


submit.addEventListener("click",function(e){
        e.preventDefault();
    try {
        validate();
        checkAge();
        alert("form submitted successfully!");
    } catch (error) {
        console.log(error);
    }

})
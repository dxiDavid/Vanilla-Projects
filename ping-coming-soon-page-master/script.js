const button = document.querySelector(".submit");
const warning = document.querySelector(".warning");
const email = document.getElementById("email-text-box");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value.trim();
    if(emailValue === ""){
        error();
        warning.textContent= "Whoops! It looks like you forgot to add your email";
        shake();
    }
    else if(!isValidEmail(emailValue)){
        error();
        warning.textContent= "Please provide a valid email address";
        shake();
    }
    else{
        successful();
    }
})

function error(){
    warning.classList.add("alert");
    email.style.border = "1px solid red";
}

function shake(){
    warning.classList.add("shake");
    setTimeout(() => {warning.classList.remove('shake');}, 300);
}

function isValidEmail(email){
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase());
}

function successful(){
    warning.textContent = "Success! We'll keep you posted";
    warning.style.color = "green";
    email.style.border = "1px solid green";
}
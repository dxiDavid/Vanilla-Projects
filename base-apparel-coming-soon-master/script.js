const erroricon = document.querySelector(".warning-icon");
const errorMessage = document.querySelector(".warning-text");
const submit = document.querySelector(".submit-btn");
const email = document.getElementById("email-text-box");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value.trim();
        if(emailValue === ""){
            error();
            shake()
        }
        else if(!isValidEmail(emailValue)){
            error();
            shake()
        }
        else{
           success()
        }
    
})

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

function error(){
    erroricon.classList.add("alert");
    errorMessage.classList.add("alert");
    email.style.border = "1px solid red";
}

function success(){
    erroricon.classList.remove("alert");
    errorMessage.textContent = "Success! We'll keep you posted";
    errorMessage.style.color = "green";
    email.style.border = "1px solid green";
}

function shake() {
    errorMessage.classList.add("shake");
    setTimeout(() => {errorMessage.classList.remove('shake');}, 300);
}
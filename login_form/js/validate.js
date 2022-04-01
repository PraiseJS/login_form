
//Adding the js styles


const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //Get the values from the input

    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();

     //username validation

    if(usernameValue ===''){

        setErrorFor(username, 'Username can not be blank');
    }

    else if(usernameValue.length < 6){
        setErrorFor(username, 'Username must be at least 6 characters long');
    }
    else{
        setSuccessFor(username);
    }
}

//email validation

if(emailValue ===''){
    setErrorFor(email, 'Email can not be blank');
}

else{
    setSuccessFor(email);
}
 
//password validation

if(passwordValue ===''){
    setErrorFor(password, 'Password can not be blank');
}

else if(passwordValue.length < 8){
    setErrorFor(password, 'Password must be at least 8 characters long');
}

else{
    setSuccessFor(password);
}

// confirm password validation

if(password2Value ===''){
    setErrorFor(password2, 'This field can not be blank');
}

else if(password2Value !== passwordValue){
    setErrorFor(password2, 'password is not the same')
}

else{
    setSuccessFor(password2);
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control on html
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //adding the error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control on html
    
    //adding the error class
    formControl.className = 'form-control success';
}



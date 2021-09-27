//Grabbing elements
const form = document.getElementById('form'),
        username = document.getElementById('username'),
        email = document.getElementById('email'),
        password = document.getElementById('password'),
        password2 = document.getElementById('password2');


//Show error message - parameters depends on the conditions in the event listener
function showError(input, message) {
    const formControl = input.parentElement; //current input's parent div
    formControl.className = 'form-control error';  //adding error classname to parent div
    const small = formControl.querySelector('small'); //small tag in parent div
    small.innerText = message; //replacing message
}        

//Show success message - parameter depends on the conditions in the event listener
function showSuccess(input) {
    const formControl = input.parentElement; //current input's parent div
    formControl.className = 'form-control success';  //adding success classname to parent div
} 

//Check email is valid by regex
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //The input is always the email field
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//Adding event listener
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     //if username is empty
//     if(username.value === ''){
//         showError(username, 'Username is required'); //username is input box
//     } else {
//         showSuccess(username);
//     }

//      //if email is empty
//      if(email.value === ''){
//         showError(email, 'email is required'); //email is input box
//     } else if (!isValidEmail(email.value)){
//         showError(email, 'Email is not valid');
//       }  else {
//           showSuccess(email);  
//     }
        

//      //if password is empty
//      if(password.value === ''){
//         showError(password, 'password is required'); //password is input box
//     } else {
//         showSuccess(password);
//     }

//      //if password2 is empty
//      if(password2.value === ''){
//         showError(password2, 'password2 is required'); //password2 is input box
//     } else {
//         showSuccess(password2);
//     }
// });

//Need this function due to refactoring
//Function takes in the input array
function checkRequired(inputArr) {

    //Loop thru the array and check each one
    //For every input field in the array
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') { //if input has no value
            showError(input, `${getFieldName(input)} is required`); //run showError()
        } else {
            showSuccess(input);
        }
    });
}

//Check input length
//The input is username or password field
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//Check passwords match
function checkPasswords(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

//Get fieldName function
//Takes the first letter of the input name and capitalizes it
//Adds on the rest of the word
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Refactoring of the above event listener
 form.addEventListener('submit', function(e) {
    e.preventDefault();

    //Passing in all of the input fields
    checkRequired([username, email, password, password2]);

    //New functions to check length of password and username
    //Has min and max length
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswords(password, password2);
 });

 

//Elements
let brideFName = document.getElementById('brideFName'),
    brideLName = document.getElementById('brideLName'),
    brideEmail = document.getElementById('brideEmail'),
    groomFName = document.getElementById('groomFName'),
    groomLName = document.getElementById('groomLName'),
    groomEmail = document.getElementById('groomEmail'),
    button = document.getElementById('button'),
    eventDate = document.getElementById('eventDate'),
    eventTheme = document.getElementById('eventTheme'),
    brideFNameMsg = document.getElementById('brideFNameMsg');

//Event listener
button.addEventListener('click', validateForm)

//Validates each input
function validateForm(){
        validateFName(brideFName);
        validateLName(brideLName);
        validateEmail(brideEmail);
        console.log(`Event Date: ${eventDate.value}`);
        console.log(`Event Theme: ${eventTheme.value}`);
    }

//Validates first name
function validateFName(){
    let regexStr = brideFName.value;
    let fNameRegex = /[A-Z]/ig;
    let fNameResult = fNameRegex.test(regexStr);

        if(brideFName.value == '' || !fNameResult) {
            brideFName.style.borderColor = "red";
            brideFNameMsg.style.color = "red";
            brideFNameMsg.style.display = "block"
        }  else {
            console.log(`Bride's first name: ${brideFName.value}`);
            brideFName.style.borderColor = "#abaaa7";
            brideFNameMsg.style.display = "none"
        }


    let regexStrGroom = groomFName.value;
    let fNameGroomResult = fNameRegex.test(regexStrGroom);

        if(groomFName.value == '' || !fNameGroomResult) {
            groomFName.style.borderColor = "red";
            groomFNameMsg.style.color = "red";
            groomFNameMsg.style.display = "block"
        }  else {
            console.log(`Groom's first name: ${groomFName.value}`);
            groomFName.style.borderColor = "#abaaa7";
            groomFNameMsg.style.display = "none"
        }
    }


//Validates last name
function validateLName(){
    let regexStr = brideLName.value;
    let lNameRegex = /[A-Z]/ig;
    let lNameResult = lNameRegex.test(regexStr);

        if(brideLName.value == '' || !lNameResult) {
            brideLName.style.borderColor = "red";
            brideLNameMsg.style.color = "red";
            brideLNameMsg.style.display = "block"
        }  else {
            console.log(`Bride's last name: ${brideLName.value}`);
            brideLName.style.borderColor = "#abaaa7";
            brideLNameMsg.style.display = "none"
        }


    let regexStrGroom = groomLName.value;
    let lNameGroomResult = lNameRegex.test(regexStrGroom);

        if(groomLName.value == '' || !lNameGroomResult) {
            groomLName.style.borderColor = "red";
            groomLNameMsg.style.color = "red";
            groomLNameMsg.style.display = "block"
        }  else {
            console.log(`Groom's last name: ${groomLName.value}`);
            groomLName.style.borderColor = "#abaaa7";
            groomLNameMsg.style.display = "none"
        }
    }

//Validates email address
function validateEmail(){
    let regexStr = brideEmail.value;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailResult = emailRegex.test(regexStr);

        if(brideEmail.value == '' || !emailResult) {
            brideEmail.style.borderColor = "red";
            brideEmailMsg.style.color = "red";
            brideEmailMsg.style.display = "block"
        }  else {
            console.log(`Bride's email: ${brideEmail.value}`);
            brideEmail.style.borderColor = "#abaaa7";
            brideEmailMsg.style.display = "none"
        }


    let regexStrGroom = groomEmail.value;
    let emailGroomResult = emailRegex.test(regexStrGroom);

        if(groomEmail.value == '' || !emailGroomResult) {
            groomEmail.style.borderColor = "red";
            groomEmailMsg.style.color = "red";
            groomEmailMsg.style.display = "block"
        }  else {
            console.log(`Groom's email: ${groomEmail.value}`);
            groomEmail.style.borderColor = "#abaaa7";
            groomEmailMsg.style.display = "none"
        }

    }

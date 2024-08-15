function validateEmail(email) {
    let re = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    return re.test(email);
}
      
// console.log(validateEmail('sula@anystring.any'));
      
// console.log(validateEmail('my email is anystring@anystring .any'));

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const dob = document.querySelector('#dob');
const options = document.querySelector('#options');
const result = document.querySelector('.result');
const form = document.querySelector('#form');
const errMsg = document.querySelector('.err-msg')
let res = []
function submit() {
    res = [];
    let emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    if (!emailPattern.test(emailInput.value)){
        errMsg.innerHTML = 'input correct email';
        errMsg.style.color = 'red';
        // errMsg.style.marginTop = '-14px'
    } else {
        if(emailInput.value){
            res.push(`"email": "${emailInput.value}"`)
            errMsg.innerHTML = '';
            errMsg.style.color = ''
            errMsg.style.marginTop = ''
        } 
        if(passwordInput.value){
            res.push(`"password": "${passwordInp.value}"`) 
        }
        if(dob.value){
            res.push(`"dob": "${dob.value}"`) 
        };
        if(options.value){
            res.push(`"password": ["${options.value}"]`) 
        }
    }
    result.innerHTML = `{${res}}`
}

function reset(){
    emailInput.value = '';
    passwordInput.value = '';
    date.value = '';
    options.value = ''   
};
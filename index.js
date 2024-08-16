// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const dob = document.getElementById("dob");
// const options = document.getElementById("options");

// function submit(){
//     if(email.value === '/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/'){
//     }
//     else {
//         let group = document.createElement("li");
//     }
// }   

function validateForm() {
    let submit = document.forms["myForm"]["fname"].value;
    if (submit == "") {
      alert("Name must be filled out");
      return false;
    }
}

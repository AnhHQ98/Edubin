// const regexName = /^[a-z ,.'-]+$/i;
// const firstName = document.getElementById("fname")
// const errFirstName = document.getElementById("1")
// firstName.addEventListener("blur", () => {
//     if(firstName.value === "") {
//         errFirstName.style.display = "block"
//         firstName.style.borderColor = "red"
//     }
//    else {
//     if(!regexName.test(firstName.value)) {
//         errFirstName.style.display = "block"
//         firstName.style.borderColor = "red"
//     }
//     else {
//         errFirstName.style.display = "none"
//         firstName.style.borderColor = "#ccc"
//     }
//    }
// })


// const regexName = /^[a-z ,.'-]+$/i;
// const firstName = document.getElementById("fname")
// const lastName = document.getElementById("lname")
// const errFirstName = document.getElementById("1")
// function validateInput() {
//     if (firstName.value === ""){
//         errFirstName.style.display = 'block';
//     } else {
//         errFirstName.style.display = 'none';
//     }
// }
// firstName.addEventListener('blur', validateInput)
// lastName.addEventListener('blur', validateInput)


const allInput = document.querySelectorAll('input');
const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const e_mail = document.getElementById('email')
const errMessage = document.querySelectorAll('.form-message')
const password = document.getElementById('pword')
const password2 = document.getElementById('pword2')
function validateInput(e){
    e.preventDefault();
    for ( let i=0; i <= allInput.length; i++) {
        if(allInput[i].value === "") {       
            errMessage[i].innerHTML = "Cannot be left blank"
            allInput[i].style.borderColor = 'red'
            errMessage[i].style.color = 'red'
        } else {
            if (!regexEmail.test(e_mail.value)) {
                errMessage[3].innerHTML = "Please enter the correct email"
                allInput[3].style.borderColor = 'red'
                errMessage[3].style.color = 'red'
            } else {
                if (password2.value !== password.value) {
                    errMessage[5].innerHTML = 'Password does not match'
                    allInput[5].style.borderColor = 'red'
                    errMessage[5].style.color = 'red'
                }
            }
        }
    }
}
const btn = document.getElementById("btn-id")
btn.addEventListener("click", validateInput)
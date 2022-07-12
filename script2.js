
// cach 1
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


// cach 2
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


// cach 3
const allInput = document.querySelectorAll('input');
const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const e_mail = document.getElementById('email') 
const errMessage = document.querySelectorAll('.form-message')


console.log(allInput);

function validateInput(e){
    e.preventDefault();  
    for ( let i=0; i <= allInput.length; i++) {
        if(allInput[i].value === "") {       
            errMessage[i].innerHTML = "Khong duoc de trong !"
            allInput[i].style.borderColor = 'red'
            errMessage[i].style.color = 'red'
        }
        else {
            if (!regexEmail.test(e_mail.value)) {
                errMessage[3].innerHTML = "Vui long nha dung email"
                allInput[3].style.borderColor = 'red'
                errMessage[3].style.color = 'red'
            }
           
        }
    }
}
// email
const btn = document.getElementById("btnOk")
btn.addEventListener("click", validateInput)



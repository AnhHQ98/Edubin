const allInput = document.querySelectorAll("input");
const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const regexPass =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const e_mail = document.getElementById("email");
const errMessage = document.querySelectorAll(".form-message");
const password = document.getElementById("pword");
const password2 = document.getElementById("pword2");
function validateInput(e) {
  for (let i = 0; i <= allInput.length; i++) {
    if (allInput[i].value === "") {
      errMessage[i].innerHTML = "Cannot be left blank";
      allInput[i].style.borderColor = "red";
      errMessage[i].style.color = "red";
    } else {
      if (!regexEmail.test(e_mail.value)) {
        errMessage[3].innerHTML = "Please enter the correct email";
        allInput[3].style.borderColor = "red";
        errMessage[3].style.color = "red";
      } else {
        if (password2.value !== password.value) {
          errMessage[5].innerHTML = "Password does not match";
          allInput[5].style.borderColor = "red";
          errMessage[5].style.color = "red";
        } else {
          errMessage[i].innerHTML = "";
          allInput[i].style.borderColor = "none";
          errMessage[i].style.color = "";
        }
      }
    }
  }
}
const btn = document.getElementById("btn-id");
btn.addEventListener("click", validateInput);

const firstName = document.getElementById("fname");
console.log(firstName);

firstName.addEventListener("blur", (e) => {
  if (firstName.value !== "") {
    e.target.nextElementSibling.style.display = "none";
    e.target.style.borderColor = "#ccc";
  } else {
    e.target.nextElementSibling.style.display = "block";
    e.target.style.borderColor = "red";
  }
});

password.addEventListener("blur", (e) => {
  if (!regexPass.test(password.value)) {
    e.target.nextElementSibling.style.display = "block";
    e.target.style.borderColor = "red";
  }
});

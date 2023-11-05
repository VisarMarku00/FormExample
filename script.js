//add function to see the characters within the input filed for the password
//add text to the p element depening on what the issue is with the password

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

let password = document.getElementById("password");
let passwordMessage = document.getElementById("password_message");

let confirmPassword = document.getElementById("confirm_password");
let confirmPasswordMessage = document.getElementById(
  "confirm_password_message"
);

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    passwordMessage.innerText =
      "Password needs to be at least 8 characters long";
    passwordMessage.hidden = false;
  } else if (!password.value.match(upperCaseLetters)) {
    passwordMessage.innerText =
      "Password needs to contain at least one uppercase letter";
  } else if (!password.value.match(lowerCaseLetters)) {
    passwordMessage.innerText =
      "Password needs to contain at least one lowercase letter";
  } else if (!password.value.match(numbers)) {
    passwordMessage.innerText = "Password needs to contain at least one number";
  } else {
    passwordMessage.innerText = "";
    passwordMessage.hidden = true;
  }
  checkIfSame();
});

//add function to compare the text of the two password fileds
//if the passwords do not match add text to the p so say that they do not match

confirmPassword.addEventListener("input", checkIfSame);

function checkIfSame() {
  if (confirmPassword.value != password.value) {
    confirmPasswordMessage.innerText = "Passwords do not match";
    confirmPasswordMessage.hidden = false;
  } else {
    confirmPasswordMessage.innerText = "";
    confirmPasswordMessage.hidden = true;
  }
}

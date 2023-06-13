import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#register-Form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["registerEmail"].value;
  const password = signUpForm["registerPassword"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    console.log(userCredential.user.email);

/***********POSAR NOM USUARI**************************/
localStorage.setItem("email", userCredential.user.email);

var arrobaindex = (userCredential.user.email).indexOf("@");
if (arrobaindex !== -1) {
 var usernameCut = (userCredential.user.email).substring(0, arrobaindex);
}

 localStorage.setItem("username", usernameCut);

/*************************************/
 window.location.href = "main.html";


    // Close the signup modal
    const signupModal = document.querySelector("#exampleRegister");
    const modal = bootstrap.Modal.getInstance(signupModal);

   
    modal.hide();

   

    // Reseteja el formulari
    signUpForm.reset();

    showMessage("Welcome" + userCredential.user.email);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use", "error");
    } else if (error.code === "auth/invalid-email") {
      showMessage("Invalid email", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("Weak password", "error");
    } else if (error.code) {
      showMessage("Something went wrong", "error");
    }
  }
});

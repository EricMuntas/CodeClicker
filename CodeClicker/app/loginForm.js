import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

/***********POSAR NOM USUARI**************************/
localStorage.setItem("email", userCredentials.user.email);

var arrobaindex = (userCredentials.user.email).indexOf("@");
if (arrobaindex !== -1) {
 var usernameCut = (userCredentials.user.email).substring(0, arrobaindex);
}

 localStorage.setItem("username", usernameCut);

/*************************************/




    // Close the login modal
    const modal = bootstrap.Modal.getInstance(signInForm.closest(".modal"));
    modal.hide();

    window.location.href = "main.html";

    // reset the form
    signInForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredentials.user.email);
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

import {
  FacebookAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector("#facebookLogin");

facebookButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    console.log("facebook sign in");


/***********POSAR NOM USUARI**************************/
localStorage.setItem("email", credentials.user.email);

var arrobaindex = (credentials.user.email).indexOf("@");
if (arrobaindex !== -1) {
 var usernameCut = (credentials.user.email).substring(0, arrobaindex);
}

 localStorage.setItem("username", usernameCut);

/*************************************/


    // Close the login modal
    const modal = bootstrap.Modal.getInstance(facebookButton.closest(".modal"));
    modal.hide();

    window.location.href = "main.html";

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

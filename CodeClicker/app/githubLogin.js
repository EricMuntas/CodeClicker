import {
  GithubAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const githubButton = document.querySelector("#githubLogin");

githubButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GithubAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    console.log("google sign in");
   
/***********POSAR NOM USUARI**************************/
localStorage.setItem("email", credentials.user.email);

var arrobaindex = (credentials.user.email).indexOf("@");
if (arrobaindex !== -1) {
 var usernameCut = (credentials.user.email).substring(0, arrobaindex);
}

 localStorage.setItem("username", usernameCut);

/*************************************/

    // Close the login modal
    const modalInstance = bootstrap.Modal.getInstance(
      githubButton.closest(".modal")
    );
    modalInstance.hide();

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

import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    //Al apretar al logout desde el front tanca la sesio
    await signOut(auth);
    console.log("signup out");
    

    window.location.href = "index.html";

  } catch (error) {
    console.log(error);
  }
});

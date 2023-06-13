/*import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { loginCheck } from "./app/loginCheck.js";
import { auth } from "./app/firebase.js";

import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db } from "./app/firebase.js";
//import { setupPosts } from "./app/postList.js";

import "./app/register.js";
import "./app/logout.js";
import "./app/loginForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";
//import "./app/postList.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      //  const querySnapshot = await getDocs(collection(db, "posts"));
      //  setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error);
    }
  } else {
    // setupPosts([]);
    loginCheck(user);
  }
});

*/

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { loginCheck } from "./app/loginCheck.js";
import { auth } from "./app/firebase.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db } from "./app/firebase.js";
import { setupPosts } from "./app/postList.js";

import "./app/register.js";
import "./app/logout.js";
import "./app/loginForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";
import "./app/postList.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    const querySnapshot = await getDocs(collection(db, "post"));
    setupPosts(querySnapshot.docs);
    try {
      //  const querySnapshot = await getDocs(collection(db, "posts"));
    } catch (error) {
      console.log(error);
    }
  } else {
    // setupPosts([]);
    loginCheck(user);
  }
});
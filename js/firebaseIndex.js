  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  //import { GoogleAuthProvider } from "firebase/auth";
  //const provider = new GoogleAuthProvider();

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC3_x7nneAMwYyfkhKtE_2cHkS_iv52vWU",
    authDomain: "login-web-1d563.firebaseapp.com",
    projectId: "login-web-1d563",
    storageBucket: "login-web-1d563.appspot.com",
    messagingSenderId: "712220792294",
    appId: "1:712220792294:web:4b81c610e4c1069a58f227",
    measurementId: "G-JZTN9EW7FX"
  };

//En esta parte me da duda!
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();


document.getElementById('btnGoogle').addEventListener('click', function(event){
   const auth = getAuth();
   signInWithPopup(auth,provider)
   .then((result) => {
      //This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      //the signed-in user info.
      const user = result.user;

      //..
      console.log("user: " + user.providerData[0].displayName);
      console.log("email: " + user.providerData[0].email);
      console.log("emailVerified: " + user.providerData[0].emailVerified);
      console.log("phoneNumber: " + user.providerData[0].phoneNumber);
      console.log("photo: " + user.providerData[0].photoURL);
   }).catch((error) => {
     // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log("btnGoogle: click");
   });
});


function init() {

}

$(document).ready(function(){
  console.log("ready! ");
});


$(document).on("click","#btnGoogle", function(){
  console.log("click! ");
});
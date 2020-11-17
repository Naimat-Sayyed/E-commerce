var firebaseConfig = {
    apiKey: "AIzaSyBClKnRrY-C2EohVN_GZ3dcPgIVPJ3qh-s",
    authDomain: "registerform-f3a37.firebaseapp.com",
    databaseURL: "https://registerform-f3a37.firebaseio.com",
    projectId: "registerform-f3a37",
    storageBucket: "registerform-f3a37.appspot.com",
    messagingSenderId: "856389575403",
    appId: "1:856389575403:web:7d552472cee461bb1f94ae"
  };

  firebase.initializeApp(firebaseConfig);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');


//Add login event
btnLogin.addEventListener('click', e =>) {
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
}

//add signup event
btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser) {
    console.log(firebaseUser);
} else {
 console.log('not logged in');
}
});
var email = document.getElementById('email')
var password = document.getElementById('password')
var firebaseConfig = {
    apiKey: "AIzaSyAF1L17W8ytcFYOcRRjzKDdFXkOOLrPnkc",
    authDomain: "new-new-a084c.firebaseapp.com",
    databaseURL: "https://new-new-a084c.firebaseio.com",
    projectId: "new-new-a084c",
    storageBucket: "new-new-a084c.appspot.com",
    messagingSenderId: "822887808148",
    appId: "1:822887808148:web:c920ce44f375f834da0881",
    measurementId: "G-ZZMMQ1Z5ZW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signUp() {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
    });
    alert('signed up')
    console.log('signed up')
}
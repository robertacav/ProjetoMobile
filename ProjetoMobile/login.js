
function SalvarCadastro(event) {
    event.prevent();
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmZAGDjXEyp861eluwiw_XJS_FI6ej-Bk",
    authDomain: "activelife-949d6.firebaseapp.com",
    databaseURL: "https://activelife-949d6-default-rtdb.firebaseio.com",
    projectId: "activelife-949d6",
    storageBucket: "activelife-949d6.firebasestorage.app",
    messagingSenderId: "873276687155",
    appId: "1:873276687155:web:956297062feab203aa3446",
    measurementId: "G-167EQDEVMP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    if (login === "" || senha === "" || email === "" || telefone === "") {
        alert("Alguns campos ainda estão vazios, os preencha");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Você deve inserir um e-mail válido.");
        return;
    }
    if (telefone.length < 8 || isNaN(telefone)) {
        alert("O telefone precisa ter pelo menos 8 digitos.");
        return;
    }
    alert('Sucesso!');
    location.href = "index.html";
}



var enterName = document.getElementById("name");
var enterEmail = document.getElementById("email");
var enterPassword = document.getElementById("pass");
var regName = /^[a-zA-Z ]{3,20}$/;
var regEmail = /^[a-z_0-9A-Z]{7,20}@[a-zA-Z]{5,20}\.[a-zA-Z]{2,5}$/;
var regPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])[A-Za-z0-9!@#$%^&*]{8,}$/;
var emailList = [];
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var all = document.getElementById("all");
var anchorIn = document.getElementById("in");
var anchorUp = document.getElementById("up");
var login = document.getElementById("login");
var signup = document.getElementById("sign-up");
var upp = document.getElementById("Up-p");
var inp = document.getElementById("In-p");
var correct = document.getElementById("correct");
var welcoming = document.getElementById("welcomingHead");
var signingForm = document.getElementById("signingForm");
var error3 = document.getElementById("error3");
var logout = document.getElementById("logout");
var navbar = document.getElementById("navbar");
login.addEventListener("click", signIn);
signup.addEventListener("click", signUp);
logout.addEventListener("click",logoutFun);
anchorIn.addEventListener("click", function () {
    enterName.style.display = "none";
    upp.style.display = "block";
    inp.style.display = "none";
    enterName.value = "";
    enterPassword.value = "";
    enterEmail.value = "";
    login.style.display = "block";
    signup.style.display = "none";
    error1.style.display = "none";
    correct.style.display = "none";

});
anchorUp.addEventListener("click", function () {
    enterName.style.display = "block";
    upp.style.display = "none";
    inp.style.display = "block";
    enterName.value = "";
    enterPassword.value = "";
    enterEmail.value = "";
    login.style.display = "none";
    signup.style.display = "block";
    error2.style.display = "none";


})
signup.addEventListener("click", signUp);
if (localStorage.getItem("emailList") != null) {
    emailList = JSON.parse(localStorage.getItem("emailList"));
}
var tester = null;
function signUp() {
    if (regName.test(enterName.value) && regEmail.test(enterEmail.value) && regPassword.test(enterPassword.value)) {
        for (var i = 0; i < emailList.length; i++) {
            if (emailList[i].eemail == enterEmail.value){
                tester = true;
            }
            else{
                tester = false;
            }
        }
        if(!tester){
            var signUpObj = {
                ename: enterName.value,
                eemail: enterEmail.value,
                epassword: enterPassword.value,
            }
            emailList.push(signUpObj);
            localStorage.setItem("emailList", JSON.stringify(emailList));
            correct.style.display = "block";
            error1.style.display = "none";
            error2.style.display = "none";
            error3.style.display = "none";
            console.log(emailList);
    
        }
        else{
            error3.style.display = "block";
            error2.style.display = "none";
            error1.style.display = "none";
            correct.style.display = "none";
        }

    }
    else {
        error1.style.display = "block";
    }

}



function signIn() {
    if (regEmail.test(enterEmail.value) && regPassword.test(enterPassword.value)) {
        var signInName = "";
        for (var i = 0; i < emailList.length; i++) {
            if (emailList[i].eemail == enterEmail.value && emailList[i].epassword == enterPassword.value) {
                signInName = emailList[i].ename;
                signingForm.style.display = "none";
                welcoming.innerHTML = "welcome " + signInName;
                navbar.style.display = "block";
                break;

            }
        }
    }
    else {
        error2.style.display = "block";
    }


}

function logoutFun(){
    welcoming.innerHTML = "";
    signingForm.style.display = "block";
    navbar.style.display = "none";
    enterName.value = "";
    enterEmail.value = "";
}

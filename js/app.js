const loginel = document.querySelector('.login');
const siginupel = document.querySelector('.signup');
const fgpass = document.querySelector('.fgpass');

const forsignupbtn = document.getElementById('forsignup');
const forloginbtn = document.getElementById('forlogin');
const forgetpass = document.getElementById('forgetpass');
const forfgtolg = document.getElementById('forfgtolg');
const chbtn = document.getElementById('chbtn');




forsignupbtn.addEventListener('click',()=>{
    loginel.style.transform = "translateY(-100%)";
    siginupel.style.transform = "translateY(-86%)";
});

forloginbtn.addEventListener('click',()=>{
    loginel.style.transform = "translateY(3%)";
    siginupel.style.transform = "translateY(0%)";
});

forgetpass.addEventListener('click',()=>{
    loginel.style.transform = "translate(-150%,3%)";
    fgpass.style.transform = "translateX(0%)";
});

forfgtolg.addEventListener('click',()=>{
    loginel.style.transform = "translate(0%,3%)";
    fgpass.style.transform = "translateX(100%)";
});

chbtn.addEventListener('click',()=>{
    if(chbtn.innerText === "Sign Up"){
        loginel.style.transform = "translateY(-100%)";
        siginupel.style.transform = "translateY(-86%)";
        chbtn.innerText = "Login";
    }else{
        loginel.style.transform = "translateY(3%)";
        siginupel.style.transform = "translateY(0%)";
        chbtn.innerText = "Sign Up";
    }
});


//for floating 
const floatingel = document.querySelector('.folating-btn');
const btnprimary = document.getElementById('btnprimary');

btnprimary.addEventListener('click',()=>{
    floatingel.classList.toggle('show');
});
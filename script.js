const pwd = document.querySelector('#pwd');
const cpwd = document.querySelector('#cpwd')
const pswd = document.querySelector('.pswd');

function validatePwd(){
    if (pwd.value.length === 0) {
        pswd.style.visibility = "visible";
    }
    else if (pwd.value === cpwd.value) {
        pswd.style.visibility = "hidden";
    } else {
        pswd.style.visibility = "visible";
    }
}
 
pwd.onchange = validatePwd;
cpwd.onkeyup = validatePwd;
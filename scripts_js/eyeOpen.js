const passwordInput = document.getElementById("inputPassword")
const eyeSvg = document.getElementById("eyeSvg")


//Inicio Senha
function eyeClick() {
  let inputTypeIsPassword = passwordInput.type =="password"
  

  if(inputTypeIsPassword) {
    showPassword()
  }else {
    hidePassword()
  }
}

function showPassword() {
  passwordInput.setAttribute("type", "text")
  eyeSvg.setAttribute("src", "./assets/eye_close.svg")
}

function hidePassword() {
  passwordInput.setAttribute("type", "password")
  eyeSvg.setAttribute("src", "./assets/eye.svg")
}
//Fim Senha


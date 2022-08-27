//Inicio Confirmar Senha
const passwordInput2 = document.getElementById("inputPassword2")
const eyeSvg2 = document.getElementById("eyeSvg2")

function eyeClick2() {
  let inputTypeIsPassword2 = passwordInput2.type =="password"
  

  if(inputTypeIsPassword2) {
    showPassword()
  }else {
    hidePassword()
  }
}

function showPassword() {
  passwordInput2.setAttribute("type", "text")
  eyeSvg2.setAttribute("src", "./assets/eye_close.svg")
}

function hidePassword() {
  passwordInput2.setAttribute("type", "password")
  eyeSvg2.setAttribute("src", "./assets/eye.svg")
}
//Fim Confirmar Senha
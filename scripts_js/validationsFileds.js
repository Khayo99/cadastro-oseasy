
let inputNome = document.getElementById('inputFullName');
		
inputNome.addEventListener('invalid', function() {
        inputNome.setCustomValidity('Informe seu nome');
}, false);

inputNome.addEventListener('change', function() {
        inputNome.setCustomValidity('');
}, false);

///////////////////////////////////////////////////////

let inputEmail= document.getElementById('inputEmail');
		
inputEmail.addEventListener('invalid', function() {
  inputEmail.setCustomValidity('Informe um e-mail válido');
}, false);

inputEmail.addEventListener('change', function() {
  inputEmail.setCustomValidity('');
}, false);

///////////////////////////////////////////////////////

let inputTel= document.getElementById('inputTel');
		
inputTel.addEventListener('invalid', function() {
  inputTel.setCustomValidity('Celular inválido');
}, false);

inputTel.addEventListener('change', function() {
  inputTel.setCustomValidity('');
}, false);


///////////////////////////////////////////////////////

let inputPassword = document.getElementById('inputPassword');
		
inputPassword.addEventListener('invalid', function() {
  inputPassword.setCustomValidity('Digite sua senha');
}, false);

inputPassword.addEventListener('change', function() {
  inputPassword.setCustomValidity('');
}, false);


///////////////////////////////////////////////////////

let inputPassword2 = document.getElementById('inputPassword2');
		
inputPassword2.addEventListener('invalid', function() {
  inputPassword2.setCustomValidity('As senhas não coicidem');
}, false);

inputPassword2.addEventListener('change', function() {
  inputPassword2.setCustomValidity('');
}, false);
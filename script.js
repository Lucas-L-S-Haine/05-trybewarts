const btnLogin = document.getElementById('btnLogin');

function verificaLogin(event) {
  event.preventDefault();
  const inputLogin = document.getElementById('inputLogin').value;
  const inputSenha = document.getElementById('inputSenha').value;

  if (inputLogin === 'tryber@teste.com' && inputSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function adicionaListener() {
  btnLogin.addEventListener('click', verificaLogin);
}

window.onload = function load() {
  adicionaListener();
};

const btnLogin = document.getElementById('btnLogin');
const btnEnviar = document.getElementById('submit-btn');
const checkBotao = document.getElementById('agreement');
let botao = true;

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

function liberaBotao() {
  botao = !botao;
  btnEnviar.disabled = botao;
}

function adicionaListener() {
  btnLogin.addEventListener('click', verificaLogin);
  checkBotao.addEventListener('click', liberaBotao);
}

window.onload = function load() {
  adicionaListener();
  btnEnviar.disabled = botao;
};

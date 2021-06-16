const btnLogin = document.getElementById('btnLogin');
const btnEnviar = document.getElementById('submit-btn');
const checkBotao = document.getElementById('agreement');
const areaMensagem = document.getElementById('textarea');
const quant = document.getElementById('counter');
let botao = true;

function contador() {
  quant.textContent = 500 - areaMensagem.value.length;


}

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
  areaMensagem.addEventListener('keyup', contador);
}

window.onload = function load() {
  adicionaListener();
  btnEnviar.disabled = botao;
};

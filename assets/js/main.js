
// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

// Função responsavel por mostrar mensagem invalida para,usuario
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

const imc = getImc(peso,altura);
const nivel = getImc(imc);

const mensagem = `Seu IMC é ${imc} (${nivel}).`;

  setResultado(mensagem,true);

});


function getNivelimc(imc){
  //Arrays
  const nivel = ['abaixo do peso','peso normal','Sobrepeso','obesidade grau 1',
  'obesidade grau 2','obesidade grau 3'];
  
  if(imc >=39.9){
    return nivel[5];
  }
  if (imc >= 34.9){
      return[4];
  }
  if (imc >= 29.9){
    return[3];
  }
  if (imc >= 24.9){
    return[2];
  }
  if (imc >= 18.5){
    return[1];
  }
  if (imc < 18.5){
    return[0];
  }


}



//função sresponsavel por calcular o imc
function getImc(peso,altura){
  const imc = peso/ altura**2;
  //tofixed reponsavel por retorna com 2 casas decimais
  return imc.toFixed(2);
}


//Criando a class p - paragrafo
function criaP () {
  const p = document.createElement('p');
  return p;
}


//função para mostrar o resultado 
function setResultado (mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  
 

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('error');
    
  }

  p.innerHTML = mensagem;
  resultado.appendChild(p);
}

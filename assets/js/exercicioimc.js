const form = document.querySelector('#formulario');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    //capturando o evento do formulario

    // const peso = form.querySelector('#peso');
    // const altura = form.querySelector('#altura');
   
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //Number vai converter para número
    
    if(isNaN(peso)){
        setResultado('Peso inválido', false);
        return;
    } 

    if(!altura){
        //mesma coisa dizer que é isnan, pois estaria negando o número
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = indicesImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getImc (peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function indicesImc(imc){
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc < 18.5) return nivel[0];
    
    if(imc < 24.9) return nivel[1];

    if(imc < 29.9) return nivel[2];
    
    if(imc < 34.9) return nivel[3];
    
    if(imc < 39.9) return nivel[4];
    
    if(imc > 40) return nivel[5];
    
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado'); 
    resultado.innerHTML = '';
    //zera o html do resultado toda vez que der o submit

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); //adicionando uma classe ao parágrafo
    } else {
        p.classList.add('bad');
    }
    

    p.innerHTML = msg;
    resultado.appendChild(p);
    //adicionando um parágrafo a div (filho da div)
}

function criaParagrafo(){
    const p = document.createElement('p');
    //Criando um parágrafo com js
    return p;
   
}



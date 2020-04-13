const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputTempC = e.target.querySelector('#tempC');
    const inputTempF = e.target.querySelector('#tempF');
    const inputTempK = e.target.querySelector('#tempK');
    const celsius = Number(inputTempC.value);
    const farenheight = Number(inputTempF.value);
    const kelvin = Number(inputTempK.value);
    
     if(!celsius){
       setResultado('Valor invalido', false);
       return ;
    }
    if(!farenheight){
       setResultado('Valor invalido', false);
       return ;
    }
    if(!kelvin){
       setResultado('Valor invalido', false);
       return;
    }
    

    const cels = getCelsius(celsius);
    const faren = getFaren(farenheight);
    const kel = getKel(kelvin);

    const msg = `Farenheight: ${cels} Celsius: ${faren}  Celsius:${kel}`;
    
    setResultado(msg, true);
});



function getCelsius(celsius) {
    const cels = ((celsius * 9) / 5 )+32;
    return cels;
};

function getFaren(farenheight) {
    const faren = ((farenheight - 32) * 5) / 9;
    return faren;
};

function getKel(kelvin) {
    const kel = kelvin - 273;
    return kel;
};
function criaP() {
    const p = document.createElement('p');
    return p;
};
function setResultado (msg, isvalid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if(isvalid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');
var paragrafo = document.querySelector('h2');


var texto = paragrafo.innerHTML
var index = 0

const escrever = () => {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '')

    if(texto.length > index){
        if(index == 0){
            paragrafo.innerHTML = texto.charAt(index)
        } else{
            paragrafo.innerHTML += texto.charAt(index)
        }

        paragrafo.innerHTML += '|'

        index++
        setTimeout(escrever, 400)
    }
}

escrever()

const validadeInput = ({ target }) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);

    window.location = 'pages/game.html';
}

input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);
// Evento de pular
const mario = document.querySelector('.mario');
const audioJump = document.getElementById('jumpAudio')
const menu = document.querySelector('.menu');
const pipe = document.querySelector('.pipe')
const restart = document.querySelector('.restart');
const restartPontos = document.querySelector('.restart__pontos')
const elementoPonto = document.querySelector('.ponto');



function jump(){
    mario.classList.add('jump');
    audioJump.volume = 0.2;
    audioJump.play();
    

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)

}

document.addEventListener('keydown', jump);


// Verificando colisão
function colidiu(pipePosition, marioPosition){
    let colidiu = false
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 70){
        colidiu = true;
    }    

    return colidiu;
}


// contador de pontos
function contarPontos(){
    let ponto = Number(elementoPonto.innerHTML)

    elementoPonto.innerHTML = `${++ponto}`
}


function Jogo(){

    this.start = () => {

        
        const loop = setInterval(() => {
            pipe.style.animation = 'pipe-animation 2s infinite linear';
    
            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if(colidiu(pipePosition, marioPosition)){

                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;
                mario.src = './images/over.gif';
                mario.style.width = '90px';
                mario.style.marginLeft = '50px';
                mario.style.marginBottom = '0px';

                clearInterval(loop);

                restart.style.display = 'flex'
                restartPontos.innerHTML = elementoPonto.innerHTML
            }    

            // verifica se pontuou 
            const tubo = 2;
            const deslocamento = 5;
            const cruzouOTubo = pipePosition + deslocamento >= tubo && pipePosition < tubo;
            // if(cruzouOTubo && !colidiu(pipePosition, marioPosition)) contarPontos();
            if(cruzouOTubo) contarPontos();
        }, 10)
 
    }

    this.restart = () => {

        pipe.style.left ='0px'
        mario.style.bottom = '0px'

        this.start()
    }
    
}

const jogo = new Jogo();

// jogo.start()

function iniciarJogo(){

    menu.style.animation = 'saidaMenu 1s linear';

    setTimeout(() => {
        menu.style.display = 'none'
    }, 1000);

    jogo.start();
}

function restartJogo(){

    document.location.reload()

    // menu.style.display = 'none';

    // pipe.style.left = '100%'
    // mario.style.bottom = '0px'

    // pipe.style.animation = 'pipe-animation 2.2s infinite linear';

    // debugger
    // jogo.start()

    // debugger
    // jogo.restart()
}

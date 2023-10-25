// script.js

function atualizarContador() {
    const dataAlvo = new Date('2027-05-07 00:00:00').getTime();
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;


    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)%360);
    const anos = Math.floor(diferenca /(1000 * 60 * 60 * 24 * 360))

    document.getElementById('anos').innerText = anos.toString().padStart(2, '0');
    document.getElementById('dias').innerText = dias.toString().padStart(2, '0');
    document.getElementById('horas').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutos').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerText = segundos.toString().padStart(2, '0');
}

setInterval(atualizarContador, 1000);

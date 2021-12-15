const verde = document.querySelector('[green]')
const amarelo = document.querySelector('[yellow]')
const vermelho = document.querySelector('[red]')



 function red(cor1, cor2, cor3) {
    cor1.style.background = 'red'
    cor2.style.background = 'black'
    cor3.style.background = 'black'
}

 function yellow(cor1, cor2, cor3) {
    cor1.style.background = 'black'
    cor2.style.background = 'yellow'
    cor3.style.background = 'black'
}

 function green(cor1, cor2, cor3) {
    cor1.style.background = 'black'
    cor2.style.background = 'black'
    cor3.style.background = 'green'
}

async function pronto() {
    red(vermelho, amarelo, verde)
    await semaforo(6000)
    yellow(vermelho, amarelo, verde)
    await semaforo(2000)
    green(vermelho, amarelo, verde)

}


async function semaforo(tempo) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// espera 12 segundos para iniciar!!
setInterval(() => {
    pronto()
}, 12000);
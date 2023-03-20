const elementosTeclado = document.querySelectorAll('.teclado')

//Ouvindo os elementos para chamar a função com parâmetro correspondente
elementosTeclado.forEach((e) => {
    e.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
            event.target.classList.add('ativa')
            e.addEventListener('keyup', (event) => {
                event.target.classList.remove('ativa')
                console.log(event)
            } )
        }
    })
    e.addEventListener('click', (event) => {
        tocarSom(event.target.dataset.som)
    })

})
//Identifica o som pelo parâmetro extraido no onclick
function tocarSom(som) {
    const audio = document.getElementById(`som_tecla_${som}`)
    //console.log(audio.__proto__)
    audio.play()
}


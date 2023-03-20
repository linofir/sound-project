const elementosTeclado = document.querySelectorAll('.teclado')

//Ouvindo os elementos para chamar a função com parâmetro correspondente
elementosTeclado.forEach((e) => {
    e.addEventListener('click', (event) => {
        console.log(event.target.dataset.som)
        tocarSom(event.target.dataset.som)
    })

})
//Identifica o som pelo parâmetro extraido no onclick
function tocarSom(som) {
    const audio = document.getElementById(`som_tecla_${som}`)
    console.log(audio.__proto__)
    audio.play()
}


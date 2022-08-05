//Nessa Factory estou injetando as dependências que ela precisa
//para que as funções funcionem.
export default function Controls({
  buttonStop,
  buttonPause,
  buttonPlay,
  buttonSet
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }
    return newMinutes
  }

  return {
    play,
    pause,
    reset,
    getMinutes
  }
    
}




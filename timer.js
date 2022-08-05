import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) { 

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
 
  function upDateDisplay(newMinutes, seconds) {
    //se newMinutes for undefined, use os minutes, se não use newMinutes mesmo
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    //No padStart passo quantas casas decimais quero e em seguida o que quero
    //colocar para preencher a casa
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  //Essa função countDown recebe o setTimeOut 
  //que é também uma função que recebe como 
  //parâmetros: uma função e o tempo de execução 
  function countDown() {
    //Coloquei o setTimeout em uma variável, porque vou usar ela, que tem o 
    //resultado do setTimeout no clearTimeOut
    timerTimeOut = setTimeout(function () {
      //Aqui estou atribuindo (armazenando) em formato de número, 
      // meu secondsDisplay e minutesDisplay a essas duas variáveis
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      upDateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        upDateDisplay()
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      //Ao passar pelo if ou sem entrar no if, mantém os minutos e decrementa
      //os segundos
      upDateDisplay(minutes, String(seconds - 1))
      
      countDown()
    }, 1000
    )
  }

  function reset() {
    upDateDisplay(minutes, 0)
    hold()
  }

  function upDateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  
  return {
    upDateDisplay,
    countDown,
    reset,
    upDateMinutes,
    hold
  }
}


//named export
//export {countDown, resetTimer, timeSet}

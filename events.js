import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js"

export default function events({ controls, timer, sound }) {
  //Aqui estou adicionando eventos de click às minhas constantes.
  //E passando uma funcionalidade através das funções (coisas que quero que aconteça ao clicar)
  //constantes essas que receberam os documentos html
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()

  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })

  buttonSoundOff.addEventListener('click', function () {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.play()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }
    timer.upDateDisplay(newMinutes, 0)
    timer.upDateMinutes(newMinutes)
  })



}


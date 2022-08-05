
//named import
//import {Controls} from "./controls.js"
//default import
//Importação das Factorys, passando o caminho de onde estão vindo
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
//Posso importar também apenas o que preciso dessa forma abaixo:
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet, 
  minutesDisplay,
  secondsDisplay 
} from "./elements.js"


//Atribuindo a Factory a uma variável e injetando nela as dependências que serão
//utilizadas aqui
const controls = Controls({
  buttonStop,
  buttonPause,
  buttonPlay,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

//Aqui estou executando a Factory Events, que está recebendo como objetos
//controls, timer e sound
Events({controls, timer, sound})




  










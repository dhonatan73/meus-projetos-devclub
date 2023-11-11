const humanShot = document.querySelector('.human-shot')
const machineShot = document.querySelector('.machine-shot')
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoise)=> {
  
  playTheGame(humanChoise, playMachine())

}

const playMachine = () => {
  const choices = ['Pedra', 'Papel', 'Tesoura']
  const randomNumber = Math.floor(Math.random() * 3)

      return choices[randomNumber]

}

const playTheGame = (human, machine) => {

humanShot.innerHTML = 'Você jogou: ' + human 
machineShot.innerHTML = 'E a Alexa jogou: ' + machine

if(human === machine){
  result.innerHTML = "Deu empate"
} else if (human === 'Papel' && machine === 'Pedra' || human === 'Pedra' && machine === 'Tesoura' || human === 'Tesoura' && machine === 'Papel' ) {
  humanScoreNumber++
  humanScore.innerHTML = humanScoreNumber
  result.innerHTML = "Você ganhou"
  
} else {
  machineScoreNumber++
  machineScore.innerHTML = machineScoreNumber
  result.innerHTML = "A Alexa ganhou"
}



}


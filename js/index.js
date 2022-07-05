import Sound from './sounds.js'

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonUpMinutes = document.querySelector('.upTimer')
const buttonDownMinutes = document.querySelector('.downTimer')
const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffee = document.querySelector('.sound-coffee')
const buttonSoundFireplace = document.querySelector('.sound-fireplace')

let minutes = Number(displayMinutes.textContent)
let timerTimeout
let minutesUpdate

const sound = Sound()

function resetDisplayTimer() {
  minutesUpdate = Number(minutes)
  displayMinutes.textContent = String(minutesUpdate).padStart(2, '0')
}

function upMinutes() {
  minutesUpdate = minutesUpdate === undefined ? minutes : minutesUpdate
  displayMinutes.textContent = String(minutesUpdate + 5).padStart(2, '0')
  displaySeconds.textContent = String(0).padStart(2, '0')
  minutesUpdate = Number(displayMinutes.textContent)
  minutes = minutesUpdate
}

function downMinutes() {
  minutesUpdate = minutesUpdate === undefined ? minutes : minutesUpdate

  if (minutesUpdate < 5) {
    displayMinutes.textContent = String(0).padStart(2, '0')
    displaySeconds.textContent = String(0).padStart(2, '0')
  } else {
    displayMinutes.textContent = String(minutesUpdate - 5).padStart(2, '0')
    displaySeconds.textContent = String(0).padStart(2, '0')
  }
  minutesUpdate = Number(displayMinutes.textContent)
  minutes = minutesUpdate
}

function countdown() {
  timerTimeout = setTimeout(function () {
    let minutes = displayMinutes.textContent
    let seconds = displaySeconds.textContent

    if (minutes == 0 && seconds == 0) {
      resetDisplayTimer()

      return
    }

    if (seconds <= 0) {
      seconds = 60

      displayMinutes.textContent = String(minutes - 1).padStart(2, '0')
    }
    minutesUpdate = Number(displayMinutes.textContent)

    displaySeconds.textContent = String(seconds - 1).padStart(2, '0')

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  clearTimeout(timerTimeout)
})

buttonUpMinutes.addEventListener('click', function () {
  upMinutes()
})

buttonDownMinutes.addEventListener('click', function () {
  downMinutes()
})

buttonSoundForest.addEventListener('click', function () {
  buttonSoundForest.classList.add('hide')
  buttonSoundRain.classList.remove('hide')
  buttonSoundCoffee.classList.remove('hide')
  buttonSoundFireplace.classList.remove('hide')

  sound.buttonAudioRain.play()
  sound.buttonAudioForest.play()
  sound.buttonAudioRain.pause()
  sound.buttonAudioCoffee.pause()
  sound.buttonAudioFireplace.pause()
})

buttonSoundRain.addEventListener('click', function () {
  buttonSoundRain.classList.add('hide')
  buttonSoundForest.classList.remove('hide')
  buttonSoundCoffee.classList.remove('hide')
  buttonSoundFireplace.classList.remove('hide')

  sound.buttonAudioRain.play()
  sound.buttonAudioCoffee.pause()
  sound.buttonAudioFireplace.pause()
  sound.buttonAudioForest.pause()
})
buttonSoundCoffee.addEventListener('click', function () {
  buttonSoundCoffee.classList.add('hide')
  buttonSoundRain.classList.remove('hide')
  buttonSoundForest.classList.remove('hide')
  buttonSoundFireplace.classList.remove('hide')

  sound.buttonAudioCoffee.play()
  sound.buttonAudioRain.pause()
  sound.buttonAudioFireplace.pause()
  sound.buttonAudioForest.pause()
})
buttonSoundFireplace.addEventListener('click', function () {
  buttonSoundFireplace.classList.add('hide')
  buttonSoundRain.classList.remove('hide')
  buttonSoundForest.classList.remove('hide')
  buttonSoundCoffee.classList.remove('hide')

  sound.buttonAudioFireplace.play()
  sound.buttonAudioRain.pause()
  sound.buttonAudioCoffee.pause()
  sound.buttonAudioForest.pause()
})

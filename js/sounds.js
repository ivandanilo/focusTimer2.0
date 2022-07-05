export default function () {
  const buttonAudioForest = new Audio('./sounds/Floresta.wav')
  const buttonAudioRain = new Audio('./sounds/Chuva.wav')
  const buttonAudioCoffee = new Audio('./sounds/Cafeteria.wav')
  const buttonAudioFireplace = new Audio('./sounds/Lareira.wav')

  return {
    buttonAudioForest,
    buttonAudioRain,
    buttonAudioCoffee,
    buttonAudioFireplace
  }
}

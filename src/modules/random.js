const islands = ['Tenerife', 'La-Gomera', 'El-Hierro', 'La-Palma', 'Gran-Canaria', 'Lanzarote', 'Fuerteventura']
const images = ['El-Hierro-hombre',
  'El-Hierro-mujer',
  'Fuerteventura-mujer',
  'Fuerteventura-hombre',
  'La-Gomera-hombre',
  'La-Gomera-mujer',
  'La-Palma-mujer',
  'La-Palma-hombre',
  'Lanzarote-hombre',
  'Lanzarote-mujer',
  'Gran-Canaria-mujer',
  'Gran-Canaria-hombre',
  'Tenerife-hombre',
  'Tenerife-mujer'
]

function shuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]

    //   used "destructuring assignment" syntax to achieve that
    //   same can be written as:
    //   let t = array[i]; array[i] = array[j]; array[j] = t
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function randomNumber (start, end) {
  return (Math.floor(Math.random() * end) + start)
}

function randomItem (minValue, maxValue, array) {
  const randomValue = Math.floor(Math.random() * (maxValue - minValue) + minValue)
  return (array[randomValue])
}

export function getRandomImages (mode, islands) {
  let randomImages = []
  const selectedImages = []

  for (let x = 0; x < islands.length; x++) {
    for (let y = 0; y < images.length; y++) {
      if (images[y].includes(islands[x])) {
        selectedImages.push(images[y])
      }
    }
  }
  shuffle(selectedImages)
  randomImages = selectedImages.splice(0, mode)

  return randomImages
}

export function getRandomIslands () {
  const numberOfIslands = randomNumber(3, 5)
  const randomIslands = []
  let randomIsland
  let count = 0

  while (count < numberOfIslands) {
    randomIsland = randomItem(0, islands.length, islands)
    if (!randomIslands.includes(randomIsland)) {
      randomIslands.push(randomIsland)
      count++
    }
  }
  return (randomIslands)
}

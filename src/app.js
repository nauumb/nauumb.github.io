import {
  createIsland,
  createImage
} from './modules/interface.js'
import {
  getRandomIslands,
  getRandomImages
} from './modules/random.js'

let root = $('#root-container')
let islands = getRandomIslands()
let images = []

$('[name=mode]').change(function () {
  let images = $('.image-container')
  if (images.length > 0) {
    for (let x = 0; x < images.length; x++) {
      images[x].remove()
    }
  }
  images = getRandomImages($(this).val(), islands)
  for (let x = 0; x < images.length; x++) {
    createImage(root, images[x])
  }
})
for (let x = 0; x < islands.length; x++) {
  createIsland(root, islands[x])
}

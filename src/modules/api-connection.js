import { buildCard } from './../interfaces/cards.js'
const key = '02a0a7d4a18f713e6b201a8b083a1c9a'
// searched by character name.
export function getCharacters (string) {
  $.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + string + '&limit=100&apikey=' + key,
    type: 'GET',
    beforeSend: function () {
      $('body').append('<div id="spinner-container" class="d-flex justify-content-center aling-items-center"></div>')
      $('#spinner-container').append('<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>')
    },
    success: function (response) {
      $('#characters-container').empty()
      $('#characters-container').append('<div class="row m-3 "></div>')

      for(let x = 0; x < response.data.results.length; x++) {
        let title = response.data.results[x].name
        let imgUrl = response.data.results[x].thumbnail.path + '.' + response.data.results[x].thumbnail.extension
        let description = response.data.results[x].description

        if(description === '') { description = 'Descripción no proporcionada.' }
        buildCard(imgUrl, title, description)
      }
    },
    complete: function () {
      $('#spinner-container').remove()
    },
    error: function () { 
      $('#characters-container').empty()
      $('#characters-container').append('<div id="error-container" class="d-flex justify-content-center mt-5 align-items-center"></div>')
      $('#error-container').append('<i class="fas fa-exclamation-triangle mr-4 display-4 text-warning"></i>')
      $('#error-container').append('<h5 class="">No se han podido cargar los datos, por favor inténtelo de nuevo.</h3>')  }
  })
}
// searched by comic name.
export function getComics (string) {
  $.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=' + string + '&limit=10&apikey=' + key,
    type: 'GET',
    beforeSend: function () {
      $('body').append('<div id="spinner-container" class="d-flex justify-content-center aling-items-center"></div>')
      $('#spinner-container').append('<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>')
    },
    success: function (response) {
      $('#comics-container').empty()
      $('#comics-container').append('<div class="row m-3"></div>')

      for(let x = 0; x < response.data.results.length; x++) {
        let title = response.data.results[x].title
        let imgUrl = response.data.results[x].thumbnail.path + '.' + response.data.results[x].thumbnail.extension
        let description = response.data.results[x].description

        if(description == null) { description = 'Descripción no proporcionada.' }
        buildCard(imgUrl, title, description)
      }
    },
    complete: function () {
      $('#spinner-container').remove()
    },
    error: function () {
      $('#comics-container').empty()
      $('#comics-container').append('<div id="error-container" class="d-flex justify-content-center mt-5 align-items-center"></div>')
      $('#error-container').append('<i class="fas fa-exclamation-triangle mr-4 display-4 text-warning"></i>')
      $('#error-container').append('<h5 class="">No se han podido cargar los datos, por favor inténtelo de nuevo.</h3>')  }
  })
}

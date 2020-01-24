
export function createIsland (rootNode, island) {
  let container = '<div id="' + island + '" class="island-container ' + island + '"' + '></div>'
  let content = '<div class="content">' + island + '</div>'

  rootNode.append(container)
  $('.island-container').last().append(content)
}

export function createImage (rootNode, route) {
  let cutPoint = route.lastIndexOf('-')
  let id = route.substring(0, cutPoint)

  let Imagecontainer = '<div id="' + id + '" class="image-container"></div>'
  let image = '<img class="image" src="../src/media/' + route + '.png">' + '</img>'

  rootNode.append(Imagecontainer)
  $('.image-container').last().append(image)


  $('.image-container').draggable({
    containment: '#root-container'
  })

  $('.island-container').droppable({
    accept: '.image-container',
    addClass: 'ui-state-highlight',

    drop: function (event, ui) {
      (ui.draggable).draggable({
        disabled: true
      })

      toastr.options.closeMethod = 'fadeOut'
      toastr.options.closeDuration = 300
      toastr.options.closeEasing = 'swing'
      toastr.options.closeButton = true

      if ((ui.draggable).attr('id') == $(this).attr('id')) {
        $(this).css('border', '3px solid green')
        toastr.success('Éxito')
      } else {
        $(this).css('border', '3px solid red')
        toastr.error('Fallo')
      }
      // let mode = $('[name=mode]:checked').val()
    }
  })
}

// function createDialog () {
//   $('#dialog').dialog({
//     autoOpen: false,
//     show: {
//       effect: 'blind',
//       duration: 1000
//     },
//     hide: {
//       effect: 'explode',
//       duration: 1000
//     }
//   })

//   $('#opener').on('click', function () {
//     $('#dialog').dialog('open')
//   })
// }

// buttons with jquery-ui
$('input').checkboxradio()

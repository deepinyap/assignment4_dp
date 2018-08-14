console.log("test");

$('.readmore a').click(function() {
  event.preventDefault()
  // you can write here
})

$('.readmore a').click(function() {
  $('p.hide').slideDown('text')
  $('.readmore a').hide()
})

$('.readless a').click(function() {
  event.preventDefault()
})

$('.readless a').click(function() {
  $('p.hide').toggle('text')
})
//
// if ('p.hide' in document) {
//
// }
$('p.hide').ready(function () {

})

$('.readless a').click(function() {
  $('p.hide').slideUp('text')
  $('.readmore a').show()
})

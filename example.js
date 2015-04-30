// We should be able to forEach on the qSA result.
document.querySelectorAll('input').forEach(function (el) {
  el.readOnly = true
})

// addEventListhistakestoolongtotype. on() method
document.body.on('dblclick', function (e) {
  console.log('double clicked the body')
})

// classic Bling + on()
$('p').on('click', function (e) {
  e.currentTarget.hidden = true
})




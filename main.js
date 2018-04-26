const first = document.querySelector('#first').textContent
const second = document.querySelector('#second').textContent
const check = document.querySelector('#check')

const button = document.querySelector('#activate')
const option = document.querySelector('#option')
let selected = option.options[option.selectedIndex].value

console.log(first, second, selected)

button.addEventListener('click', function() {
  selected = option.options[option.selectedIndex].value
  compare(first, second)
  console.log(selected)
})

function compare(x, y) {
  if (selected == 'greater') {
    compareGreater(x, y)
  } else if (selected == 'less') {
    compareLesser(x, y)
  }
}

function compareGreater(x, y) {
  if (x > y) {
    check.textContent = 'greater'
  } else {
    check.textContent = 'Invalid: ' + x + ' is less than ' + y
  }
}

function compareLesser(x, y) {
  if (x < y) {
    check.textContent = 'lesser'
  } else {
    check.textContent = 'Invalid: ' + x + ' is greater than ' + y
  }
}
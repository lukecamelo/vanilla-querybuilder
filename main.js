// the two values to be compared (placeholder to test functionality)
const first = document.querySelector('#first').textContent
const second = document.querySelector('#second').textContent

// HTML element that displays results of check (also placeholder to test functionality)
const check = document.querySelector('#check')

// activates comparison
const button = document.querySelector('#activate')

// options for greater than, less than, or equal
const option = document.querySelector('#option')

// selected option e.g. greater than
let selected = option.options[option.selectedIndex].value

console.log(first, second, selected)

button.addEventListener('click', function() {
  selected = option.options[option.selectedIndex].value
  compare(first, second)
  console.log(selected)
})

// main function for comparison
function compare(x, y) {
  if (selected == 'greater') {
    compareGreater(x, y)
  } else if (selected == 'less') {
    compareLesser(x, y)
  } else if (selected == 'equal') {
    compareEquality(x, y)
  }
}

// children functions of compare()
function compareGreater(x, y) {
  if (x > y) {
    check.textContent = 'greater'
    return true
  } else {
    check.textContent = 'Invalid: ' + x + ' is less than ' + y
    return false
  }
}

function compareLesser(x, y) {
  if (x < y) {
    check.textContent = 'lesser'
    return true
  } else {
    check.textContent = 'Invalid: ' + x + ' is greater than ' + y
    return false
  }
}

function compareEquality(x, y) {
  if (x == y) {
    check.textContent = 'equal'
    return true
  } else {
    check.textContent = 'Invalid: ' + x + ' is not equal to ' + y
    return false
  }
}
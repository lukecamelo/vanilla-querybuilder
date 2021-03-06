// the two values to be compared (placeholder to test functionality)
// let first = document.querySelector('#first').value
let first
// let second = document.querySelector('#second').value
let second

// HTML element that displays results of check (also placeholder to test functionality)
const check = document.querySelector('#check')

// activates comparison
const button = document.querySelector('#activate')

// options for greater than, less than, or equal
const option = document.querySelector('#option')

// selected option e.g. greater than
let selected = option.options[option.selectedIndex].value

// ruleset
const rules = {
  rules: {
    id: 'price',
    operator: 'less',
    value: first
  }
}

// Holds basic comparison methods
const comparison = {
  isGreaterThan: (x, y) => {
    if (x > y) {
      check.textContent = 'greater'
      return true
    } else if (x == y) {
      check.textContent = 'Invalid: ' + x + ' is equal to ' + y
      return false
    } else {
      check.textContent = 'Invalid: ' + x + ' is less than ' + y
      return false
    }
  },
  isLessThan: (x, y) => {
    if (x < y) {
      check.textContent = 'lesser'
      return true
    } else if (x === y) {
      check.textContent = 'Invalid: ' + x + ' is equal to ' + y
      return false
    } else {
      check.textContent = 'Invalid: ' + x + ' is greater than ' + y
      return false
    }
  },
  isEqualTo: (x, y) => {
    if (x == y) {
      check.textContent = 'equal'
      return true
    } else if (x == y) {
      check.textContent = 'Invalid: ' + x + ' is equal to ' + y
      return false
    } else {
      check.textContent = 'Invalid: ' + x + ' is not equal to ' + y
      return false
    }
  }
}

const values = [100, 30, 5, 2, 350, 1]
const compared = []

function addValue() {
  first = document.querySelector('#first').value
  for (let i = 0; i < values.length; i++) {
    if (comparison.isLessThan(first, values[i])) {
      compared.push(values[i])
    }
  }
  console.log('compared: ', compared)
}

addValue()

button.addEventListener('click', function() {
  first = document.querySelector('#first').value
  second = document.querySelector('#second').value
  selected = option.options[option.selectedIndex].value
  compare(first, second)
  console.log('selected: ', selected)
})

// main function for comparison
function compare(x, y) {
  if (selected == 'greater') {
    comparison.isGreaterThan(x, y)
  } else if (selected == 'less') {
    comparison.isLessThan(x, y)
  } else if (selected == 'equal') {
    comparison.isEqualTo(x, y)
  }
}

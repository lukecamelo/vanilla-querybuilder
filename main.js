const first = document.querySelector('#first').textContent
const second = document.querySelector('#second').textContent
const check = document.querySelector('#check')

const option = document.querySelector('#option')
let selected = option.options[option.selectedIndex].value;

const button = document.querySelector('#activate')

console.log(first, second, selected)

button.addEventListener('click', function() {
  compare(first, second)
  console.log(selected)
})

function compare(x, y) {
  if (selected = 'less') {
    compareLesser(x, y)
  } else if (selected = 'greater') {
    compareGreater(x, y)
  }
}

function compareGreater(x, y) {
  if (x > y) {
    check.textContent = 'greater'
  } else {
    console.log('error: y greater than x, or some other shit ???')
  }
}

function compareLesser(x, y) {
  if (x < y) {
    check.textContent = 'lesser'
  } else {
    console.log('error: x greater than y, or some other shit ??? x2')
  }
}
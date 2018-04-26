let first = 40;
let other = 20;

const check = document.querySelector('#check');
const button = document.querySelector('#activate');
button.addEventListener('click', function() {
  compare(first, other);
})

function compare(x, y) {
  if (x > y) {
    check.textContent = 'greater'
  } else {
    check.textContent = 'lesser'
  }
}
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'pink', 'cyan', 'brown', 'orange']

body.style.background = 'violet';
button.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}
// Logo image hover substitution
function hoverLogo(element) {
  element.setAttribute('src', 'assets/img/flexicons2.png')
}

function unhoverLogo(element) {
  element.setAttribute('src', 'assets/img/flexicons.png')
}

// Hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

// Scroll Up icon
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 250) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

var imgArray = [
  'assets/img/a1.jpg',
  'assets/img/a2.jpg',
  'assets/img/a3.jpg',
  'assets/img/a4.jpg',
]

// document.getElementById('img-button1').onclick = function () {
//   document.getElementById('main-image').src = imgArray[0]
// }
// document.getElementById('img-button2').onclick = function () {
//   document.getElementById('main-image').src = imgArray[1]
// }

// document.getElementById('img-button3').onclick = function () {
//   document.getElementById('main-image').src = imgArray[2]
// }
// document.getElementById('img-button4').onclick = function () {
//   document.getElementById('main-image').src = imgArray[3]
// }

// Scroll Reveal Animation

// const sr = ScrollReveal({
//   distance: '80px',
//   duration: 2000,
//   delay: 400,
//   reset: true,
// })

// sr.reveal(`.sr-down-fast`, { delay: 200, origin: 'bottom' })
// sr.reveal(`.sr-down-slow`, { delay: 400, origin: 'bottom' })
// sr.reveal(`.sr-top-fast`, { delay: 200, origin: 'bottom' })
// sr.reveal(`.sr-top-slow`, { delay: 400, origin: 'bottom' })
// sr.reveal(`.sr-left-fast`, { delay: 200, origin: 'bottom' })
// sr.reveal(`.sr-left-slow`, { delay: 600, origin: 'bottom' })
// sr.reveal(`.sr-right-fast`, { delay: 200, origin: 'bottom' })
// sr.reveal(`.sr-right-slow`, { delay: 600, origin: 'bottom' })

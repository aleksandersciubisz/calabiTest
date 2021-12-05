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
  'assets/img/carousel/3dPrint.mp4',
  'assets/img/carousel/3dPrint2.mp4',
  'assets/img/carousel/3dPrint3.mp4',
]

document.getElementById('img-button1').onclick = function () {
  document.getElementById('main-image').src = imgArray[0]
}
document.getElementById('img-button2').onclick = function () {
  document.getElementById('main-image').src = imgArray[1]
}

document.getElementById('img-button3').onclick = function () {
  document.getElementById('main-image').src = imgArray[2]
}

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

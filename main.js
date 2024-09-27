// selector 
const darkBtn = document.getElementById("dark-btn")
const darkBody = document.getElementById("dark-body")
const hamburgerBtn = document.getElementById('hamburger-btn')
const hamburgerMenu = document.getElementById('hamburger-menu')
const hideHamburger = document.getElementById('hide-hamburger')

// Event lesener 
darkBtn.addEventListener('click',darkModeEnable)
hamburgerBtn.addEventListener('click',showHamburger)
hideHamburger.addEventListener('click',hideHamburgerFn)


// event function 
function darkModeEnable(){
  darkBody.classList.toggle('dark')
}
function showHamburger (){
  hamburgerMenu.classList.toggle("-translate-x-[1000px]")
}

function hideHamburgerFn(){
  hamburgerMenu.classList.add('-translate-x-[1000px]')
}
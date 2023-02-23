const burgerBtn = document.querySelector('.burger-btn')
const burgerBars = document.querySelector('.burger-bar')
const navbar = document.querySelector('.navbar')
const navbarListItem = document.querySelectorAll('.navbar__list__elements')

const showNav = () => {
	navbar.classList.add('navbar-active')
	navbar.classList.remove('navbar-hide')
	burgerBars.classList.add('burger-active')
	burgerBars.classList.remove('burger-back')
}
const hideNav = () => {
	navbar.classList.remove('navbar-active')
	navbar.classList.add('navbar-hide')
	burgerBars.classList.remove('burger-active')
	burgerBars.classList.add('burger-back')
}

const navbarItemEntry = () => {
	let delayTime = 0

	navbarListItem.forEach(item => {
		item.classList.toggle('nav-entry')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const navHandling = () => {
	if (!navbar.classList.contains('navbar-active')) {
		showNav()
	} else {
		hideNav()
	}
	navbarItemEntry()
	navbarListItem.forEach(item => {
		item.addEventListener('click', hideNav)
	})
}

burgerBtn.addEventListener('click', navHandling)

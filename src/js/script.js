// NAV AND BURGER VARIABLES

const burgerBtn = document.querySelector('.burger-btn')
const burgerBars = document.querySelector('.burger-bar')
const navbar = document.querySelector('.navbar')
const navbarListItem = document.querySelectorAll('.navbar__list__elements')

const nav = document.querySelector('.nav')
const allSection = document.querySelectorAll('.section')
let navHeight
let headerDarkHeight
let headerGreyHeight

const date = document.querySelector('.date')

// FORM VARIABLES

const sendBtn = document.querySelector('.form__formbox__send')
const nameForm = document.querySelector('#name')
const mailForm = document.querySelector('#mail')
const phoneForm = document.querySelector('#phone')
const messageForm = document.querySelector('#message')

const form = document.querySelector('#contact-form')

// CONTACT POPUP - VARIABLES

const popup = document.querySelector('.popup')
const popupOk = document.querySelector('.ok')
const popupError = document.querySelector('.error')
const popupClose = document.querySelector('.popup__window-close')

// ZOOM EVACUATION PLAN IMAGES - VARIABLES

const allPlanImages = document.querySelectorAll('.plans__box-imagebox-img')
const imageZoomSection = document.querySelector('.imagezoom')
const imageZoom = document.querySelector('.imagezoom__image-img')
const zoomCloseBtn = document.querySelector('.imagezoom__closebtn')

//NAVIGATION AND BURGER BUTTON

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

const scrollDisable = scrollY => {
	window.onscroll = () => {
		window.scrollTo({
			top: scrollY,
			left: 0,
			behavior: 'instant',
		})
	}
}

function enableScroll() {
	window.onscroll = function () {}
}

const navHandling = () => {
	if (!navbar.classList.contains('navbar-active')) {
		const scrollY = window.scrollY
		scrollDisable(scrollY)
		showNav()
	} else {
		hideNav()
		enableScroll()
	}

	navbarItemEntry()
	navbarListItem.forEach(item => {
		item.addEventListener('click', hideNav)
	})
}

// CURRENT PAGE NAVIGATION HIGHLIGHT

const navHighlight = params => {
	const currentPage = window.location.pathname

	switch (currentPage) {
		case '/index.html':
			navbarListItem.forEach(item => {
				if (item.children[0].id == 'mainPage') {
					item.children[0].classList.add('link-active')
				}
			})
			break
		case '/uslugi.html':
		case '/instrukcje.html':
		case '/kontrole.html':
		case '/szkolenia.html':
		case '/plany.html':
			navbarListItem.forEach(item => {
				if (item.children[0].id == 'servicePage') {
					item.children[0].classList.add('link-active')
				}
			})
			break
		case '/doswiadczenie.html':
			navbarListItem.forEach(item => {
				if (item.children[0].id == 'expPage') {
					item.children[0].classList.add('link-active')
				}
			})
			break
		case '/faq.html':
			navbarListItem.forEach(item => {
				if (item.children[0].id == 'FAQPage') {
					item.children[0].classList.add('link-active')
				}
			})
			break
		case '/kontakt.html':
			navbarListItem.forEach(item => {
				if (item.children[0].id == 'contactPage') {
					item.children[0].classList.add('link-active')
				}
			})
			break
	}
}

// SHOW CURRENT YEAR IN FOOTER

const handleDate = params => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}

// CHANGE NAVIGATION BACKGROUND COLOR

const setNavHeight = () => {
	if (window.innerWidth < 768) {
		navHeight = 85
		headerDarkHeight = 245
		headerGreyHeight = 395
	} else if (window.innerWidth >= 768) {
		navHeight = 100
		headerDarkHeight = 310
		headerGreyHeight = 450
	}
}

const headerBgAdd = () => {
	if (window.scrollY > headerDarkHeight) {
		nav.classList.add('nav-black-bgc')
		nav.classList.remove('nav-dark-bgc')
		nav.classList.remove('nav-medium-bgc')
	} else if (window.scrollY <= headerDarkHeight) {
		nav.classList.remove('nav-black-bgc')
		nav.classList.remove('nav-dark-bgc')
		nav.classList.remove('nav-medium-bgc')
	}
	if (window.scrollY > headerGreyHeight) {
		nav.classList.remove('nav-black-bgc')
		nav.classList.remove('nav-dark-bgc')
		nav.classList.add('nav-medium-bgc')
	}
}

const navBackgroundAddMobile = () => {
	const currentSection = window.scrollY
	setNavHeight()

	allSection.forEach(section => {
		if (section.classList.contains('header-bgc')) {
			headerBgAdd()
		} else if (section.classList.contains('dark-bgc') && section.offsetTop <= currentSection + navHeight) {
			nav.classList.remove('nav-black-bgc')
			nav.classList.add('nav-dark-bgc')
			nav.classList.remove('nav-medium-bgc')
		} else if (section.classList.contains('medium-bgc') && section.offsetTop <= currentSection + navHeight) {
			nav.classList.remove('nav-black-bgc')
			nav.classList.remove('nav-dark-bgc')
			nav.classList.add('nav-medium-bgc')
		}
	})
}

const navBackgroundAddDesktop = () => {
	const currentSection = window.scrollY
	setNavHeight()

	allSection.forEach(section => {
		if (section.classList.contains('medium-bgc') && section.offsetTop <= currentSection + navHeight) {
			navbar.classList.add('nav-dark-bgc')
			navbar.classList.remove('nav-medium-bgc')
		} else if (
			(section.classList.contains('dark-bgc') && section.offsetTop <= currentSection + navHeight) ||
			section.classList.contains('header-bgc')
		) {
			navbar.classList.remove('nav-dark-bgc')
			navbar.classList.add('nav-medium-bgc')
		}
	})
}

// CONTACT FORM VALIDATION

const checkInput = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
			if (el === mailForm) {
				checkMail(el)
			} else if (el === phoneForm) {
				checkPhone(el)
			}
		}
	})
}

const showError = (input, msg) => {
	const inputBox = input.parentElement
	const errorMsg = inputBox.querySelector('.error-text')

	errorMsg.classList.add('show')
	errorMsg.textContent = msg
}

const clearError = input => {
	const inputBox = input.parentElement
	const errorMsg = inputBox.querySelector('.error-text')

	errorMsg.classList.remove('show')
	errorMsg.textContent = 'error'
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	email.value = email.value.trim()

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Podaj poprawny email!')
	}
}

const checkPhone = phone => {
	const re = /^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/

	if (re.test(phone.value)) {
		clearError(phone)
	} else {
		showError(phone, 'Podaj poprawny telefon!')
	}
}

const checkErrors = input => {
	let errorCount = 0

	input.forEach(el => {
		if (el.parentElement.querySelector('.error-text').textContent !== 'error') {
			errorCount++
		}
	})
	if (errorCount === 0) {
		errorCount = 0
		console.log('start weryfikacji')
		verifyCaptcha()
	}
}

const verifyForms = () => {
	checkInput([nameForm, mailForm, phoneForm, messageForm])
	checkErrors([nameForm, mailForm, phoneForm, messageForm])
}

const verifyCaptcha = () => {
	grecaptcha.execute()
	popupOpen()
}

// POPUP

const popupOpen = () => {
	popup.classList.add('popup-show')
	showEmailConfirmation()
}

const showEmailConfirmation = () => {
	if (document.location.search === '?mail_status=sent') {
		popupOk.style.display = 'flex'
		popupError.style.display = 'none'
	}

	if (document.location.search === '?mail_status=error') {
		popupOk.style.display = 'none'
		popupError.style.display = 'flex'
	}
}

const closePopup = () => {
	popup.classList.remove('popup-show')
}

// ZOOM IMAGES OF EVACUATION PLAN

const zoomPlanImgMobile = image => {
	const src = image.src

	window.open(src)
}

const zoomPlanImgDesktop = image => {
	const src = image.src

	imageZoomSection.classList.add('imagezoom-show')
	imageZoom.setAttribute('src', src)
}

const closeZoomSection = () => {
	imageZoomSection.classList.remove('imagezoom-show')
	imageZoom.setAttribute('src', '')
}

const zoomImg = e => {
	//wskazuje pozycje kursora
	const x = e.clientX
	const y = e.clientY

	//pozycja obrazu
	const imgX = imageZoom.offsetLeft + (imageZoomSection.offsetLeft - imageZoomSection.offsetWidth / 2)
	const imgY = imageZoom.offsetTop + (imageZoomSection.offsetTop - imageZoomSection.offsetHeight / 2)

	//pozycja kursora wewnątrz obrazka
	const newX = (imgX - x) * -1
	const newY = (imgY - y) * -1

	imageZoom.style.transformOrigin = `${newX}px ${newY}px`

	imageZoom.classList.add('zoomed-image')
}

const resetImg = () => {
	imageZoom.classList.remove('zoomed-image')
}

//ADD EVENT LISTENERS

burgerBtn.addEventListener('click', navHandling)
window.addEventListener('scroll', () => {
	if (window.innerWidth < 992) {
		navBackgroundAddMobile()
	} else {
		navBackgroundAddDesktop()
	}
})
handleDate()
navHighlight()

if (allPlanImages) {
	allPlanImages.forEach(img => {
		img.addEventListener('click', e => {
			if (window.innerWidth < 1200) {
				zoomPlanImgMobile(img)
			} else {
				zoomPlanImgDesktop(img)
			}
		})
	})
}

if (imageZoom) {
	imageZoom.addEventListener('mousemove', zoomImg)
	imageZoom.addEventListener('mouseout', resetImg)
}

if (zoomCloseBtn) {
	zoomCloseBtn.addEventListener('click', closeZoomSection)
}

if (sendBtn) {
	sendBtn.addEventListener('click', e => {
		e.preventDefault()
		verifyForms()
	})
}

if (popupClose) {
	popupClose.addEventListener('click', closePopup)
}

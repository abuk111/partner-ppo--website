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

const allPlanImages = document.querySelectorAll('.plans__box-imagebox-img')

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

// const verifyCaptcha = () => {
// 	grecaptcha.execute()

// 	const response = grecaptcha.getResponse()

// 	response.ajax({
//         type: "POST",
//         url: 'https://www.google.com/recaptcha/api/siteverify',
//         data: {"secret" : "6LdNTE0lAAAAAFBpvJwiEoFK_07j_dTfOZB_Hs6X", "response" : response, "remoteip":"localhost"},
//         contentType: 'application/x-www-form-urlencoded',
//         success: function(data) { console.log(data); }
//     });
// }

// const verifyCaptcha = () => {
// 	grecaptcha.execute()
// 	const token = grecaptcha.getResponse()
// 	console.log(token)

// 	const postData = {
// 		secret: '6LdNTE0lAAAAAFBpvJwiEoFK_07j_dTfOZB_Hs6X',
// 		response: 'USER_RESPONSE_KEY',
// 	}

// 	fetch('https://www.google.com/recaptcha/api/siteverify', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		mode: 'cors',
// 		body: new URLSearchParams(postData),
// 	})
// 		.then(response => response.json())
// 		.then(data => console.log(data))
// }
const verifyCaptcha = () => {
	grecaptcha.execute()

	const token = grecaptcha.getResponse()

	fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		secret: '6LdNTE0lAAAAAFBpvJwiEoFK_07j_dTfOZB_Hs6X',
		response: token,
	})
		.then(response => response.json())
		.then(data => {
			console.log('Odpowiedź serwera:', data)
		})
		.catch(error => {
			console.error('Błąd podczas wysyłania żądania:', error)
		})
}

// form.addEventListener('submit', function (event) {

// 	event.preventDefault()

// 	// Pobierz odpowiedź reCAPTCHA
// 	const response = grecaptcha.getResponse()

// 	// Jeśli odpowiedź jest pusta
// 	if (response.length == 0) {
// 		// Wyświetl komunikat o błędzie
// 		alert('Potwierdź, że nie jesteś robotem!')
// 		return false
// 	}

// 	// Jeśli odpowiedź istnieje, wyślij formularz
// 	document.getElementById('contact-form').submit()
// })

// ZOOM IMAGES OF EVACUATION PLAN

const zoomPlanImgMobile = image => {
const src = image.src

window.open(src)
}

const zoomPlanImgDesktop = image => {
	console.log('desktop')
	console.log(image)
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



allPlanImages.forEach(img => {
	img.addEventListener('click', e => {
		if (window.innerWidth < 1200) {
			zoomPlanImgMobile(img)
		} else {
			zoomPlanImgDesktop(img)
		}
	})
})

// allPlanImages.addEventListener('click', e => {
// 	if (window.innerWidth < 1200) {
// 		zoomPlanImgMobile(e)
// 	} else {
// 		zoomPlanImgDesktop(e)
// 	}
// })

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	verifyForms()
})
"use strict";var navHeight,headerDarkHeight,headerGreyHeight,burgerBtn=document.querySelector(".burger-btn"),burgerBars=document.querySelector(".burger-bar"),navbar=document.querySelector(".navbar"),navbarListItem=document.querySelectorAll(".navbar__list__elements"),nav=document.querySelector(".nav"),allSection=document.querySelectorAll(".section"),date=document.querySelector(".date"),sendBtn=document.querySelector(".form__formbox__send"),nameForm=document.querySelector("#name"),mailForm=document.querySelector("#mail"),phoneForm=document.querySelector("#phone"),messageForm=document.querySelector("#message"),form=document.querySelector("#contact-form"),popup=document.querySelector(".popup"),popupOk=document.querySelector(".ok"),popupError=document.querySelector(".error"),popupClose=document.querySelector(".popup__window-close"),allPlanImages=document.querySelectorAll(".plans__box-imagebox-img"),imageZoomSection=document.querySelector(".imagezoom"),imageZoom=document.querySelector(".imagezoom__image-img"),zoomCloseBtn=document.querySelector(".imagezoom__closebtn"),showNav=function(){navbar.classList.add("navbar-active"),navbar.classList.remove("navbar-hide"),burgerBars.classList.add("burger-active"),burgerBars.classList.remove("burger-back")},hideNav=function(){navbar.classList.remove("navbar-active"),navbar.classList.add("navbar-hide"),burgerBars.classList.remove("burger-active"),burgerBars.classList.add("burger-back")},navbarItemEntry=function(){var a=0;navbarListItem.forEach(function(e){e.classList.toggle("nav-entry"),e.style.animationDelay="."+a+"s",a++})},navHandling=function(){(navbar.classList.contains("navbar-active")?hideNav:showNav)(),navbarItemEntry(),navbarListItem.forEach(function(e){e.addEventListener("click",hideNav)})},navHighlight=function(e){switch(window.location.pathname){case"/index.html":navbarListItem.forEach(function(e){"mainPage"==e.children[0].id&&e.children[0].classList.add("link-active")});break;case"/uslugi.html":case"/instrukcje.html":case"/kontrole.html":case"/szkolenia.html":case"/plany.html":navbarListItem.forEach(function(e){"servicePage"==e.children[0].id&&e.children[0].classList.add("link-active")});break;case"/doswiadczenie.html":navbarListItem.forEach(function(e){"expPage"==e.children[0].id&&e.children[0].classList.add("link-active")});break;case"/faq.html":navbarListItem.forEach(function(e){"FAQPage"==e.children[0].id&&e.children[0].classList.add("link-active")});break;case"/kontakt.html":navbarListItem.forEach(function(e){"contactPage"==e.children[0].id&&e.children[0].classList.add("link-active")})}},handleDate=function(e){var a=(new Date).getFullYear();date.textContent=a},setNavHeight=function(){window.innerWidth<768?(navHeight=85,headerDarkHeight=245,headerGreyHeight=395):768<=window.innerWidth&&(navHeight=100,headerDarkHeight=310,headerGreyHeight=450)},headerBgAdd=function(){window.scrollY>headerDarkHeight?(nav.classList.add("nav-black-bgc"),nav.classList.remove("nav-dark-bgc"),nav.classList.remove("nav-medium-bgc")):window.scrollY<=headerDarkHeight&&(nav.classList.remove("nav-black-bgc"),nav.classList.remove("nav-dark-bgc"),nav.classList.remove("nav-medium-bgc")),window.scrollY>headerGreyHeight&&(nav.classList.remove("nav-black-bgc"),nav.classList.remove("nav-dark-bgc"),nav.classList.add("nav-medium-bgc"))},navBackgroundAddMobile=function(){var a=window.scrollY;setNavHeight(),allSection.forEach(function(e){e.classList.contains("header-bgc")?headerBgAdd():e.classList.contains("dark-bgc")&&e.offsetTop<=a+navHeight?(nav.classList.remove("nav-black-bgc"),nav.classList.add("nav-dark-bgc"),nav.classList.remove("nav-medium-bgc")):e.classList.contains("medium-bgc")&&e.offsetTop<=a+navHeight&&(nav.classList.remove("nav-black-bgc"),nav.classList.remove("nav-dark-bgc"),nav.classList.add("nav-medium-bgc"))})},navBackgroundAddDesktop=function(){var a=window.scrollY;setNavHeight(),allSection.forEach(function(e){e.classList.contains("medium-bgc")&&e.offsetTop<=a+navHeight?(navbar.classList.add("nav-dark-bgc"),navbar.classList.remove("nav-medium-bgc")):(e.classList.contains("dark-bgc")&&e.offsetTop<=a+navHeight||e.classList.contains("header-bgc"))&&(navbar.classList.remove("nav-dark-bgc"),navbar.classList.add("nav-medium-bgc"))})},checkInput=function(e){e.forEach(function(e){""===e.value?showError(e,e.placeholder):(clearError(e),e===mailForm?checkMail(e):e===phoneForm&&checkPhone(e))})},showError=function(e,a){e=e.parentElement.querySelector(".error-text");e.classList.add("show"),e.textContent=a},clearError=function(e){e=e.parentElement.querySelector(".error-text");e.classList.remove("show"),e.textContent="error"},checkMail=function(e){e.value=e.value.trim(),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(e.value)?clearError(e):showError(e,"Podaj poprawny email!")},checkPhone=function(e){/^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/.test(e.value)?clearError(e):showError(e,"Podaj poprawny telefon!")},checkErrors=function(e){var a=0;e.forEach(function(e){"error"!==e.parentElement.querySelector(".error-text").textContent&&a++}),0===a&&(a=0,console.log("start weryfikacji"),verifyCaptcha())},verifyForms=function(){checkInput([nameForm,mailForm,phoneForm,messageForm]),checkErrors([nameForm,mailForm,phoneForm,messageForm])},verifyCaptcha=function(){grecaptcha.execute(),popupOpen()},popupOpen=function(){popup.classList.add("popup-show"),showEmailConfirmation()},showEmailConfirmation=function(){"?mail_status=sent"===document.location.search&&(popupOk.style.display="flex",popupError.style.display="none"),"?mail_status=error"===document.location.search&&(popupOk.style.display="none",popupError.style.display="flex")},closePopup=function(){popup.classList.remove("popup-show")},zoomPlanImgMobile=function(e){e=e.src;window.open(e)},zoomPlanImgDesktop=function(e){e=e.src;imageZoomSection.classList.add("imagezoom-show"),imageZoom.setAttribute("src",e)},closeZoomSection=function(){imageZoomSection.classList.remove("imagezoom-show"),imageZoom.setAttribute("src","")},zoomImg=function(e){var a=e.clientX,e=e.clientY,o=imageZoom.offsetLeft+(imageZoomSection.offsetLeft-imageZoomSection.offsetWidth/2),e=-1*(imageZoom.offsetTop+(imageZoomSection.offsetTop-imageZoomSection.offsetHeight/2)-e);imageZoom.style.transformOrigin="".concat(-1*(o-a),"px ").concat(e,"px"),imageZoom.classList.add("zoomed-image")},resetImg=function(){imageZoom.classList.remove("zoomed-image")};burgerBtn.addEventListener("click",navHandling),window.addEventListener("scroll",function(){(window.innerWidth<992?navBackgroundAddMobile:navBackgroundAddDesktop)()}),handleDate(),navHighlight(),allPlanImages&&allPlanImages.forEach(function(a){a.addEventListener("click",function(e){(window.innerWidth<1200?zoomPlanImgMobile:zoomPlanImgDesktop)(a)})}),imageZoom&&(imageZoom.addEventListener("mousemove",zoomImg),imageZoom.addEventListener("mouseout",resetImg)),zoomCloseBtn&&zoomCloseBtn.addEventListener("click",closeZoomSection),sendBtn&&sendBtn.addEventListener("click",function(e){e.preventDefault(),verifyForms()}),popupClose&&popupClose.addEventListener("click",closePopup);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJhbGxTZWN0aW9uIiwibmF2SGVpZ2h0IiwiaGVhZGVyRGFya0hlaWdodCIsImJ1cmdlckJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1cmdlckJhcnMiLCJuYXZiYXJMaXN0SXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXYiLCJkYXRlIiwic2VuZEJ0biIsIm5hbWVGb3JtIiwibWFpbEZvcm0iLCJwaG9uZUZvcm0iLCJtZXNzYWdlRm9ybSIsImZvcm0iLCJwb3B1cE9rIiwicG9wdXBFcnJvciIsInBvcHVwQ2xvc2UiLCJpbWFnZVpvb21TZWN0aW9uIiwiaW1hZ2Vab29tIiwiem9vbUNsb3NlQnRuIiwibmF2YmFyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaXRlbSIsImZvckVhY2giLCJ0b2dnbGUiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwiZGVsYXlUaW1lIiwibmF2SGFuZGxpbmciLCJoaWRlTmF2IiwiY29udGFpbnMiLCJuYXZiYXJJdGVtRW50cnkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaWQiLCJoYW5kbGVEYXRlIiwicGFyYW1zIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzZXROYXZIZWlnaHQiLCJpbm5lcldpZHRoIiwiaGVhZGVyR3JleUhlaWdodCIsIndpbmRvdyIsImhlYWRlckJnQWRkIiwic2Nyb2xsWSIsIm5hdkJhY2tncm91bmRBZGRNb2JpbGUiLCJjdXJyZW50U2VjdGlvbiIsInNlY3Rpb24iLCJvZmZzZXRUb3AiLCJuYXZCYWNrZ3JvdW5kQWRkRGVza3RvcCIsImNoZWNrSW5wdXQiLCJ2YWx1ZSIsInNob3dFcnJvciIsImVsIiwicGxhY2Vob2xkZXIiLCJjbGVhckVycm9yIiwiaW5wdXQiLCJpbnB1dEJveCIsImVycm9yTXNnIiwidGV4dENvbnRlbnQiLCJjaGVja1Bob25lIiwiZW1haWwiLCJtc2ciLCJyZSIsInBob25lIiwiZXJyb3JDb3VudCIsInRyaW0iLCJ2ZXJpZnlDYXB0Y2hhIiwiY2hlY2tFcnJvcnMiLCJncmVjYXB0Y2hhIiwiZXhlY3V0ZSIsInBhcmVudEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidmVyaWZ5Rm9ybXMiLCJwb3B1cE9wZW4iLCJzZXRBdHRyaWJ1dGUiLCJwb3B1cCIsInNob3dFbWFpbENvbmZpcm1hdGlvbiIsInpvb21JbWciLCJkaXNwbGF5IiwiY2xpZW50WCIsInNlYXJjaCIsIm9mZnNldExlZnQiLCJuZXdZIiwidHJhbnNmb3JtT3JpZ2luIiwiem9vbVBsYW5JbWdNb2JpbGUiLCJpbWFnZSIsInNyYyIsIm9wZW4iLCJuYXZIaWdobGlnaHQiLCJhbGxQbGFuSW1hZ2VzIiwieCIsInpvb21QbGFuSW1nRGVza3RvcCIsInkiLCJlIiwiY2xpZW50WSIsImltZ1giLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImNvbmNhdCIsInJlc2V0SW1nIiwiaW1nIiwiY2xvc2Vab29tU2VjdGlvbiIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VQb3B1cCJdLCJtYXBwaW5ncyI6ImFBQUEsSUFRTUEsVUFDRkMsaUJBQ0FDLGlCQVZKQyxVQUFBQyxTQUFBQyxjQUFBLGFBQUEsRUFHTUMsV0FBYUYsU0FBU0MsY0FBYyxhQUFhLEVBRGpERixPQUFTQyxTQUFXQyxjQUFjLFNBQUMsRUFDbkNDLGVBQWFGLFNBQVNDLGlCQUFjLHlCQUFjLEVBRWxERSxJQUFBQSxTQUFpQkgsY0FBU0ksTUFBQUEsRUFFMUJDLFdBQWVKLFNBQUFBLGlCQUFxQixVQUFBLEVBTXBDSyxLQUFPTixTQUFTQyxjQUFjLE9BQVEsRUFJdENNLFFBQVVQLFNBQVNDLGNBQWMsc0JBQXVCLEVBQ3hETyxTQUFXUixTQUFTQyxjQUFjLE9BQVEsRUFDMUNRLFNBQVdULFNBQVNDLGNBQWMsT0FBUSxFQUMxQ1MsVUFBWVYsU0FBU0MsY0FBYyxRQUFTLEVBQzVDVSxZQUFjWCxTQUFTQyxjQUFjLFVBQVcsRUFF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VVJHRVIgVkFSSUFCTEVTXHJcblxyXG5jb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJ0bicpXHJcbmNvbnN0IGJ1cmdlckJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJhcicpXHJcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKVxyXG5jb25zdCBuYXZiYXJMaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX2xpc3RfX2VsZW1lbnRzJylcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKVxyXG5jb25zdCBhbGxTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVxyXG5sZXQgbmF2SGVpZ2h0XHJcbmxldCBoZWFkZXJEYXJrSGVpZ2h0XHJcbmxldCBoZWFkZXJHcmV5SGVpZ2h0XHJcblxyXG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKVxyXG5cclxuLy8gRk9STSBWQVJJQUJMRVNcclxuXHJcbmNvbnN0IHNlbmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZm9ybWJveF9fc2VuZCcpXHJcbmNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKVxyXG5jb25zdCBtYWlsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJylcclxuY29uc3QgcGhvbmVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJylcclxuY29uc3QgbWVzc2FnZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpXHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtZm9ybScpXHJcblxyXG4vLyBDT05UQUNUIFBPUFVQIC0gVkFSSUFCTEVTXHJcblxyXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpXHJcbmNvbnN0IHBvcHVwT2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2snKVxyXG5jb25zdCBwb3B1cEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJylcclxuY29uc3QgcG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fd2luZG93LWNsb3NlJylcclxuXHJcbi8vIFpPT00gRVZBQ1VBVElPTiBQTEFOIElNQUdFUyAtIFZBUklBQkxFU1xyXG5cclxuY29uc3QgYWxsUGxhbkltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFuc19fYm94LWltYWdlYm94LWltZycpXHJcbmNvbnN0IGltYWdlWm9vbVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2V6b29tJylcclxuY29uc3QgaW1hZ2Vab29tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlem9vbV9faW1hZ2UtaW1nJylcclxuY29uc3Qgem9vbUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlem9vbV9fY2xvc2VidG4nKVxyXG5cclxuLy9OQVZJR0FUSU9OIEFORCBCVVJHRVIgQlVUVE9OXHJcblxyXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xyXG5cdG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXItYWN0aXZlJylcclxuXHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLWhpZGUnKVxyXG5cdGJ1cmdlckJhcnMuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWFjdGl2ZScpXHJcblx0YnVyZ2VyQmFycy5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItYmFjaycpXHJcbn1cclxuY29uc3QgaGlkZU5hdiA9ICgpID0+IHtcclxuXHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLWFjdGl2ZScpXHJcblx0bmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1oaWRlJylcclxuXHRidXJnZXJCYXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci1hY3RpdmUnKVxyXG5cdGJ1cmdlckJhcnMuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyLWJhY2snKVxyXG59XHJcblxyXG5jb25zdCBuYXZiYXJJdGVtRW50cnkgPSAoKSA9PiB7XHJcblx0bGV0IGRlbGF5VGltZSA9IDBcclxuXHJcblx0bmF2YmFyTGlzdEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LWVudHJ5JylcclxuXHRcdGl0ZW0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnLicgKyBkZWxheVRpbWUgKyAncydcclxuXHRcdGRlbGF5VGltZSsrXHJcblx0fSlcclxufVxyXG5cclxuY29uc3QgbmF2SGFuZGxpbmcgPSAoKSA9PiB7XHJcblx0aWYgKCFuYXZiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZiYXItYWN0aXZlJykpIHtcclxuXHRcdHNob3dOYXYoKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRoaWRlTmF2KClcclxuXHR9XHJcblx0bmF2YmFySXRlbUVudHJ5KClcclxuXHRuYXZiYXJMaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVOYXYpXHJcblx0fSlcclxufVxyXG5cclxuLy8gQ1VSUkVOVCBQQUdFIE5BVklHQVRJT04gSElHSExJR0hUXHJcblxyXG5jb25zdCBuYXZIaWdobGlnaHQgPSBwYXJhbXMgPT4ge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcblxyXG5cdHN3aXRjaCAoY3VycmVudFBhZ2UpIHtcclxuXHRcdGNhc2UgJy9pbmRleC5odG1sJzpcclxuXHRcdFx0bmF2YmFyTGlzdEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5jaGlsZHJlblswXS5pZCA9PSAnbWFpblBhZ2UnKSB7XHJcblx0XHRcdFx0XHRpdGVtLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2xpbmstYWN0aXZlJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlICcvdXNsdWdpLmh0bWwnOlxyXG5cdFx0Y2FzZSAnL2luc3RydWtjamUuaHRtbCc6XHJcblx0XHRjYXNlICcva29udHJvbGUuaHRtbCc6XHJcblx0XHRjYXNlICcvc3prb2xlbmlhLmh0bWwnOlxyXG5cdFx0Y2FzZSAnL3BsYW55Lmh0bWwnOlxyXG5cdFx0XHRuYXZiYXJMaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdGlmIChpdGVtLmNoaWxkcmVuWzBdLmlkID09ICdzZXJ2aWNlUGFnZScpIHtcclxuXHRcdFx0XHRcdGl0ZW0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnbGluay1hY3RpdmUnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJy9kb3N3aWFkY3plbmllLmh0bWwnOlxyXG5cdFx0XHRuYXZiYXJMaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdGlmIChpdGVtLmNoaWxkcmVuWzBdLmlkID09ICdleHBQYWdlJykge1xyXG5cdFx0XHRcdFx0aXRlbS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdsaW5rLWFjdGl2ZScpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSAnL2ZhcS5odG1sJzpcclxuXHRcdFx0bmF2YmFyTGlzdEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5jaGlsZHJlblswXS5pZCA9PSAnRkFRUGFnZScpIHtcclxuXHRcdFx0XHRcdGl0ZW0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnbGluay1hY3RpdmUnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgJy9rb250YWt0Lmh0bWwnOlxyXG5cdFx0XHRuYXZiYXJMaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdGlmIChpdGVtLmNoaWxkcmVuWzBdLmlkID09ICdjb250YWN0UGFnZScpIHtcclxuXHRcdFx0XHRcdGl0ZW0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnbGluay1hY3RpdmUnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0YnJlYWtcclxuXHR9XHJcbn1cclxuXHJcbi8vIFNIT1cgQ1VSUkVOVCBZRUFSIElOIEZPT1RFUlxyXG5cclxuY29uc3QgaGFuZGxlRGF0ZSA9IHBhcmFtcyA9PiB7XHJcblx0Y29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcclxuXHRkYXRlLnRleHRDb250ZW50ID0gY3VycmVudFllYXJcclxufVxyXG5cclxuLy8gQ0hBTkdFIE5BVklHQVRJT04gQkFDS0dST1VORCBDT0xPUlxyXG5cclxuY29uc3Qgc2V0TmF2SGVpZ2h0ID0gKCkgPT4ge1xyXG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG5cdFx0bmF2SGVpZ2h0ID0gODVcclxuXHRcdGhlYWRlckRhcmtIZWlnaHQgPSAyNDVcclxuXHRcdGhlYWRlckdyZXlIZWlnaHQgPSAzOTVcclxuXHR9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCkge1xyXG5cdFx0bmF2SGVpZ2h0ID0gMTAwXHJcblx0XHRoZWFkZXJEYXJrSGVpZ2h0ID0gMzEwXHJcblx0XHRoZWFkZXJHcmV5SGVpZ2h0ID0gNDUwXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBoZWFkZXJCZ0FkZCA9ICgpID0+IHtcclxuXHRpZiAod2luZG93LnNjcm9sbFkgPiBoZWFkZXJEYXJrSGVpZ2h0KSB7XHJcblx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWJsYWNrLWJnYycpXHJcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWRhcmstYmdjJylcclxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbWVkaXVtLWJnYycpXHJcblx0fSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8PSBoZWFkZXJEYXJrSGVpZ2h0KSB7XHJcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWJsYWNrLWJnYycpXHJcblx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWRhcmstYmdjJylcclxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbWVkaXVtLWJnYycpXHJcblx0fVxyXG5cdGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlYWRlckdyZXlIZWlnaHQpIHtcclxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtYmxhY2stYmdjJylcclxuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtZGFyay1iZ2MnKVxyXG5cdFx0bmF2LmNsYXNzTGlzdC5hZGQoJ25hdi1tZWRpdW0tYmdjJylcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG5hdkJhY2tncm91bmRBZGRNb2JpbGUgPSAoKSA9PiB7XHJcblx0Y29uc3QgY3VycmVudFNlY3Rpb24gPSB3aW5kb3cuc2Nyb2xsWVxyXG5cdHNldE5hdkhlaWdodCgpXHJcblxyXG5cdGFsbFNlY3Rpb24uZm9yRWFjaChzZWN0aW9uID0+IHtcclxuXHRcdGlmIChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLWJnYycpKSB7XHJcblx0XHRcdGhlYWRlckJnQWRkKClcclxuXHRcdH0gZWxzZSBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstYmdjJykgJiYgc2VjdGlvbi5vZmZzZXRUb3AgPD0gY3VycmVudFNlY3Rpb24gKyBuYXZIZWlnaHQpIHtcclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1ibGFjay1iZ2MnKVxyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LWRhcmstYmdjJylcclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tZWRpdW0tYmdjJylcclxuXHRcdH0gZWxzZSBpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lZGl1bS1iZ2MnKSAmJiBzZWN0aW9uLm9mZnNldFRvcCA8PSBjdXJyZW50U2VjdGlvbiArIG5hdkhlaWdodCkge1xyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWJsYWNrLWJnYycpXHJcblx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtZGFyay1iZ2MnKVxyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LmFkZCgnbmF2LW1lZGl1bS1iZ2MnKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmNvbnN0IG5hdkJhY2tncm91bmRBZGREZXNrdG9wID0gKCkgPT4ge1xyXG5cdGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gd2luZG93LnNjcm9sbFlcclxuXHRzZXROYXZIZWlnaHQoKVxyXG5cclxuXHRhbGxTZWN0aW9uLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblx0XHRpZiAoc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lZGl1bS1iZ2MnKSAmJiBzZWN0aW9uLm9mZnNldFRvcCA8PSBjdXJyZW50U2VjdGlvbiArIG5hdkhlaWdodCkge1xyXG5cdFx0XHRuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWRhcmstYmdjJylcclxuXHRcdFx0bmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tZWRpdW0tYmdjJylcclxuXHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdChzZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnZGFyay1iZ2MnKSAmJiBzZWN0aW9uLm9mZnNldFRvcCA8PSBjdXJyZW50U2VjdGlvbiArIG5hdkhlaWdodCkgfHxcclxuXHRcdFx0c2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1iZ2MnKVxyXG5cdFx0KSB7XHJcblx0XHRcdG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCduYXYtZGFyay1iZ2MnKVxyXG5cdFx0XHRuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2LW1lZGl1bS1iZ2MnKVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIENPTlRBQ1QgRk9STSBWQUxJREFUSU9OXHJcblxyXG5jb25zdCBjaGVja0lucHV0ID0gaW5wdXQgPT4ge1xyXG5cdGlucHV0LmZvckVhY2goZWwgPT4ge1xyXG5cdFx0aWYgKGVsLnZhbHVlID09PSAnJykge1xyXG5cdFx0XHRzaG93RXJyb3IoZWwsIGVsLnBsYWNlaG9sZGVyKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2xlYXJFcnJvcihlbClcclxuXHRcdFx0aWYgKGVsID09PSBtYWlsRm9ybSkge1xyXG5cdFx0XHRcdGNoZWNrTWFpbChlbClcclxuXHRcdFx0fSBlbHNlIGlmIChlbCA9PT0gcGhvbmVGb3JtKSB7XHJcblx0XHRcdFx0Y2hlY2tQaG9uZShlbClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmNvbnN0IHNob3dFcnJvciA9IChpbnB1dCwgbXNnKSA9PiB7XHJcblx0Y29uc3QgaW5wdXRCb3ggPSBpbnB1dC5wYXJlbnRFbGVtZW50XHJcblx0Y29uc3QgZXJyb3JNc2cgPSBpbnB1dEJveC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpXHJcblxyXG5cdGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG5cdGVycm9yTXNnLnRleHRDb250ZW50ID0gbXNnXHJcbn1cclxuXHJcbmNvbnN0IGNsZWFyRXJyb3IgPSBpbnB1dCA9PiB7XHJcblx0Y29uc3QgaW5wdXRCb3ggPSBpbnB1dC5wYXJlbnRFbGVtZW50XHJcblx0Y29uc3QgZXJyb3JNc2cgPSBpbnB1dEJveC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dCcpXHJcblxyXG5cdGVycm9yTXNnLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG5cdGVycm9yTXNnLnRleHRDb250ZW50ID0gJ2Vycm9yJ1xyXG59XHJcblxyXG5jb25zdCBjaGVja01haWwgPSBlbWFpbCA9PiB7XHJcblx0Y29uc3QgcmUgPVxyXG5cdFx0L14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLDN9KSkkL1xyXG5cclxuXHRlbWFpbC52YWx1ZSA9IGVtYWlsLnZhbHVlLnRyaW0oKVxyXG5cclxuXHRpZiAocmUudGVzdChlbWFpbC52YWx1ZSkpIHtcclxuXHRcdGNsZWFyRXJyb3IoZW1haWwpXHJcblx0fSBlbHNlIHtcclxuXHRcdHNob3dFcnJvcihlbWFpbCwgJ1BvZGFqIHBvcHJhd255IGVtYWlsIScpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBjaGVja1Bob25lID0gcGhvbmUgPT4ge1xyXG5cdGNvbnN0IHJlID0gL14oPzwhXFx3KShcXCg/KFxcK3wwMCk/NDhcXCk/KT9bIC1dP1xcZHszfVsgLV0/XFxkezN9WyAtXT9cXGR7M30oPyFcXHcpL1xyXG5cclxuXHRpZiAocmUudGVzdChwaG9uZS52YWx1ZSkpIHtcclxuXHRcdGNsZWFyRXJyb3IocGhvbmUpXHJcblx0fSBlbHNlIHtcclxuXHRcdHNob3dFcnJvcihwaG9uZSwgJ1BvZGFqIHBvcHJhd255IHRlbGVmb24hJylcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrRXJyb3JzID0gaW5wdXQgPT4ge1xyXG5cdGxldCBlcnJvckNvdW50ID0gMFxyXG5cclxuXHRpbnB1dC5mb3JFYWNoKGVsID0+IHtcclxuXHRcdGlmIChlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci10ZXh0JykudGV4dENvbnRlbnQgIT09ICdlcnJvcicpIHtcclxuXHRcdFx0ZXJyb3JDb3VudCsrXHJcblx0XHR9XHJcblx0fSlcclxuXHRpZiAoZXJyb3JDb3VudCA9PT0gMCkge1xyXG5cdFx0ZXJyb3JDb3VudCA9IDBcclxuXHRcdGNvbnNvbGUubG9nKCdzdGFydCB3ZXJ5ZmlrYWNqaScpXHJcblx0XHR2ZXJpZnlDYXB0Y2hhKClcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHZlcmlmeUZvcm1zID0gKCkgPT4ge1xyXG5cdGNoZWNrSW5wdXQoW25hbWVGb3JtLCBtYWlsRm9ybSwgcGhvbmVGb3JtLCBtZXNzYWdlRm9ybV0pXHJcblx0Y2hlY2tFcnJvcnMoW25hbWVGb3JtLCBtYWlsRm9ybSwgcGhvbmVGb3JtLCBtZXNzYWdlRm9ybV0pXHJcbn1cclxuXHJcbmNvbnN0IHZlcmlmeUNhcHRjaGEgPSAoKSA9PiB7XHJcblx0Z3JlY2FwdGNoYS5leGVjdXRlKClcclxuXHRwb3B1cE9wZW4oKVxyXG5cclxuXHQvLyBjb25zdCByZXNwb25zZSA9IGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoKVxyXG5cclxuXHQvLyByZXNwb25zZS5hamF4KHtcclxuXHQvLyAgICAgdHlwZTogXCJQT1NUXCIsXHJcblx0Ly8gICAgIHVybDogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS9zaXRldmVyaWZ5JyxcclxuXHQvLyAgICAgZGF0YToge1wic2VjcmV0XCIgOiBcIjZMZE5URTBsQUFBQUFGQnB2SndpRW9GS18wN2pfZFRmT1pCX0hzNlhcIiwgXCJyZXNwb25zZVwiIDogcmVzcG9uc2UsIFwicmVtb3RlaXBcIjpcImxvY2FsaG9zdFwifSxcclxuXHQvLyAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG5cdC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7IGNvbnNvbGUubG9nKGRhdGEpOyB9XHJcblx0Ly8gfSk7XHJcbn1cclxuXHJcbi8vIGNvbnN0IHZlcmlmeUNhcHRjaGEgPSAoKSA9PiB7XHJcbi8vIFx0Z3JlY2FwdGNoYS5leGVjdXRlKClcclxuLy8gXHRjb25zdCB0b2tlbiA9IGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoKVxyXG4vLyBcdGNvbnNvbGUubG9nKHRva2VuKVxyXG5cclxuLy8gXHRjb25zdCBwb3N0RGF0YSA9IHtcclxuLy8gXHRcdHNlY3JldDogJzZMZE5URTBsQUFBQUFGQnB2SndpRW9GS18wN2pfZFRmT1pCX0hzNlgnLFxyXG4vLyBcdFx0cmVzcG9uc2U6ICdVU0VSX1JFU1BPTlNFX0tFWScsXHJcbi8vIFx0fVxyXG5cclxuLy8gXHRmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpL3NpdGV2ZXJpZnknLCB7XHJcbi8vIFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuLy8gXHRcdGhlYWRlcnM6IHtcclxuLy8gXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4vLyBcdFx0fSxcclxuLy8gXHRcdG1vZGU6ICdjb3JzJyxcclxuLy8gXHRcdGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMocG9zdERhdGEpLFxyXG4vLyBcdH0pXHJcbi8vIFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbi8vIFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4vLyB9XHJcbi8vIGNvbnN0IHZlcmlmeUNhcHRjaGEgPSAoKSA9PiB7XHJcbi8vIFx0Z3JlY2FwdGNoYS5leGVjdXRlKClcclxuXHJcbi8vIFx0Y29uc3QgdG9rZW4gPSBncmVjYXB0Y2hhLmdldFJlc3BvbnNlKClcclxuXHJcbi8vIFx0ZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS9zaXRldmVyaWZ5Jywge1xyXG4vLyBcdFx0bWV0aG9kOiAnUE9TVCcsXHJcbi8vIFx0XHRzZWNyZXQ6ICc2TGROVEUwbEFBQUFBRkJwdkp3aUVvRktfMDdqX2RUZk9aQl9IczZYJyxcclxuLy8gXHRcdHJlc3BvbnNlOiB0b2tlbixcclxuLy8gXHR9KVxyXG4vLyBcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyBcdFx0LnRoZW4oZGF0YSA9PiB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKCdPZHBvd2llZMW6IHNlcndlcmE6JywgZGF0YSlcclxuLy8gXHRcdH0pXHJcbi8vIFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xyXG4vLyBcdFx0XHRjb25zb2xlLmVycm9yKCdCxYLEhWQgcG9kY3phcyB3eXN5xYJhbmlhIMW8xIVkYW5pYTonLCBlcnJvcilcclxuLy8gXHRcdH0pXHJcbi8vIH1cclxuXHJcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4vLyBcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbi8vIFx0Ly8gUG9iaWVyeiBvZHBvd2llZMW6IHJlQ0FQVENIQVxyXG4vLyBcdGNvbnN0IHJlc3BvbnNlID0gZ3JlY2FwdGNoYS5nZXRSZXNwb25zZSgpXHJcblxyXG4vLyBcdC8vIEplxZtsaSBvZHBvd2llZMW6IGplc3QgcHVzdGFcclxuLy8gXHRpZiAocmVzcG9uc2UubGVuZ3RoID09IDApIHtcclxuLy8gXHRcdC8vIFd5xZt3aWV0bCBrb211bmlrYXQgbyBixYLEmWR6aWVcclxuLy8gXHRcdGFsZXJ0KCdQb3R3aWVyZMW6LCDFvGUgbmllIGplc3RlxZsgcm9ib3RlbSEnKVxyXG4vLyBcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0fVxyXG5cclxuLy8gXHQvLyBKZcWbbGkgb2Rwb3dpZWTFuiBpc3RuaWVqZSwgd3nFm2xpaiBmb3JtdWxhcnpcclxuLy8gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJykuc3VibWl0KClcclxuLy8gfSlcclxuXHJcbi8vIFBPUFVQXHJcblxyXG5jb25zdCBwb3B1cE9wZW4gPSAoKSA9PiB7XHJcblx0cG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAtc2hvdycpXHJcblx0c2hvd0VtYWlsQ29uZmlybWF0aW9uKClcclxufVxyXG5cclxuY29uc3Qgc2hvd0VtYWlsQ29uZmlybWF0aW9uID0gKCkgPT4ge1xyXG5cdGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPT09ICc/bWFpbF9zdGF0dXM9c2VudCcpIHtcclxuXHRcdHBvcHVwT2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG5cdFx0cG9wdXBFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0fVxyXG5cclxuXHRpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID09PSAnP21haWxfc3RhdHVzPWVycm9yJykge1xyXG5cdFx0cG9wdXBPay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHRwb3B1cEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcblx0cG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtc2hvdycpXHJcbn1cclxuXHJcbi8vIFpPT00gSU1BR0VTIE9GIEVWQUNVQVRJT04gUExBTlxyXG5cclxuY29uc3Qgem9vbVBsYW5JbWdNb2JpbGUgPSBpbWFnZSA9PiB7XHJcblx0Y29uc3Qgc3JjID0gaW1hZ2Uuc3JjXHJcblxyXG5cdHdpbmRvdy5vcGVuKHNyYylcclxufVxyXG5cclxuY29uc3Qgem9vbVBsYW5JbWdEZXNrdG9wID0gaW1hZ2UgPT4ge1xyXG5cdGNvbnN0IHNyYyA9IGltYWdlLnNyY1xyXG5cclxuXHRpbWFnZVpvb21TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltYWdlem9vbS1zaG93JylcclxuXHRpbWFnZVpvb20uc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpXHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlWm9vbVNlY3Rpb24gPSAoKSA9PiB7XHJcblx0aW1hZ2Vab29tU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZXpvb20tc2hvdycpXHJcblx0aW1hZ2Vab29tLnNldEF0dHJpYnV0ZSgnc3JjJywgJycpXHJcbn1cclxuXHJcbmNvbnN0IHpvb21JbWcgPSBlID0+IHtcclxuXHQvL3dza2F6dWplIHBvenljamUga3Vyc29yYVxyXG5cdGNvbnN0IHggPSBlLmNsaWVudFhcclxuXHRjb25zdCB5ID0gZS5jbGllbnRZXHJcblxyXG5cdC8vcG96eWNqYSBvYnJhenVcclxuXHRjb25zdCBpbWdYID0gaW1hZ2Vab29tLm9mZnNldExlZnQgKyAoaW1hZ2Vab29tU2VjdGlvbi5vZmZzZXRMZWZ0IC0gaW1hZ2Vab29tU2VjdGlvbi5vZmZzZXRXaWR0aCAvIDIpXHJcblx0Y29uc3QgaW1nWSA9IGltYWdlWm9vbS5vZmZzZXRUb3AgKyAoaW1hZ2Vab29tU2VjdGlvbi5vZmZzZXRUb3AgLSBpbWFnZVpvb21TZWN0aW9uLm9mZnNldEhlaWdodCAvIDIpXHJcblxyXG5cdC8vcG96eWNqYSBrdXJzb3JhIHdld27EhXRyeiBvYnJhemthXHJcblx0Y29uc3QgbmV3WCA9IChpbWdYIC0geCkgKiAtMVxyXG5cdGNvbnN0IG5ld1kgPSAoaW1nWSAtIHkpICogLTFcclxuXHJcblx0aW1hZ2Vab29tLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGAke25ld1h9cHggJHtuZXdZfXB4YFxyXG5cclxuXHRpbWFnZVpvb20uY2xhc3NMaXN0LmFkZCgnem9vbWVkLWltYWdlJylcclxufVxyXG5cclxuY29uc3QgcmVzZXRJbWcgPSAoKSA9PiB7XHJcblx0aW1hZ2Vab29tLmNsYXNzTGlzdC5yZW1vdmUoJ3pvb21lZC1pbWFnZScpXHJcbn1cclxuXHJcbi8vQUREIEVWRU5UIExJU1RFTkVSU1xyXG5cclxuYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2SGFuZGxpbmcpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSB7XHJcblx0XHRuYXZCYWNrZ3JvdW5kQWRkTW9iaWxlKClcclxuXHR9IGVsc2Uge1xyXG5cdFx0bmF2QmFja2dyb3VuZEFkZERlc2t0b3AoKVxyXG5cdH1cclxufSlcclxuaGFuZGxlRGF0ZSgpXHJcbm5hdkhpZ2hsaWdodCgpXHJcblxyXG5pZiAoYWxsUGxhbkltYWdlcykge1xyXG5cdGFsbFBsYW5JbWFnZXMuZm9yRWFjaChpbWcgPT4ge1xyXG5cdFx0aW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApIHtcclxuXHRcdFx0XHR6b29tUGxhbkltZ01vYmlsZShpbWcpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0em9vbVBsYW5JbWdEZXNrdG9wKGltZylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5pZiAoaW1hZ2Vab29tKSB7XHJcblx0aW1hZ2Vab29tLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHpvb21JbWcpXHJcblx0aW1hZ2Vab29tLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgcmVzZXRJbWcpXHJcbn1cclxuXHJcbmlmICh6b29tQ2xvc2VCdG4pIHtcclxuXHR6b29tQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVpvb21TZWN0aW9uKVxyXG59XHJcblxyXG5pZiAoc2VuZEJ0bikge1xyXG5cdHNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0dmVyaWZ5Rm9ybXMoKVxyXG5cdH0pXHJcbn1cclxuXHJcbmlmIChwb3B1cENsb3NlKSB7XHJcblx0cG9wdXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wdXApXHJcbn1cclxuIl19

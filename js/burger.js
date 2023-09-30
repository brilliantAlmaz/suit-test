const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
const html = document.querySelector('html');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	html.classList.toggle('lock');
	body.classList.toggle('lock');
})
headerMenu.addEventListener('click', function () {
	burger.classList.remove('active');
	headerMenu.classList.remove('active');
	html.classList.remove('lock');
	body.classList.remove('lock');
})
//scrollTop

const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
	let scroll = document.querySelector('.scroll-top');
	scroll.classList.toggle('active', window.scrollY > 500);
});
scrollTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

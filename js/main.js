const scrollTop = document.querySelector('.scroll-top');
const footerYear = document.querySelector('.footer-year');
//scrollTop
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
//year footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

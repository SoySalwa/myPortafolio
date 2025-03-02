const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		const identifier = entry.target.getAttribute("id");
		const links = document.querySelector(`nav-links[href="#${identifier}"]`);
		if (entry.isIntersecting) {
			document.querySelector("nav-links.selected").classList.remove("selected");
			links.classList.add("selected");
		}
	});
}, { rootMargin: "-50% 0px -50% 0px" })

export default observer;

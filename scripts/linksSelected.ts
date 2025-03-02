import React from 'react';

export function linksSelected() {
	const links = React.useRef<HTMLUListElement>(null);

	const navLinks = links.current?.querySelectorAll(".nav-links");

	if (navLinks) {
		navLinks.forEach((link) => {
			link.addEventListener("click", () => {
				link.classList.add("selected");
			});
		});
	};
}


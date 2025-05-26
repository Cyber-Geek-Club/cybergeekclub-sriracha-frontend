import { gsap } from 'gsap';

export function setupBasicHoverAnimation() {
	const tl = gsap.timeline({ paused: true });
	const buttons = document.querySelectorAll('.gsap-hover');

	buttons.forEach((btn) => {
		btn.addEventListener('mouseenter', () => {
			gsap.to(btn, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
		});

		btn.addEventListener('mouseleave', () => {
			gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
		});
	});

	return tl;
}

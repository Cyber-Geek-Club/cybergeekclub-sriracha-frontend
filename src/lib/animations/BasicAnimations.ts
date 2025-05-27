import { gsap } from 'gsap';

/**
 * ใช้ hover animation โดยการใส่ class `.basic-hover`.
 *
 * เมื่อ mouse enter จะทำให้ปุ่มขยายขึ้นเล็กน้อย
 * เมื่อ mouse leave จะทำให้ปุ่มกลับสู่ขนาดเดิม
 *
 *  @example
 *  onMount(() => {
 *  	setupBasicHoverAnimation();
 *	});
 */
export function setupBasicHoverAnimation() {
	const buttons = document.querySelectorAll('.basic-hover');

	buttons.forEach((btn) => {
		btn.addEventListener('mouseenter', () => {
			gsap.to(btn, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
		});

		btn.addEventListener('mouseleave', () => {
			gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
		});
	});
}

/**
 * ใช้ click animation โดยการใส่ class `.basic-click`.
 *
 * เมื่อ mouse down จะทำให้ปุ่มหดตัวเล็กน้อย
 * เมื่อ mouse up จะทำให้ปุ่มกลับสู่ขนาดเดิม
 *
 *  @example
 *  onMount(() => {
 *  	setupBasicClickAnimation();
 *	});
 */
export function setupBasicClickAnimation() {
	const buttons = document.querySelectorAll('.basic-click');

	buttons.forEach((btn) => {
		btn.addEventListener('mousedown', () => {
			gsap.to(btn, { scale: 0.9, duration: 0.1, ease: 'power2.out' });
		});
		btn.addEventListener('mouseup', () => {
			gsap.to(btn, { scale: 1, duration: 0.1, ease: 'power2.out' });
		});
	});
}

/**
 * ใช้ click animation พร้อม hover โดยการใส่ class `.basic-click-hover`.
 *
 * เมื่อ mouse down จะทำให้ปุ่มหดตัวเล็กน้อย
 * เมื่อ mouse up จะทำให้ปุ่มขยายขึ้นเล็กน้อย
 * เมื่อ mouse enter จะทำให้ปุ่มขยายขึ้นเล็กน้อย
 * เมื่อ mouse leave จะทำให้ปุ่มกลับสู่ขนาดเดิม
 *
 *  @example
 *  onMount(() => {
 *  	setupBasicClickAnimationWithHover();
 *	});
 */
export function setupBasicClickAnimationWithHover() {
	const buttons = document.querySelectorAll('.basic-click-hover');

	buttons.forEach((btn) => {
		btn.addEventListener('mousedown', () => {
			gsap.to(btn, { scale: 0.9, duration: 0.1, ease: 'power2.out' });
		});
		btn.addEventListener('mouseup', () => {
			gsap.to(btn, { scale: 1.1, duration: 0.1, ease: 'power2.out' });
		});

		btn.addEventListener('mouseenter', () => {
			gsap.to(btn, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
		});

		btn.addEventListener('mouseleave', () => {
			gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.inOut' });
		});
	});
}

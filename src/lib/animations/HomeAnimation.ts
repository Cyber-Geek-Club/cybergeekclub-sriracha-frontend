import { gsap } from 'gsap';

/**
 * ใช้ hover animation สำหรับหน้าแรก โดยการใส่ class `.home-hover`.
 *
 * เมื่อ mouse enter จะทำให้ปุ่มขยายขึ้นเล็กน้อย
 * เมื่อ mouse leave จะทำให้ปุ่มกลับสู่ขนาดเดิม
 *
 *  @example
 *  onMount(() => {
 *  	setupHomeHoverAnimation();
 *	});
 */
export function setupHomeHoverAnimation() {
	const tl = gsap.timeline({ paused: true });

	tl.set('.star', {
		opacity: 0,
		scale: 0.1,
		y: 1000
	});
	tl.set('.big-logo', {
		scale: 0.1,
		opacity: 0
	});
	tl.set('.gradient-text', {
		backgroundSize: '200% 300%',
		backgroundPosition: '100% 0%'
	});
	tl.to('.star', {
		y: 0,
		opacity: 1,
		scale: 1,
		duration: 1.5,
		ease: 'back.inOut'
	});
	tl.to(
		'.star',
		{
			rotation: 720,
			duration: 4,
			ease: 'back.inOut'
		},
		'>-1.5'
	);
	tl.to(
		'.star',
		{
			opacity: 0,
			scale: 0.1,
			duration: 1.5,
			ease: 'power4.inOut'
		},
		'>-2'
	);
	tl.to(
		'.big-logo',
		{
			opacity: 1,
			duration: 0.2
		},
		'-=1'
	);
	tl.to(
		'.big-logo',
		{
			scale: 6,
			duration: 0.5,
			ease: 'back.inOut'
		},
		'>-0.2'
	);
	tl.from(
		'.fade-in',
		{
			opacity: 0,
			scale: 0.1,
			duration: 1,
			y: 200,
			ease: 'power2.out',
			stagger: 0.2
		},
		'>-0.5'
	);
	tl.from(
		'.light',
		{
			opacity: 0,
			scaleX: 0.1,
			duration: 1,
			ease: 'power2.inOut'
		},
		'>-0.5'
	);
	tl.to('.gradient-text', {
		backgroundPosition: '0% 100%',
		duration: 1.5,
		ease: 'power2.inOut'
	});
	tl.to('.big-logo', {
		opacity: 0.9,
		scale: 6.1,
		y: -10,
		duration: 2,
		repeat: -1,
		yoyo: true
	});

	return tl;
}

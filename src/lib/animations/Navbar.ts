import { gsap } from 'gsap';

export function setupNavbarAnimation() {
	const tl = gsap.timeline({ paused: true });
	addMouseFollowAnimation();

	tl.from('#navbar', {
		duration: 1,
		opacity: 0,
		y: -100,
		ease: 'back.out(2)'
	});
	tl.fromTo(
		'.animate-bg',
		{
			duration: 0.5,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1
		}
	);
	tl.fromTo(
		'.nav-item1',
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		}
	);
	tl.fromTo(
		'.nav-item2',
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		},
		'-=0.4'
	);
	tl.fromTo(
		'.nav-item3',
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		},
		'-=0.7'
	);
	tl.fromTo(
		['.nav-item4', '.logo'],
		{
			duration: 0.2,
			opacity: 0
		},
		{
			duration: 0.2,
			opacity: 1,
			repeat: 2
		},
		'-=1'
	);

	return tl;
}

export function addMouseFollowAnimation() {
	const cursor = document.querySelector('.follow-cursor') as HTMLElement;
	const container = document.querySelector('.follow-area') as HTMLElement;
	if (!cursor || !container) return;

	const handleMouseMove = (e: MouseEvent) => {
		const rect = container.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

		gsap.to(cursor, {
			duration: 0.3,
			x: Math.max(-10, Math.min(10, (x - container.clientWidth / 2) * 0.1)),
			y: y - cursor.offsetHeight / 2,
			ease: 'power2.out'
		});
	};

	const handleMouseLeave = () => {
		gsap.to(cursor, {
			duration: 0.5,
			x: 0,
			y: 0,
			ease: 'power2.out'
		});
	};

	container.addEventListener('mousemove', handleMouseMove);
	container.addEventListener('mouseleave', handleMouseLeave);
}

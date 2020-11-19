const tl = gsap.timeline({defaults: { ease: 'power1.out' } } )

tl.to('.text', { y:'0%', duration: 1, stagger: 0.3 });
tl.to('.slider',{ y: '-100%', duration: 1, delay: 0.8});
tl.to('.intro', {y: '-100%', duration: 1}, '-=1');
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.5, duration: 0.5});
tl.fromTo('.hero-content', {opacity: 0}, {opacity: 1, duration: 0.5, duration: 0.5}, '-=0.5');
tl.fromTo('.scrolldown', {opacity: 0}, {opacity: 1, duration: 0.5, duration: 0.5}, '-=0.5');
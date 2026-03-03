import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.defaults({
  duration: 1,
  ease: 'power3.out',
});

export { gsap, ScrollTrigger, TextPlugin };

import { TweenMax, Linear } from 'gsap';

export default {
  Spin(target) {
    TweenMax.to(target, 2, {
      rotation: '360',
      ease: Linear.easeNone,
      delay: 0.2,
      repeat: -1,
    });
  },
};

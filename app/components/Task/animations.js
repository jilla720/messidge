import { TweenLite, TweenMax, Power1 } from 'gsap';

export default {
  FocusScale(target) {
    return (
      TweenLite.to(target, 0.5, {
        borderRadius: 15,
        ease: Power1.easeInOut,
      })
    );
  },
  FocusScaleRev(target) {
    return (
      TweenLite.to(target, 0.5, {
        borderRadius: 5,
        ease: Power1.easeInOut,
      })
    );
  },
  TextFocus(target) {
    return (
      TweenLite.to(target, 0.5, {
        minHeight: 250,
        ease: Power1.easeOut,
      })
    );
  },
  TextBlur(target) {
    return (
      TweenLite.to(target, 0.5, {
        minHeight: 200,
        ease: Power1.easeOut,
      })
    );
  },
  Remove(target, cb) {
    return (
      TweenMax.to(target, 0.5, {
        width: 0,
        ease: Power1.easeOut,
        onComplete: cb,
      })
    );
  },
};

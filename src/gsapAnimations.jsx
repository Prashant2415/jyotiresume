import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  gsap.utils.toArray("section").forEach((sec) => {
    gsap.from(sec, {
      scrollTrigger: {
        trigger: sec,
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  });
};
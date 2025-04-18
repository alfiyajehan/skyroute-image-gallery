// TextSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
  const paraRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(paraRef.current, { types: 'lines' });

    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1
    });

    return () => split.revert();
  }, []);

  return (
    <div className="w-[95%] sm:w-[80%] mx-auto sm:p-10 rounded-md">
      <p
        ref={paraRef}
        className="text-white text-[20px] leading-[1.6] font-light text-center font-[trajan]"
      >
        Resin art is a captivating form of creative expression that blends color, texture, and shine.
        Each piece is unique, created with precision and imagination to produce mesmerizing effects.
        The flow of resin mimics nature's unpredictability, resulting in elegant, glossy artworks that enchant the eye.
      </p>
    </div>
  );
};

export default TextSection;

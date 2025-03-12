import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimationConfig {
  type: "landing" | "about";
}

export const useEntranceAnimation = (config: AnimationConfig) => {
  const introRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (config.type === "landing") {
      // 初始状态
      gsap.set([introRef.current, descriptionRef.current, contactRef.current, statsRef.current], {
        opacity: 0,
        y: 20
      });

      // Landing 页面的顺序动画
      timeline
        .to(introRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2
        })
        .to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8
        }, "-=0.4")
        .to(contactRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8
        }, "-=0.4")
        .to(statsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8
        }, "-=0.4");
    }
    
    else if (config.type === "about") {
      // 初始状态
      gsap.set([leftRef.current, rightRef.current], {
        opacity: 0,
      });

      gsap.set(leftRef.current, { x: -50 });
      gsap.set(rightRef.current, { x: 50 });

      // About 页面的左右动画
      timeline
        .to(leftRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2
        })
        .to(rightRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8
        }, "-=0.6"); // 稍微重叠动画以创造连贯效果
    }

    return () => {
      timeline.kill();
    };
  }, [config.type]);

  return {
    // Landing page refs
    introRef,
    descriptionRef,
    contactRef,
    statsRef,
    // About page refs
    leftRef,
    rightRef
  };
};

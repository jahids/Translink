"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProcessCards: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const process = t.process.steps;

  useGSAP(() => {
    const slides = slidesRef.current;
    if (!slides.length || !headingRef.current || !sectionRef.current) return;

    const headerPin = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 5%",
      endTrigger: slidesRef.current[slidesRef.current.length - 2],
      end: "center top",
      pin: headingRef.current,
      pinSpacing: false,
      anticipatePin: 1,
    });

    slides.slice(0, 3).forEach((slide) => {
      if (!slide) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 25%",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      const getAnimationValues = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        if (isMobile) return { scale: 0.8, z: -50, rotationX: 8, opacity: 0 };
        if (isTablet) return { scale: 0.7, z: -75, rotationX: 12, opacity: 0 };
        return { scale: 0.6, z: -100, rotationX: 15, opacity: 0 };
      };

      tl.to(slide, {
        ...getAnimationValues(),
        duration: 0.7,
        ease: "power2.inOut",
      });
    });

    const updatePinning = () => {
      if (window.innerWidth < 768) {
        headerPin.disable();
      } else {
        headerPin.enable();
      }
    };

    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    updatePinning();
    window.addEventListener("resize", updatePinning);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updatePinning);
    };
  }, []);

  const addSlideRef = (el: HTMLDivElement | null, index: number) => {
    if (el) slidesRef.current[index] = el;
  };

  return (
    <div ref={sectionRef} className="relative space-y-4 px-4 sm:px-6 lg:px-8">
      <SectionHeading
        ref={headingRef}
        badge={t.process.badge}
        heading={t.process.heading}
        description={t.process.description}
        size="md"
        align="center"
        as="h2"
        id="process-heading"
        className="mb-6 md:mb-14"
      />

      <div ref={containerRef} className="relative">
        {process.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            ref={(el) => addSlideRef(el, index)}
            className="relative mb-6 flex h-fit w-full items-center justify-center sm:mb-8 md:mb-10"
          >
            <div
              className="relative h-fit w-full rounded-lg bg-cover p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ backgroundImage: `url(${slide.bg_image})` }}
            >
              <div className="w-full space-y-3 rounded-md bg-white/20 p-4 backdrop-blur-lg sm:space-y-4 sm:p-6 md:max-w-7/12">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="heading text-h4 text-heading font-semibold">{slide.title}</h3>
                  <p className="text-xs font-normal tracking-wide text-[#323c4d] sm:text-sm">
                    <span> 💡</span> {slide.tagline}
                  </p>
                </div>

                <p className="text-p text-sm leading-snug text-black/60 sm:text-base lg:max-w-4/5">
                  {slide.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
                  {slide.deliverables.map((dl, ix) => (
                    <li
                      key={`deliverable-${ix}`}
                      className="text-heading bg-tag-bg/20 rounded-4xl px-3 py-1 text-xs tracking-wide backdrop-blur-lg sm:px-4"
                    >
                      {dl.item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-6 md:right-12 md:bottom-8 lg:right-16 lg:bottom-10">
                <span
                  className="text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
                  style={{
                    WebkitTextStroke: "2px rgb(225,225,225,0.9",
                    textShadow: "0 1px 2px rgba(225, 225, 225, 0.05)",
                    color: "rgb(0,0,0,0.09)",
                  }}
                >
                  {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCards;

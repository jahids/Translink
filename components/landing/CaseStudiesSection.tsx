"use client";

import ImageCarousel from "@/components/custom/ImageCarousel";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyCardProps {
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ index }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Static data (images, links) from caseStudies; translated text from i18n
  const base = caseStudies[index];
  const tx = t.caseStudiesData[index];

  useGSAP(() => {
    if (cardRef.current && gsap.effects?.fadeUpOnScroll) {
      gsap.effects.fadeUpOnScroll(contentRef.current, {
        start: "top 90%",
        duration: 0.8,
        markers: false,
      });
      gsap.effects.fadeUpOnScroll(imageRef.current, {
        start: "top 90%",
        duration: 0.8,
        delay: 0.2,
        markers: false,
      });
    }
  }, [index]);

  if (!base || !tx) return null;

  return (
    <section
      ref={cardRef}
      className="grid grid-cols-1 gap-8 rounded-lg p-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-4 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`case-study-${index}-title`}
      role="article"
    >
      <div ref={contentRef} className="col-span-1 space-y-6 lg:col-span-5">
        <div className="space-y-6">
          <div className="flex items-center">
            <img
              src={base.logo_src}
              className="aspect-auto max-h-8 w-auto"
              alt={`${base.name} company logo`}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="space-y-3">
            <p className="text-tag text-sm font-normal">{base.name}</p>
            <h3
              id={`case-study-${index}-title`}
              className="text-h4 text-heading pr-4 text-2xl leading-tight font-semibold lg:text-3xl"
            >
              {tx.project_title}
            </h3>
          </div>

          <div className="space-y-4">
            <h4 className="sr-only">Key Features</h4>
            <ul
              className="list-disc space-y-3 pl-4"
              role="list"
              aria-label="Project features and achievements"
            >
              {tx.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-label text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          aria-describedby={`case-study-${index}-description`}
          type="button"
        >
          {t.caseStudies.viewCaseStudy}
          <span className="sr-only"> for {base.name}</span>
        </Button>

        <p id={`case-study-${index}-description`} className="sr-only">
          Learn more about the {base.name} project and its implementation details
        </p>
      </div>

      <div
        ref={imageRef}
        className="col-span-1 aspect-[4/3] lg:col-span-7"
        role="region"
        aria-label={`${base.name} project screenshots`}
      >
        <ImageCarousel
          images={base.demo_images}
          caseStudyId={index}
          caseStudyName={base.name}
        />
      </div>
    </section>
  );
};

const CaseStudies: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-5 py-16 md:py-24"
      aria-labelledby="case-studies-heading"
      role="region"
    >
      <SectionHeading
        ref={headingRef}
        badge={t.caseStudies.badge}
        heading={t.caseStudies.heading}
        description={t.caseStudies.description}
        size="md"
        align="center"
        as="h2"
        id="case-studies-heading"
        className="mb-8 md:mb-14"
      />

      <div className="space-y-8 md:space-y-24" role="main" aria-label="Case studies collection">
        {caseStudies.slice(0, 3).map((_, index) => (
          <div key={index}>
            <CaseStudyCard index={index} />
          </div>
        ))}
      </div>

      <a
        href="#main-navigation"
        className="sr-only z-50 rounded-md bg-blue-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Skip to main navigation
      </a>
    </section>
  );
};

export default CaseStudies;

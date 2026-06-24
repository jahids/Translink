"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ index }) => {
  const { t } = useLanguage();
  const base = caseStudies[index];
  const tx = t.caseStudiesData[index];

  // Use translated testimonial; only render if it exists
  const testimonial = tx?.testimonial ?? base?.testimonial;
  if (!testimonial || !testimonial.trim()) return null;

  return (
    <article
      className="testimonial-card-bg flex h-full w-full flex-col space-y-3 rounded-2xl text-left sm:space-y-4"
      aria-labelledby={`testimonial-${index}-title`}
      role="article"
    >
      <div className="flex aspect-video items-center justify-center overflow-hidden rounded-t-md">
        <img
          src={base.test_img}
          className="aspect-video h-full w-full object-cover"
          alt={`${base.name} project preview image`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="relative flex flex-1 flex-col space-y-3 px-3 pb-3 sm:space-y-4 sm:px-4 sm:pb-4">
        <blockquote
          className="text-heading/90 text-sm leading-tight font-bold tracking-wide sm:text-base md:text-lg"
          cite={base.case_study_link}
        >
          <p id={`testimonial-${index}-title`}>{testimonial}</p>
        </blockquote>
        <div className="mt-auto space-y-1 sm:space-y-1.5" aria-label="Client details">
          <div className="flex items-center">
            <img
              src={base.logo_src}
              className="aspect-auto max-h-5 w-auto sm:max-h-6"
              alt={`${base.name} company logo`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-heading text-xs font-medium sm:text-sm">
            {base.founder_name}
            {(tx?.position ?? base.position) ? (
              <span className="text-tag ml-1 text-xs font-normal sm:ml-2 sm:text-sm">
                {tx?.position ?? base.position}
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </article>
  );
};

function Testimonial() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (gridRef.current && gsap.effects?.fadeUpOnScroll) {
      const cards = gridRef.current.querySelectorAll("article");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          start: "top 92%",
          duration: 0.7,
          delay: Math.min(index * 0.04, 0.3),
          markers: false,
        });
      });
    }

    if (statsRef.current && gsap.effects?.fadeUpOnScroll) {
      const items = statsRef.current.querySelectorAll('[data-stat-item="true"]');
      items.forEach((el) => {
        gsap.effects.fadeUpOnScroll(el as Element, {
          start: "top 95%",
          duration: 0.6,
          markers: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
        aria-labelledby="testimonials-heading"
        role="region"
      >
        <SectionHeading
          ref={headingRef}
          badge={t.testimonials.badge}
          heading={t.testimonials.heading}
          description={t.testimonials.description}
          size="md"
          align="center"
          as="h2"
          id="testimonials-heading"
          className="mb-6 sm:mb-8 md:mb-14"
          showDescriptionToScreenReaders={true}
        />

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:gap-10"
          ref={gridRef}
          role="list"
          aria-label="Client testimonials"
        >
          {caseStudies.map((_, index) => (
            <div role="listitem" key={index}>
              <TestimonialCard index={index} />
            </div>
          ))}
        </div>

        <section
          className="mt-10 sm:mt-12 md:mt-14 lg:mt-16"
          aria-labelledby="stats-heading"
          role="region"
          ref={statsRef}
        >
          <h3 id="stats-heading" className="sr-only">
            Impact metrics
          </h3>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col divide-y divide-gray-200 sm:divide-y-0 sm:flex-row sm:divide-x">
              <div
                className="flex flex-1 flex-col items-start px-4 py-4 sm:items-center sm:px-6 sm:py-6 md:py-0"
                data-stat-item="true"
              >
                <div className="text-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
                  {t.testimonials.stats.projects.value}
                </div>
                <p className="text-label mt-1 text-sm sm:mt-2 sm:text-base">
                  {t.testimonials.stats.projects.label}
                </p>
              </div>

              <div
                className="flex flex-1 flex-col items-start px-4 py-4 sm:items-center sm:px-6 sm:py-6 md:py-0"
                data-stat-item="true"
              >
                <div className="text-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
                  {t.testimonials.stats.clients.value}
                </div>
                <p className="text-label mt-1 text-sm sm:mt-2 sm:text-base">
                  {t.testimonials.stats.clients.label}
                </p>
              </div>

              <div
                className="flex flex-1 flex-col items-start px-4 py-4 sm:items-center sm:px-6 sm:py-6 md:py-0"
                data-stat-item="true"
              >
                <div className="text-heading text-3xl font-semibold sm:text-4xl md:text-5xl">
                  {t.testimonials.stats.revenue.value}
                </div>
                <p className="text-label mt-1 text-sm sm:mt-2 sm:text-base">
                  {t.testimonials.stats.revenue.label}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Testimonial;

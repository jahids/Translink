"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, TrendingUp, Users2 } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ index }) => {
  const { t } = useLanguage();
  const base = caseStudies[index];
  const tx = t.caseStudiesData[index];

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

const statsConfig = [
  { num: 120, prefix: "",  suffix: "+",   icon: Layers,     key: "projects" as const },
  { num: 50,  prefix: "",  suffix: "+",   icon: Users2,     key: "clients"  as const },
  { num: 2,   prefix: "$", suffix: "M+",  icon: TrendingUp, key: "revenue"  as const },
];

function Testimonial() {
  const { t } = useLanguage();
  const sectionRef    = useRef<HTMLElement>(null);
  const headingRef    = useRef<HTMLDivElement>(null);
  const gridRef       = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLElement>(null);
  const statCardsRef  = useRef<HTMLDivElement>(null);
  const counterRefs   = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
      });
    }

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll("article");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          start: "top 92%",
          duration: 0.7,
          delay: Math.min(index * 0.04, 0.3),
        });
      });
    }

    // Stat cards stagger in
    if (statCardsRef.current) {
      gsap.effects.staggerFadeUpOnScroll(statCardsRef.current, {
        start: "top 85%",
        duration: 0.65,
        yOffset: 35,
        stagger: 0.14,
      });
    }

    // Number counter animations — trigger on the section so they fire
    // after the stagger fade-in, not while elements are still hidden
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 78%",
      once: true,
      onEnter: () => {
        counterRefs.current.forEach((el, i) => {
          if (!el) return;
          const { num, prefix, suffix } = statsConfig[i];
          const proxy = { val: 0 };

          gsap.to(proxy, {
            val: num,
            duration: 2,
            ease: "power3.out",
            delay: i * 0.2,
            onUpdate() {
              el.textContent = `${prefix}${Math.round(proxy.val)}${suffix}`;
            },
            onComplete() {
              // guarantee final value even if rounding drifts
              el.textContent = `${prefix}${num}${suffix}`;
            },
          });
        });
      },
    });

    // useGSAP auto-reverts its GSAP context on unmount
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

        {/* Stats strip */}
        <section
          ref={statsRef}
          className="mt-12 sm:mt-16 md:mt-20"
          aria-labelledby="stats-heading"
          role="region"
        >
          <h3 id="stats-heading" className="sr-only">Impact metrics</h3>

          <div
            ref={statCardsRef}
            className="relative overflow-hidden rounded-2xl bg-[rgb(29,39,54)]"
          >
            {/* Decorative radial glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 80% 0%, rgba(255,255,255,0.045) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 100%, rgba(255,255,255,0.025) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 sm:grid-cols-3">
              {statsConfig.map((stat, i) => {
                const Icon = stat.icon;
                const label = t.testimonials.stats[stat.key].label;
                return (
                  <div
                    key={stat.key}
                    className={`flex flex-col items-center gap-3 px-8 py-10 text-center sm:py-14 ${
                      i < statsConfig.length - 1
                        ? "border-b border-white/8 sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                    aria-label={`${stat.prefix}${stat.num}${stat.suffix} — ${label}`}
                  >
                    {/* Icon badge */}
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8">
                      <Icon className="h-4 w-4 text-white/50" aria-hidden="true" />
                    </span>

                    {/* Animated number */}
                    <p className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl">
                      <span
                        ref={(el) => { counterRefs.current[i] = el; }}
                      >
                        {stat.prefix}{stat.num}{stat.suffix}
                      </span>
                    </p>

                    {/* Thin accent rule */}
                    <span className="h-px w-8 rounded-full bg-white/20" aria-hidden="true" />

                    {/* Label */}
                    <p className="max-w-[160px] text-xs font-medium uppercase tracking-widest text-white/40">
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Testimonial;

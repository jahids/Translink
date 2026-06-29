"use client";

import "@/lib/GSAPAnimations";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Building2, MapPin, User, Wallet } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const infoIcons = [Building2, User, MapPin, Wallet];

const platformStyles: Record<string, { bg: string; text: string; dot: string }> = {
  Rakuten: {
    bg: "bg-[#bf0000]/8 hover:bg-[#bf0000]/14",
    text: "text-[#bf0000]",
    dot: "bg-[#bf0000]",
  },
  "Yahoo! Shopping": {
    bg: "bg-[#ff0033]/8 hover:bg-[#ff0033]/14",
    text: "text-[#6001d2]",
    dot: "bg-[#6001d2]",
  },
};

export default function CompanySection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const marketplaceRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 82%",
        duration: 0.8,
        yOffset: 40,
      });
    }

    if (tableRef.current) {
      gsap.effects.staggerFadeUpOnScroll(tableRef.current, {
        start: "top 80%",
        duration: 0.65,
        yOffset: 30,
        stagger: 0.12,
      });
    }

    if (marketplaceRef.current) {
      gsap.effects.staggerFadeUpOnScroll(marketplaceRef.current, {
        start: "top 82%",
        duration: 0.6,
        yOffset: 25,
        stagger: 0.14,
      });
    }

    if (decorRef.current) {
      gsap.fromTo(
        decorRef.current,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: decorRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12"
      aria-labelledby="company-heading"
      role="region"
    >
      {/* Decorative background number */}
      <div
        ref={decorRef}
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none opacity-0"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-black leading-none tracking-tighter"
          style={{
            WebkitTextStroke: "1.5px rgb(29,39,54,0.06)",
            color: "transparent",
          }}
        >
          TL
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          ref={headingRef}
          badge={t.company.badge}
          heading={t.company.heading}
          description={t.company.description}
          size="md"
          align="left"
          as="h2"
          id="company-heading"
          className="mb-12 md:mb-16"
          showDescriptionToScreenReaders
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Company info table */}
          <div ref={tableRef} className="lg:col-span-3 divide-y divide-border">
            {t.company.info.map((row, i) => {
              const Icon = infoIcons[i];
              return (
                <div
                  key={row.label}
                  className="group flex items-center gap-5 py-5 sm:py-6 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/60">
                    <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-6">
                    <span className="w-44 shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="text-base font-semibold text-foreground sm:text-lg">
                      {row.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Marketplace presence */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div ref={marketplaceRef} className="space-y-4">
              {/* Heading */}
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {t.company.marketplaceHeading}
                </p>
                <p className="text-sm text-muted-foreground">{t.company.marketplaceDesc}</p>
              </div>

              {/* Platform cards */}
              {t.company.marketplaces.map((mp) => {
                const style = platformStyles[mp.platform] ?? {
                  bg: "bg-accent/60 hover:bg-accent",
                  text: "text-foreground",
                  dot: "bg-foreground",
                };
                return (
                  <a
                    key={mp.platform}
                    href={mp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between rounded-xl px-5 py-4 transition-all duration-200 ${style.bg}`}
                    aria-label={`Shop on ${mp.name}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${style.dot}`} aria-hidden="true" />
                      <span className={`text-sm font-semibold ${style.text}`}>{mp.name}</span>
                    </div>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${style.text}`}
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

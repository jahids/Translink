"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { key: "home" as const, href: "/" },
    { key: "about" as const, href: "/about" },
    { key: "blog" as const, href: "/blog" },
    { key: "contact" as const, href: "/#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveIndex(-1);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveIndex(-1);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % navLinks.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + navLinks.length) % navLinks.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(navLinks.length - 1);
        break;
      case "Escape":
        closeMenu();
        break;
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMenuOpen) closeMenu();
        setLangMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a") as HTMLAnchorElement;
      if (firstLink) firstLink.focus();
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    const headerEl = navRef.current;
    if (!headerEl) return;

    let isHidden = false;
    let headerHeight = headerEl.offsetHeight;
    gsap.set(headerEl, { y: 0, willChange: "transform" });

    const onResize = () => { headerHeight = headerEl.offsetHeight; };
    window.addEventListener("resize", onResize);

    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrolled = self.scroll();
        if (isMenuOpen) {
          if (isHidden) isHidden = false;
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }
        if (scrolled <= 0) {
          if (isHidden) isHidden = false;
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }
        if (self.direction === 1) {
          if (!isHidden) {
            isHidden = true;
            gsap.to(headerEl, { y: -headerHeight, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        } else if (self.direction === -1) {
          if (isHidden) {
            isHidden = false;
            gsap.to(headerEl, { y: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
      gsap.set(headerEl, { y: 0 });
    };
  }, []);

  const getLinkLabel = (key: string) => {
    const map: Record<string, string> = {
      home: t.nav.home,
      about: t.nav.about,
      blog: t.nav.blog,
      contact: t.nav.contact,
    };
    return map[key] ?? key;
  };

  const getLinkDesc = (key: string) => {
    const map: Record<string, string> = {
      home: t.nav.homeDesc,
      about: t.nav.aboutDesc,
      blog: t.nav.blogDesc,
      contact: t.nav.contactDesc,
    };
    return map[key] ?? "";
  };

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring !sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        ref={navRef}
        className="bg-background fixed inset-x-0 top-2 z-40 mx-auto w-full max-w-6xl rounded-lg px-5"
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between py-4"
            role="navigation"
            aria-label="Primary navigation"
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="focus:ring-ring flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label="TransLink — Return to homepage"
              >
                <span className="inline-flex items-baseline">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40">Trans</span>
                  <span className="text-xl font-black tracking-tighter text-foreground">Link</span>
                </span>
              </Link>
            </div>

            {/* Desktop nav links */}
            <ul
              className="hidden items-center space-x-6 lg:flex"
              role="menubar"
              aria-label="Main navigation menu"
            >
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === link.href ||
                  (link.key === "contact" && pathname === "/") ||
                  (link.href !== "/" && link.href !== "/#contact" && pathname.startsWith(link.href));

                return (
                  <li key={link.key} role="none">
                    <Link
                      href={link.href}
                      className={`text-text-heading hover:text-foreground focus:ring-ring rounded-md px-2 py-1 !text-sm font-medium transition-colors focus:ring-0 focus:outline-none ${
                        isActive ? "text-foreground font-normal" : "text-foreground/70"
                      }`}
                      role="menuitem"
                      aria-describedby={`nav-description-${index}`}
                      onFocus={() => setActiveIndex(index)}
                      onBlur={() => setActiveIndex(-1)}
                    >
                      {getLinkLabel(link.key)}
                      <span id={`nav-description-${index}`} className="sr-only">
                        {getLinkDesc(link.key)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop right actions */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Language switcher */}
              <div ref={langDropdownRef} className="relative">
                <button
                  onClick={() => setLangMenuOpen((o) => !o)}
                  className="focus:ring-ring flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground focus:ring-2 focus:ring-offset-1 focus:outline-none"
                  aria-haspopup="listbox"
                  aria-expanded={langMenuOpen}
                  aria-label="Select language"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === "en" ? "EN" : "日本語"}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {langMenuOpen && (
                  <div
                    className="bg-background absolute right-0 top-full z-50 mt-1 min-w-[120px] overflow-hidden rounded-md border shadow-lg"
                    role="listbox"
                    aria-label="Language options"
                  >
                    <button
                      role="option"
                      aria-selected={language === "jp"}
                      onClick={() => { setLanguage("jp"); setLangMenuOpen(false); }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${language === "jp" ? "text-foreground font-medium" : "text-foreground/70"}`}
                    >
                      日本語
                    </button>
                    <button
                      role="option"
                      aria-selected={language === "en"}
                      onClick={() => { setLanguage("en"); setLangMenuOpen(false); }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${language === "en" ? "text-foreground font-medium" : "text-foreground/70"}`}
                    >
                      English (EN)
                    </button>
                  </div>
                )}
              </div>

              <Button
                size="sm"
                className="text-sm"
                aria-label="Contact us to start working together"
                asChild
              >
                <Link href="/#contact">{t.nav.workWithUs}</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md outline-none focus:ring-0 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-haspopup="true"
              >
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3 rotate-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-5 rotate-0"
                  }`}
                />
                <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden"
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="space-y-2 px-2 py-4">
                <ul className="space-y-2" role="menu" aria-label="Mobile navigation options">
                  {navLinks.map((link, index) => {
                    const isActive =
                      pathname === link.href ||
                      (link.key === "contact" && pathname === "/");

                    return (
                      <li key={link.key} role="none">
                        <Link
                          href={link.href}
                          className={`hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none ${
                            activeIndex === index || isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/70"
                          }`}
                          role="menuitem"
                          tabIndex={activeIndex === index ? 0 : -1}
                          aria-describedby={`mobile-nav-description-${index}`}
                          onClick={closeMenu}
                          onKeyDown={(e) => handleKeyDown(e)}
                        >
                          {getLinkLabel(link.key)}
                          <span id={`mobile-nav-description-${index}`} className="sr-only">
                            {getLinkDesc(link.key)}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t pt-4 space-y-3">
                  {/* Mobile language switcher */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Globe className="h-4 w-4 text-foreground/60" />
                    <span className="text-sm text-foreground/60 mr-2">Language:</span>
                    <button
                      onClick={() => { setLanguage("jp"); closeMenu(); }}
                      className={`text-sm px-2 py-0.5 rounded transition-colors ${language === "jp" ? "bg-accent font-medium" : "text-foreground/60 hover:bg-accent"}`}
                    >
                      日本語
                    </button>
                    <span className="text-foreground/30">|</span>
                    <button
                      onClick={() => { setLanguage("en"); closeMenu(); }}
                      className={`text-sm px-2 py-0.5 rounded transition-colors ${language === "en" ? "bg-accent font-medium" : "text-foreground/60 hover:bg-accent"}`}
                    >
                      EN
                    </button>
                  </div>

                  <Button
                    className="w-full"
                    aria-label="Contact us to start working together"
                    onClick={closeMenu}
                    asChild
                  >
                    <Link href="/#contact">{t.nav.workWithUs}</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;

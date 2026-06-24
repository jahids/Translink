"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";
import { useRef, useState } from "react";

// Static (non-translatable) blog post metadata — image, date, tag, slug, isTopPick
const blogPostsMeta = [
  { id: 1, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Jun 10, 2025", tag: "E-commerce",     slug: "optimize-lora-qlora", isTopPick: true  },
  { id: 2, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "May 22, 2025", tag: "Mobile Apps",    slug: "optimize-lora-qlora", isTopPick: true  },
  { id: 3, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Apr 15, 2025", tag: "Web Development", slug: "optimize-lora-qlora", isTopPick: true  },
  { id: 4, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Mar 30, 2025", tag: "E-commerce",     slug: "optimize-lora-qlora", isTopPick: false },
  { id: 5, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Mar 12, 2025", tag: "Engineering",    slug: "optimize-lora-qlora", isTopPick: false },
  { id: 6, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Feb 28, 2025", tag: "Web Development", slug: "optimize-lora-qlora", isTopPick: false },
  { id: 7, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Feb 10, 2025", tag: "Mobile Apps",    slug: "optimize-lora-qlora", isTopPick: false },
  { id: 8, image: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755804235/aaaimage_zbypst.png", date: "Jan 20, 2025", tag: "Engineering",    slug: "optimize-lora-qlora", isTopPick: false },
];

// Internal tag keys used for filtering — always English, language-agnostic
const TAG_KEYS = ["All", "Web Development", "Mobile Apps", "E-commerce", "Engineering"];

gsap.registerPlugin(ScrollTrigger);

function BlogPage() {
  const { t, language } = useLanguage();
  const [selectedTagKey, setSelectedTagKey] = useState("All");
  const heroRef = useRef(null);
  const topPicksRef = useRef(null);
  const blogGridRef = useRef(null);

  // Merge static metadata with translated title/excerpt
  const blogPosts = blogPostsMeta.map((meta, i) => ({
    ...meta,
    title:   t.blogPostsData[i]?.title   ?? meta.tag,
    excerpt: t.blogPostsData[i]?.excerpt ?? "",
  }));

  const filteredPosts =
    selectedTagKey === "All"
      ? blogPosts.filter((p) => !p.isTopPick)
      : blogPosts.filter((p) => !p.isTopPick && p.tag === selectedTagKey);

  const topPicks = blogPosts.filter((p) => p.isTopPick);

  // Translate a tag key → display label for the current language
  const getTagDisplay = (tagKey: string) => {
    if (tagKey === "All") return t.blog.tags[0];
    return t.blog.tagMap[tagKey] ?? tagKey;
  };

  useGSAP(() => {
    SplitText.create(".blog-heading", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 0.6,
          y: 10,
          opacity: 0.5,
          filter: "blur(6px)",
          autoAlpha: 0,
          stagger: 0.06,
        });
      },
    });

    if (topPicksRef.current) {
      gsap.effects.fadeUpOnScroll(topPicksRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    if (blogGridRef.current) {
      gsap.effects.staggerFadeUpOnScroll(blogGridRef.current, {
        start: "top 85%",
        duration: 0.7,
        stagger: 0.1,
        childSelector: ".blog-card",
        markers: false,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [language]);

  return (
    <div className="min-h-screen w-full">
      <main id="main-content" role="main">
        <div className="mx-auto max-w-6xl px-5">

          {/* ── Hero ── */}
          <section
            ref={heroRef}
            className="hero space-y-4 text-center pt-[116px] pb-[48px] md:pt-[128px] md:pb-[64px] lg:pt-[140px] lg:pb-[80px]"
            role="banner"
            aria-label="Blog introduction"
          >
            <div className="bg-tag-bg w-fit rounded-3xl px-6 py-1 mx-auto">
              <p className="text-tag align-middle text-sm">
                <span className="mt-1.5 mr-2 inline-block self-center" aria-hidden="true">📝</span>
                {t.blog.badge}
              </p>
            </div>

            <h1 className="blog-heading text-h1 text-text-heading !text-center font-semibold md:mx-auto md:w-2/3">
              {t.blog.heading}
            </h1>

            <p className="text-caption text-label md:mx-auto md:w-2/3">
              {t.blog.description}
            </p>
          </section>

          {/* ── Top Picks ── */}
          <section
            ref={topPicksRef}
            className="mb-16"
            role="region"
            aria-labelledby="top-picks-heading"
          >
            <div className="mb-8">
              <h2 id="top-picks-heading" className="text-h2 text-text-heading font-semibold mb-2">
                {t.blog.topPicks}
              </h2>
              <div className="h-px bg-border" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topPicks.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group cursor-pointer space-y-4 block"
                  role="article"
                  aria-labelledby={`top-pick-title-${post.id}`}
                  aria-describedby={`top-pick-excerpt-${post.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.image}
                      alt={`${post.title} — featured image`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding={index < 2 ? "sync" : "async"}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3
                      id={`top-pick-title-${post.id}`}
                      className="text-h5 text-text-heading font-medium leading-tight group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-label">
                      <time className="font-medium">{post.date}</time>
                      <Badge variant="secondary" className="text-xs">
                        {getTagDisplay(post.tag)}
                      </Badge>
                    </div>
                    <p id={`top-pick-excerpt-${post.id}`} className="text-caption text-label line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── All Blogs ── */}
          <section
            ref={blogGridRef}
            className="mb-16"
            role="region"
            aria-labelledby="research-blogs-heading"
          >
            <div className="mb-8">
              <h2 id="research-blogs-heading" className="text-h2 text-text-heading font-semibold mb-6">
                {t.blog.researchBlogs}
              </h2>

              {/* Filter tag buttons */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Blog category filters">
                  {TAG_KEYS.map((tagKey) => (
                    <Button
                      key={tagKey}
                      variant={selectedTagKey === tagKey ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTagKey(tagKey)}
                      className="text-sm"
                      role="tab"
                      aria-selected={selectedTagKey === tagKey}
                    >
                      {getTagDisplay(tagKey)}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="blog-card group cursor-pointer space-y-4 block"
                  role="article"
                  aria-labelledby={`blog-title-${post.id}`}
                  aria-describedby={`blog-excerpt-${post.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={post.image}
                      alt={`${post.title} — featured image`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding={index < 3 ? "sync" : "async"}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3
                      id={`blog-title-${post.id}`}
                      className="text-h5 text-text-heading font-medium leading-tight group-hover:text-primary transition-colors"
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-label">
                      <time className="font-medium">{post.date}</time>
                      <Badge variant="secondary" className="text-xs">
                        {getTagDisplay(post.tag)}
                      </Badge>
                    </div>
                    <p id={`blog-excerpt-${post.id}`} className="text-caption text-label line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12" role="status" aria-live="polite">
                <p className="text-label text-lg">{t.blog.noResults}</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSelectedTagKey("All")}
                  aria-label="Clear filter and show all blog posts"
                >
                  {t.blog.showAll}
                </Button>
              </div>
            )}
          </section>

        </div>
      </main>
    </div>
  );
}

export default BlogPage;

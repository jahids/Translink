import type { Metadata } from "next";

export const siteConfig = {
  name: "TransLink",
  description:
    "Premium software agency delivering corporate websites, e-commerce platforms, iOS & Android apps, and custom high-tech solutions for global businesses.",
  url: "https://translink.dev",
  ogImage:
    "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
  logo: "https://translink.dev/logo.png",
  keywords: [
    "software agency",
    "web development",
    "mobile app development",
    "e-commerce development",
    "iOS app development",
    "Android app development",
    "corporate website",
    "custom software",
    "international software agency",
  ],
  authors: [
    {
      name: "TransLink Team",
      url: "https://translink.dev",
    },
  ],
  creator: "TransLink",
  publisher: "TransLink",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://translink.dev",
    siteName: "TransLink",
    title: "TransLink — Premium Software Agency",
    description:
      "Premium software agency delivering corporate websites, e-commerce platforms, iOS & Android apps, and custom high-tech solutions for global businesses.",
    images: [
      {
        url: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        width: 1200,
        height: 630,
        alt: "TransLink — Premium Software Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TransLink — Premium Software Agency",
    description:
      "Premium software agency delivering corporate websites, e-commerce platforms, iOS & Android apps, and custom high-tech solutions for global businesses.",
    images: [
      "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
    ],
    creator: "@translinkdev",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://translink.dev",
  },
  category: "technology",
};

export const pageMetadata = {
  home: {
    title: "TransLink — Premium Software Agency",
    description:
      "Transform your business with world-class software. TransLink delivers corporate websites, e-commerce platforms, mobile apps, and custom solutions for global companies.",
    keywords: [
      "software agency",
      "web development agency",
      "mobile app development",
      "e-commerce development",
      "corporate website design",
      "iOS Android development",
      "international software development",
    ],
    openGraph: {
      title: "TransLink — Premium Software Agency",
      description:
        "Transform your business with world-class software. TransLink delivers corporate websites, e-commerce platforms, mobile apps, and custom solutions for global companies.",
      url: "https://translink.dev",
      type: "website",
    },
    twitter: {
      title: "TransLink — Premium Software Agency",
      description:
        "Transform your business with world-class software. TransLink delivers corporate websites, e-commerce platforms, mobile apps, and custom solutions for global companies.",
    },
    alternates: {
      canonical: "https://translink.dev",
    },
  },
  about: {
    title: "About TransLink — Global Software Agency",
    description:
      "Learn about TransLink's story, culture, and global expertise in software engineering. We build premium digital products for clients across 15+ countries.",
    keywords: [
      "TransLink",
      "software agency",
      "global software development",
      "web development team",
      "mobile app team",
      "company culture",
      "international software",
    ],
    openGraph: {
      title: "About TransLink — Global Software Agency",
      description:
        "Learn about TransLink's story, culture, and global expertise in software engineering. We build premium digital products for clients across 15+ countries.",
      url: "https://translink.dev/about",
      type: "website",
    },
    twitter: {
      title: "About TransLink — Global Software Agency",
      description:
        "Learn about TransLink's story, culture, and global expertise in software engineering. We build premium digital products for clients across 15+ countries.",
    },
    alternates: {
      canonical: "https://translink.dev/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TransLink",
      description:
        "Premium software agency delivering corporate websites, e-commerce platforms, iOS & Android apps, and custom high-tech solutions for global businesses.",
      url: "https://translink.dev",
      logo: "https://translink.dev/logo.png",
      foundingDate: "2016",
      numberOfEmployees: "10-50",
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
      },
      sameAs: [
        "https://linkedin.com/company/translinkdev",
        "https://twitter.com/translinkdev",
      ],
      knowsAbout: [
        "Web Development",
        "Mobile App Development",
        "E-commerce Development",
        "Corporate Website Design",
        "Software Engineering",
      ],
    },
  },
  blog: {
    title: "Software Engineering Insights — TransLink Blog",
    description:
      "Stay updated with the latest trends in web development, mobile engineering, e-commerce architecture, and modern software delivery from TransLink's engineering team.",
    keywords: [
      "software engineering blog",
      "web development insights",
      "mobile app development tips",
      "e-commerce development",
      "software engineering trends",
      "tech articles",
      "engineering blog",
    ],
    openGraph: {
      title: "Software Engineering Insights — TransLink Blog",
      description:
        "Stay updated with the latest trends in web development, mobile engineering, e-commerce architecture, and modern software delivery from TransLink's engineering team.",
      url: "https://translink.dev/blog",
      type: "website",
    },
    twitter: {
      title: "Software Engineering Insights — TransLink Blog",
      description:
        "Stay updated with the latest trends in web development, mobile engineering, e-commerce architecture, and modern software delivery from TransLink's engineering team.",
    },
    alternates: {
      canonical: "https://translink.dev/blog",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];

  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}

export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://translink.dev/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} — TransLink Blog`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "software engineering blog post",
      "web development article",
      "mobile app insights",
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} — TransLink Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} — TransLink Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}

export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://translink.dev/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "TransLink Team",
    },
    publisher: {
      "@type": "Organization",
      name: "TransLink",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://translink.dev/blog/${slug}`,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};

/**
 * Schema.org Structured Data Utilities
 * 
 * Pure utility functions that generate JSON-LD structured data
 * for SEO and rich search results.
 * 
 * These are React components (return JSX) but contain no state,
 * effects, or interactivity - they just generate <script> tags.
 */

// ============================================================================
// REVIEW SCHEMA
// ============================================================================

interface Review {
  author: string;
  location: string;
  rating: number; // 1-5
  date: string; // ISO format: "2025-10-15"
  reviewText: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://presidentialdumpsters.xyz/#business",
    "name": "Presidential Dumpsters",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (
        reviews.reduce((sum, review) => sum + review.rating, 0) / 
        reviews.length
      ).toFixed(1),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviews.length.toString(),
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.reviewText
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export const sampleReviews: Review[] = [
  {
    author: "Sarah Mitchell",
    location: "Waterbury, CT",
    rating: 5,
    date: "2025-10-15",
    reviewText: "Fast delivery and fair pricing. Professional crew!"
  },
  {
    author: "Mike Rodriguez",
    location: "New Haven, CT",
    rating: 5,
    date: "2025-10-08",
    reviewText: "Same-day delivery as promised. Great communication."
  }
];

// ============================================================================
// ARTICLE SCHEMA (for blog posts)
// ============================================================================

interface ArticleSchemaProps {
  headline: string;
  description: string;
  imageUrl: string;
  publishedDate: string;
  modifiedDate: string;
  authorName: string;
  articleUrl?: string;
  keywords?: string[];
}

export function ArticleSchema({
  headline,
  description,
  imageUrl,
  publishedDate,
  modifiedDate,
  authorName,
  articleUrl,
  keywords
}: ArticleSchemaProps) {
  const baseUrl = "https://presidentialdumpsters.xyz";
  const fullImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `${baseUrl}${imageUrl}`;
  const fullArticleUrl = articleUrl || baseUrl;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": 1200,
      "height": 630
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Presidential Dumpsters",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 450,
        "height": 144
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullArticleUrl
    },
    ...(keywords && keywords.length > 0 && { 
      "keywords": keywords.join(", ") 
    }),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "about": {
      "@type": "Thing",
      "name": "Dumpster Rental"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// ============================================================================
// PRODUCT SCHEMA (for service offerings)
// ============================================================================

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency: string;
  availability: "InStock" | "OutOfStock" | "PreOrder";
  sku?: string;
  brand?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function ProductSchema({
  name,
  description,
  image,
  price,
  priceCurrency,
  availability,
  sku,
  brand = "Presidential Dumpsters",
  aggregateRating
}: ProductSchemaProps) {
  const baseUrl = "https://presidentialdumpsters.xyz";
  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `${baseUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": fullImageUrl,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": {
      "@type": "Offer",
      "url": baseUrl,
      "priceCurrency": priceCurrency,
      "price": price.toString(),
      "availability": `https://schema.org/${availability}`,
      "priceValidUntil": new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1000
      ).toISOString().split('T')[0]
    },
    ...(sku && { "sku": sku }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue.toString(),
        "reviewCount": aggregateRating.reviewCount.toString()
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// ============================================================================
// HOW-TO SCHEMA (for step-by-step guides)
// ============================================================================

interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  tool?: string[];
  supply?: string[];
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  tool,
  supply
}: HowToSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(tool && {
      "tool": tool.map(t => ({
        "@type": "HowToTool",
        "name": t
      }))
    }),
    ...(supply && {
      "supply": supply.map(s => ({
        "@type": "HowToSupply",
        "name": s
      }))
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export const chooseDumpsterSizeHowTo: HowToSchemaProps = {
  name: "How to Choose the Right Dumpster Size",
  description: "Step-by-step guide to selecting the perfect dumpster size",
  totalTime: "PT10M",
  steps: [
    {
      name: "Assess your project scope",
      text: "Evaluate project type and size. Small renovations need 10-yard, " +
            "large projects need 20-yard dumpsters."
    },
    {
      name: "Estimate debris volume",
      text: "10-yard holds ~4 truck loads (200-300 sq ft). " +
            "20-yard holds ~8 truck loads (400-600 sq ft)."
    },
    {
      name: "Consider project duration",
      text: "All rentals include 7 days. Plan accordingly or discuss " +
            "extensions."
    },
    {
      name: "Call for expert advice",
      text: "Contact Presidential Dumpsters at (475) 441-6727 for " +
            "personalized recommendations."
    }
  ]
};

// ============================================================================
// VIDEO SCHEMA
// ============================================================================

interface VideoSchemaProps {
  name: string;
  description: string;
  videoUrl: string;
  embedUrl?: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
}

export function VideoSchema({
  name,
  description,
  videoUrl,
  embedUrl,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl
}: VideoSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    "contentUrl": videoUrl,
    ...(embedUrl && { "embedUrl": embedUrl }),
    ...(contentUrl && { "contentUrl": contentUrl })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface VideoListSchemaProps {
  name: string;
  description: string;
  videos: Array<{
    name: string;
    url: string;
    thumbnailUrl: string;
  }>;
}

export function VideoListSchema({ 
  name, 
  description, 
  videos 
}: VideoListSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "itemListElement": videos.map((video, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": video.name,
        "url": video.url,
        "thumbnailUrl": video.thumbnailUrl
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Matthew Diakonov",
      url: "https://m13v.com",
      sameAs: [
        "https://m13v.com",
        "https://twitter.com/MatthewHeartful",
        "https://www.linkedin.com/in/matthew-diakonov-a84a1911/",
        "https://github.com/matthew-heartful",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Vipassana.cool",
      url: "https://vipassana.cool",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

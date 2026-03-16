import { BreadcrumbNav } from "./breadcrumb-nav";

export function ArticleHeader({
  breadcrumbs,
  category,
  title,
  description,
  datePublished,
  dateUpdated,
}: {
  breadcrumbs: { label: string; href?: string }[];
  category: string;
  title: string;
  description: string;
  datePublished: string;
  dateUpdated?: string;
}) {
  const publishDate = new Date(datePublished);
  const updateDate = dateUpdated ? new Date(dateUpdated) : null;
  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <header className="mb-12">
      <BreadcrumbNav items={breadcrumbs} />
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        {category}
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mb-4 text-lg text-muted">{description}</p>
      <div className="flex items-center gap-3 text-xs text-muted">
        <span>By Matthew Diakonov</span>
        <span className="text-border">|</span>
        <time dateTime={datePublished}>Published {formatDate(publishDate)}</time>
        {updateDate && (
          <>
            <span className="text-border">|</span>
            <time dateTime={dateUpdated}>Updated {formatDate(updateDate)}</time>
          </>
        )}
      </div>
    </header>
  );
}

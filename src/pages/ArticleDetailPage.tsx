// src/pages/ArticleDetailPage.tsx
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MarkdownViewer } from "@/components/MarkdownViewer";
import { getArticleData } from "@/lib/articles";

/* interface TocItem { title: string; id: string }

interface ArticleData {
    data: Record<string, unknown>
    content: string
    slug: string
} */

//export default function ArticleDetailPage({ article }: { article: ArticleData }) {
export default function ArticleDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleData(slug!);
  const { data, content } = article;
  const title = data.title as string | undefined;
  const image = data.image as string | undefined;

  console.log(data);
  console.log(content);

  return (
    <div className="min-h-screen px-5 bg-background">
      <main className="container mx-auto p-4 pt-2 pb-20 lg:px-20 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Link to="/articles" className="flex items-center hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("articles.backToArticles")}
          </Link>
        </div>

        {image && (
          <img
            src={image}
            alt={title ?? ""}
            className="w-full max-h-72 object-cover rounded-xl"
          />
        )}

        {title && (
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
        )}

        <MarkdownViewer content={content} />
        {(data.tags as string[]) && (
          <div className="mt-8 flex flex-wrap gap-2">
            {(data.tags as string[]).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

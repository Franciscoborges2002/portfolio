import { Link } from "react-router";
import { Separator } from "./ui/separator";

interface Article {
  slug: string;
  title: string;
  date: string;
}

export default function ArticleComponent({ article }: { article: Article }) {
  return (
    <div key={article.slug} className="flex flex-col gap-1">
      <Link
        to={`/articles/${article.slug}`}
        className="flex flex-row items-center justify-between hover:opacity-50 transition-all duration-150"
      >
        <h2 className="text-sm font-medium text-muted-foreground">
          {article.title}
        </h2>
        <p className="text-xs text-muted-foreground/50">{article.date}</p>
      </Link>
      <Separator />
    </div>
  );
}

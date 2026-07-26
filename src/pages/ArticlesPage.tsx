import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Separator } from "@/components/ui/separator";
import { getSortedArticlesData } from "@/lib/articles";

interface Article {
  slug: string;
  title: string;
  date: string;
}

interface GroupedArticles {
  [year: number]: Article[];
}

export default function ArticlesPage() {
  const { t } = useTranslation();
  const { groupedArticles }: { groupedArticles: GroupedArticles } =
    getSortedArticlesData();

  return (
    <section className="w-full px-5 mx-auto pt-20">
      <div id="articles">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            {t("articles.title")}
          </h1>
        </div>

        <div>
          {Object.entries(groupedArticles)
            .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
            .map(([year, articles]) => (
              <div key={year} className="mb-5 flex flex-col gap-2">
                <h2 className="text-lg font-semibold">{year}</h2>

                <div className="flex flex-col gap-2 pl-5">
                  {articles.map((article: Article) => (
                    <div key={article.slug} className="flex flex-col gap-1">
                      <Link
                        to={`/articles/${article.slug}`}
                        className="flex flex-row items-center justify-between hover:opacity-50 transition-all duration-150"
                      >
                        <h3 className="text-sm font-medium text-muted-foreground">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground/50">
                          {article.date}
                        </p>
                      </Link>
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

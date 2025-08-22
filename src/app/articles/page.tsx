import { getSortedArticlesData } from "@/lib/articles"
import ArticleComponent from "@/components/ArticleComponent";

interface Article {
    slug: string;
    title: string;
    date: string;
}

interface GroupedPosts {
    [year: number]: Article[];
}

export default function ArticlesPage(/*{ allArticlesData } : { [year: number]: number[] } */) {
    const articlesData: GroupedPosts = getSortedArticlesData().groupedArticles;

    return (
        <section className="w-full px-5 mx-auto">
            {/* RIGHT PART */}
            <div id="articles">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
                </div>

                {/* ARTICLES */}
                <div>
                    {Object.entries(articlesData)
                        .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))//Makes the last articles to the last
                        .map(([year, articles]) => (
                            <div key={year} className="mb-5 flex flex-col gap-2">
                                <h1 className="text-lg font-semibold">{year}</h1>

                                <div className="flex flex-col gap-2 pl-5">
                                    {articles.map((article: Article) => (
                                        <ArticleComponent key={article.slug} article={article} />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}


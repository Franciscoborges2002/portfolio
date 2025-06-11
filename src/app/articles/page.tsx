import { getSortedArticlesData } from "@/lib/articles"
import { InformationComponent } from "@/components/InformationComponent";
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
        <div className="min-h-screen bg-background">
            <main className="container mx-auto p-4 py-20 grid gap-6 md:grid-cols-[1fr_2fr] lg:px-20">
                {/* LEFT PART */}
                <InformationComponent />
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
                                            <ArticleComponent  key={article.slug} article={article} />
                                        ))}
                                    </div>  
                                </div>
                            ))}
                    </div>
                </div>
            </main>
        </div>
    )
}


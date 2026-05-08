// src/pages/ArticleDetailPage.tsx
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { MarkdownViewer } from '@/components/MarkdownViewer'
import { getArticleData } from '@/lib/articles';

/* interface TocItem { title: string; id: string }

interface ArticleData {
    data: Record<string, unknown>
    content: string
    slug: string
} */

//export default function ArticleDetailPage({ article }: { article: ArticleData }) {
export default function ArticleDetailPage() {
    const { t } = useTranslation()
    const { slug } = useParams<{ slug: string }>()
    const article = getArticleData(slug!)
    const { data, content } = article

    console.log(data)
    console.log(content)

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto p-4 py-20 lg:px-20 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Link to="/articles" className="flex items-center hover:underline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t('articles.backToArticles')}
                    </Link>
                </div>
                <MarkdownViewer content={content} />
                {(data.tags as string[]) && (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {(data.tags as string[]).map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}
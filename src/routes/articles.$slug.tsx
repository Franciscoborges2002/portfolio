import { createFileRoute, notFound } from '@tanstack/react-router'
import { getArticleData } from '@/lib/articles'
import ArticleDetailPage from '@/pages/ArticleDetailPage'

export const Route = createFileRoute('/articles/$slug')({
  loader: ({ params }) => {
    try {
      return getArticleData(params.slug)
    } catch {
      throw notFound()
    }
  },
  component: function ArticleRoute() {
    const article = Route.useLoaderData()
    return <ArticleDetailPage article={article} />
  },
})
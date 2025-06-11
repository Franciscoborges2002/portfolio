"use client"
import { Separator } from "./ui/separator"
import Link from "next/link"

interface Article {
    slug: string;
    title: string;
    date: string;
}
export default function ArticleComponent({ article }: { article: Article }) {

    return (
        <div key={article.slug} className="flex flex-col gap-1">
            <Link href={`/articles/${article.slug}`}>
                <h2 className="text-sm font-medium text-muted-foreground">{article.title}</h2>
            </Link>
            <Separator />
        </div>
    )
}
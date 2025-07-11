/* import { useState } from 'react'; */
/* import { Button } from "@/components/ui/button"; */
import { getArticleData, getSlugArticles } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
/* import { MDXRemote } from 'next-mdx-remote/rsc' */
import { Badge } from "@/components/ui/badge";
import { MarkdownViewer } from "@/components/MarkdownViewer";
import Image from "next/image";

interface TocItem {
  title: string;
  id: string;
}

export function generateStaticParams() {
    return getSlugArticles();
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params

    const { data, content } = getArticleData(`${slug}.md`)

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto p-4 py-20 lg:px-20 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Link href="/articles" className="flex items-center hover:underline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Articles
                    </Link>
                </div>

                <div className="flex flex-row gap-5">
                    <article className="prose prose-gray max-w-none">
                        {data.image && (
                            <Image
                                src={data.image}
                                alt={data.title}
                                width={1200}
                                height={600}
                                className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
                            />
                        )}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-2 text-foreground">{data.title}</h2>
                            <p className="text-xs text-gray-600">
                                {data.date}
                            </p>
                            {data.medium && (
                                <a
                                    href={data.medium}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground font-xs no-underline hover:underline"
                                >
                                    Read on Medium
                                </a>
                            )}
                        </div>
                        <div className="">
                            <MarkdownViewer content={content} />
                        </div>
                        {data.tags && (
                            <div className="mt-8 flex flex-wrap gap-2">
                                {data.tags.map((tag: string) => (
                                    <Badge key={tag} variant="secondary" className="text-primary cursor-pointer">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </article>
                    {/* Table of content */}
                    <aside className="w-64 p-4 bg-muted/50 rounded-xl shadow-md h-fit sticky top-8">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">📑 Table of Contents</h3>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                            {data.toc?.map((item: TocItem) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} className="hover:underline">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </main>
        </div>
    )
}
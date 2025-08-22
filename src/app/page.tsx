import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { projects } from "../data/projects"
import { getNewestArticles } from "@/lib/articles"
import HighlightedProjectsCard from "@/components/HighlightedProjectsCard"
import Technologies from "@/components/TechnologiesComponent"

export default function PortfolioPage() {

  const featureProjects = projects.filter(project => project.feature);

  const newestArticles = getNewestArticles();

  return (
    <div className="px-5 mx-auto">
      {/* RIGHT PART */}
      <div className="space-y-10 prose dark:prose-invert max-w-none">
        {/* README */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold m-0">🙋 README.md</h2>
          <Card>
            <CardContent className="pt-5 space-y-2">
              <p className="m-0">My passion for technology ignited at a young age when I started to understood the essence of what a computer truly is.</p>
              <p>Before i got into university, I start learning programming and embarked on creating small projects and doing some automation on my daily tasks.</p>
              <p> Over time, these early efforts allowed me to improve my skills, progressively taking more complex projects with confidence. As an individual, I am dedicated, ambitious, and perpetually eager to learn more.</p>
            </CardContent>
          </Card>
        </div>


        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold m-0">⭐Highlighted Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 not-prose">
            {featureProjects.map((project, index) => (
              <HighlightedProjectsCard key={index} project={project} />
            ))}
          </div>

          <Link href='/projects#projects' className="flex flex-col">
            <Button className="w-1/2 self-center">More Projects</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold m-0">📝 Articles</h2>

          {/* {Object.keys(newestArticles).map(([key, val], i) => (
              { key }
            ))
            } */}

          {
            Object.keys(newestArticles).map((key, i) => (
              <Link href={`/articles/${newestArticles[i].slug}`} key={i} className="p-5 pb-1 rounded-xl transition-all duration-300 flex flex-col gap-2 no-underline hover:bg-muted/30">
                <div className="flex flex-row items-center justify-between mb-4">
                  <h2 className="text-lg m-0 no-underline">
                    {newestArticles[i].title}
                  </h2>
                  <p className="text-xs text-muted-foreground m-0">
                    {newestArticles[i].date}
                  </p>
                </div>
              </Link>

            ))
          }


          <Link href='/articles#articles' className="flex flex-col">
            <Button className="w-1/2 self-center">More Articles</Button>
          </Link>
        </div>

        <div id="technologies">
          <Technologies />
        </div>

        {/* <h2>📊 GitHub Stats</h2>
            <img
              src="/placeholder.svg?height=200&width=495"
              alt="GitHub Stats"
              className="w-full rounded-lg bg-muted"
            /> */}
      </div>
    </div>
  )
}
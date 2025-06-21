import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Link from "next/link"
import { InformationComponent } from "@/components/InformationComponent"
import { projects } from "../../public/data/projects"
import { getNewestArticles } from "@/lib/articles"

export default function PortfolioPage() {

  const featureProjects = projects.filter(project => project.feature);

  const newestArticles = getNewestArticles();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 py-20 grid gap-6 md:grid-cols-[1fr_2fr] lg:px-20">
        {/* LEFT PART */}
        <InformationComponent />
        {/* RIGHT PART */}
        <div className="space-y-10 prose dark:prose-invert max-w-none">
          {/* README */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">🙋 README.md</h2>
            <Card>
              <CardContent className="pt-5 space-y-2">
                <p>My passion for technology ignited at a young age when I started to understood the essence of what a computer truly is.</p>
                <p>Before i got into university, I start learning programming and embarked on creating small projects and doing some automation on my daily tasks.</p>
                <p> Over time, these early efforts allowed me to improve my skills, progressively taking more complex projects with confidence. As an individual, I am dedicated, ambitious, and perpetually eager to learn more.</p>
              </CardContent>
            </Card>
          </div>


          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">⭐Highlighted Projects</h2>

            <div className="grid grid-cols-2 gap-6 not-prose">
              {featureProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex gap-2 ">
                      <h2 className="text-lg">{project.title}</h2>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="overflow-x-auto scrollbar-thin scrollbar-webkit">
                      <div className="flex gap-2">
                        {project.headerTags && project.headerTags.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary" className="cursor-pointer flex flex-none">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    {project.github &&
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                        <p>Open</p>
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    }

                    {!project.github && project.demo &&
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                        <p>Open</p>
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    }
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Link href='/projects#projects' className="flex flex-col">
              <Button className="w-1/2 self-center">More Projects</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">📝 Articles</h2>

            {/* {Object.keys(newestArticles).map(([key, val], i) => (
              { key }
            ))
            } */}

            {
              Object.keys(newestArticles).map((key, i) => (
                <Link href={`/articles/${newestArticles[i].slug}`} key={i} className="p-5 pb-1 rounded-xl transition-all duration-300 flex flex-col gap-2 hover:bg-foreground/10">
                  <div>
                    <h2 className="text-lg">
                      {newestArticles[i].title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-4">
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

          {/* <h2>📊 GitHub Stats</h2>
            <img
              src="/placeholder.svg?height=200&width=495"
              alt="GitHub Stats"
              className="w-full rounded-lg bg-muted"
            /> */}
        </div>
      </div>

    </div >
  )
}
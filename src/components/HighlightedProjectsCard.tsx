import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pin, ExternalLink } from "lucide-react"
import { projects } from "../../public/data/projects"
import Link from "next/link"
import { siGithub } from "simple-icons"

export default function HighlightedProjectsCard({ project }: { project: typeof projects[number] }) {
    return (

        <div className="grid gap-4">
            <Card className="group hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-0">
                    <div className="flex items-center p-6">
                        {/* Project Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                                        <Pin className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <CardDescription className="text-sm mb-3 line-clamp-2">{project.description}</CardDescription>

                                    {/* Custom Tags */}
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.tags && project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    {project.demo && (
                                        <Button size="sm" variant="outline" asChild className="cursor-pointer">
                                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 text-primary" />
                                            </Link>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button size="sm" variant="outline" asChild className="cursor-pointer">
                                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    role="img"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="48"
                                                    height="48"
                                                    fill="currentColor"
                                                >
                                                    <title>{siGithub.title}</title>
                                                    <path d={siGithub.path} />
                                                </svg>
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

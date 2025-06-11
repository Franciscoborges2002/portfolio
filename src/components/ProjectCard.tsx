import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { projects } from "../../public/data/projects"
import Image from "next/image";

export function ProjectCard({ project }: { project: typeof projects[number] }) {
    return (
        <Card className="flex flex-col overflow-hidden">
            <CardHeader className="p-0 pb-3">
                <div className="relative overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        width={1000}
                        height={500}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300 ease-in-out cursor-pointer" />
                </div>
            </CardHeader>
            <CardContent className="flex-grow px-6 pb-0">
                <CardTitle className="mb-2 flex flex-col gap-2">
                    <h3>{project.title}</h3>
                    {
                        project.headerTags && (
                            <div className="flex flex-row gap-2">
                                {project.headerTags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="secondary" className="cursor-pointer">{tag}</Badge>
                                ))}
                            </div>
                        )
                    }
                </CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                {/* TECH */}
                {project.tech &&
                    <div className="flex flex-row gap-2">
                        <h3>Tech</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="cursor-pointer">{tech}</Badge>
                            ))}
                        </div>
                    </div>
                }
            </CardContent>
            <CardFooter className="mt-auto">
                <div className="w-full flex flex-row justify-between">
                    {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                            <p>GitHub</p>
                            <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>

                    )}
                    {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center">
                            <p>Live</p>
                            <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}
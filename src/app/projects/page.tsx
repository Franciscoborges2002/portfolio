import { InformationComponent } from "@/components/InformationComponent"
import { ProjectCard } from "@/components/ProjectCard"
/* import { Button } from "@/components/ui/button" */
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import { projects } from "../../../public/data/projects"

function ProjectSkeleton() {
    return (
        <Card className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
                <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="flex-grow">
                <Skeleton className="h-6 w-2/3 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-16" />
                </div>
            </CardContent>
            <CardFooter className="mt-auto">
                <div className="flex gap-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                </div>
            </CardFooter>
        </Card>
    )
}

function ProjectGrid() {
    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto p-4 py-20 grid gap-6 md:grid-cols-[1fr_2fr] lg:px-20">
                {/* LEFT PART */}
                <InformationComponent />
                {/* RIGHT PART */}
                <div id="projects">
                    <div className="mb-8 flex items-center justify-between">
                        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                    </div>
                    <Suspense fallback={
                        <div>
                            {[...Array(6)].map((_, index) => (
                                <ProjectSkeleton key={index} />
                            ))}
                        </div>
                    }>
                        <ProjectGrid />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

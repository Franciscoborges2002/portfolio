import { ProjectCard } from "@/components/ProjectCard"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"
import { projects } from "../../data/projects"

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
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <div className="w-full px-5 mx-auto">
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
    )
}

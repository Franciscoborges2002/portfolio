import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <Card
      className="flex flex-col overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
      onClick={onClick}
    >
      <CardHeader className="p-0 pb-3">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-0">
        <CardTitle className="mb-2 flex flex-col gap-2">
          <h3>{project.title}</h3>
          {project.tags && (
            <div className="flex flex-row flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardTitle>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        {project.tech && (
          <div className="flex flex-row gap-2">
            <h3>Tech</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <div
          className="w-full flex flex-row justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <p>GitHub</p>
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              <p>Live</p>
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
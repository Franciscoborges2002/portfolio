import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { projects, type Project } from "@/data/projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleProjectClick(project: Project) {
    setSelectedProject(project);
    setModalOpen(true);
  }

  return (
    <div className="w-full px-5 mx-auto pt-20">
      <div id="projects">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        </div>

        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}

import { Globe, AppWindow, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RetroWindow } from "@/components/common/RetroWindow";
import { projectsData } from "@/constants/projects";

type Project = typeof projectsData[0];

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <RetroWindow variant="card" title={project.fileName} className="h-full">
      <div className="relative w-full aspect-video border-b-2 border-border bg-muted flex items-center justify-center overflow-hidden">
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow gap-3 justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-2 text-foreground">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-3 opacity-75">
            {project.stack?.map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs font-bold bg-card border-2 border-border text-foreground hover:bg-muted transition-colors">
                {tech}
              </span>
            ))}
            {project.category && (
              <span className="px-2 py-0.5 text-xs font-bold bg-foreground border-2 border-foreground text-background flex items-center gap-1.5">
                {project.category === "Website" && <Globe className="w-3.5 h-3.5" />}
                {project.category === "Web App" && <AppWindow className="w-3.5 h-3.5" />}
                {project.category === "Design" && <Palette className="w-3.5 h-3.5" />}
                {project.category}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-muted-foreground leading-snug">{project.description}</p>
        </div>
        <Button variant="outline" className="w-fit mt-2" asChild>
          <Link 
            href={project.link}
            target={project.openInNewTab ? "_blank" : undefined}
            rel={project.openInNewTab ? "noopener noreferrer" : undefined}
          >
            View Project
          </Link>
        </Button>
      </div>
    </RetroWindow>
  );
}

import Link from "next/link";
import { RetroWindow } from "@/components/common/RetroWindow";
import { projectsData } from "@/constants/projects"; 
import { ProjectCard } from "@/components/features/projects/ProjectCard";
export function RecentProjects() {
  const recentProjects = [...projectsData].reverse().slice(0, 2);

  return (
    <RetroWindow title="Recent Projects" id="portfolio">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 pt-6 border-t-2 border-border flex justify-center w-full text-center font-mono">
        <p className="text-muted-foreground text-sm md:text-base">
          &gt; Want to see what else I&apos;ve been building? You can{" "}
          <Link 
            href="/projects" 
            className="font-bold text-blue-600 dark:text-[#569CD6] hover:underline hover:text-blue-800 dark:hover:text-[#9CDCFE] underline-offset-4 transition-colors"
          >
            browse my full project directory here.
          </Link>
        </p>
      </div>

    </RetroWindow>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, FileType, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Portfolio Projects",
    roles: [
      {
        title: "FCFS_Scheduling_Simulator.tsx",
        date: "2024",
        color: "group-hover:text-blue-500 dark:group-hover:text-[#569CD6]"
      },
      {
        title: "7_Evelyn_Ecommerce.tsx",
        date: "2023",
        color: "group-hover:text-blue-500 dark:group-hover:text-[#569CD6]"
      }
    ]
  },
  {
    company: "Cordova Public College",
    roles: [
      {
        title: "Web_Development_Projects.ts",
        date: "2024 - Present",
        color: "group-hover:text-yellow-500 dark:group-hover:text-[#DCDCAA]"
      },
      {
        title: "Collaborative_Coursework.ts",
        date: "2023 - 2024",
        color: "group-hover:text-cyan-500 dark:group-hover:text-[#4EC9B0]"
      }
    ]
  }
];

export function ExperienceExplorer() {
  const [openFolders, setOpenFolders] = useState<number[]>([-1, ...experiences.map((_, i) => i)]); // -1 is the public folder
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);

  const toggleFolder = (index: number) => {
    setOpenFolders(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col h-full bg-card text-foreground font-mono text-sm group transition-colors duration-300 border-b-2 lg:border-b-0 lg:border-r-2 border-border overflow-y-auto w-full">
      
      <div className="flex flex-col pb-4 h-full pt-2">
        
        {/* EXPERIENCE ROOT FOLDER */}
        <div className="flex flex-col">
          <div 
            onClick={() => setIsExperienceOpen(!isExperienceOpen)}
            className="flex items-center gap-1.5 px-4 py-2 hover:bg-muted/50 cursor-pointer transition-colors duration-200 select-none text-base font-bold uppercase tracking-wider group-hover:text-foreground text-muted-foreground"
          >
            {isExperienceOpen ? (
              <ChevronDown className="w-4 h-4 shrink-0 transition-transform" />
            ) : (
              <ChevronRight className="w-4 h-4 shrink-0 transition-transform" />
            )}
            <Folder className="w-5 h-5 text-foreground group-hover:text-yellow-600 dark:group-hover:text-[#E8D771] shrink-0 transition-colors duration-200" fill="currentColor" fillOpacity={0.2} />
            <span className="truncate mt-0.5">EXPERIENCE</span>
          </div>

          {/* Dynamic Experience Folders (Children of EXPERIENCE) */}
          {isExperienceOpen && (
            <div className="flex flex-col ml-6 border-l border-border/50 pl-2 mt-1">
              {experiences.map((exp, index) => {
                const isOpen = openFolders.includes(index);
                return (
                  <div key={index} className="flex flex-col">
                    
                    {/* Folder */}
                    <div 
                      onClick={() => toggleFolder(index)}
                      className="flex items-center gap-1.5 px-4 py-1.5 hover:bg-muted/50 cursor-pointer transition-colors duration-200 select-none"
                    >
                      {isOpen ? (
                        <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                      )}
                      <Folder className="w-4 h-4 text-foreground group-hover:text-orange-400 dark:group-hover:text-[#D7BA7D] shrink-0 transition-colors duration-200" fill="currentColor" fillOpacity={0.2} />
                      <span className="truncate">{exp.company}</span>
                    </div>

                    {/* Files / Roles */}
                    {isOpen && (
                      <div className="flex flex-col ml-6 border-l border-border/50 pl-2">
                        {exp.roles.map((role, roleIndex) => (
                          <Link 
                            href={`/blog/${role.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            key={roleIndex} 
                            className="flex flex-col py-1 mt-0.5 hover:bg-foreground hover:text-background rounded-sm cursor-pointer transition-colors duration-200 group/file select-none"
                          >
                            <div className="flex items-center gap-1.5 px-2">
                              <FileType className={cn("w-3.5 h-3.5 shrink-0 transition-colors duration-200 group-hover/file:!text-background", role.color)} />
                              <span className="truncate">{role.title}</span>
                            </div>
                            {/* Date Metadata */}
                            <div className="pl-7 pr-2 text-[10px] text-muted-foreground/70 group-hover/file:text-background/70 transition-colors duration-200">
                              {`// ${role.date}`}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* PUBLIC FOLDER (Static Sibling) */}
        <div className="flex flex-col mt-2">
          <div 
            onClick={() => toggleFolder(-1)}
            className="flex items-center gap-1.5 px-4 py-2 hover:bg-muted/50 cursor-pointer transition-colors duration-200 select-none text-base font-bold uppercase tracking-wider group-hover:text-foreground text-muted-foreground"
          >
            {openFolders.includes(-1) ? (
              <ChevronDown className="w-4 h-4 shrink-0 transition-transform" />
            ) : (
              <ChevronRight className="w-4 h-4 shrink-0 transition-transform" />
            )}
            <Folder className="w-5 h-5 text-foreground group-hover:text-purple-400 dark:group-hover:text-[#C586C0] shrink-0 transition-colors duration-200" fill="currentColor" fillOpacity={0.2} />
            <span className="truncate mt-0.5">PUBLIC</span>
          </div>

          {openFolders.includes(-1) && (
            <div className="flex flex-col ml-6 border-l border-border/50 pl-2 mt-1">
              <a 
                href="/chimairel-resume.pdf" 
                download="chimairel-resume.pdf"
                className="flex flex-col py-1 mt-0.5 hover:bg-foreground hover:text-background rounded-sm cursor-pointer transition-colors duration-200 group/file select-none"
              >
                <div className="flex items-center gap-1.5 px-2">
                  <FileType className="w-3.5 h-3.5 shrink-0 transition-colors duration-200 text-foreground group-hover:text-red-500 group-hover/file:!text-background" />
                  <span className="truncate">chimairel-resume.pdf</span>
                </div>
              </a>
            </div>
          )}
        </div>

      </div>
      
    </div>
  );
}

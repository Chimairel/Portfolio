import { CodeEditorBio } from "@/components/features/about/CodeEditorBio";
import { ExperienceExplorer } from "@/components/features/about/ExperienceExplorer";
import { TerminalSpecs } from "@/components/features/about/TerminalSpecs";
import { RetroWindow } from "@/components/common/RetroWindow";
import { FileType } from "lucide-react";
import { PageContainer } from "@/components/common/PageContainer";


export default function AboutPage() {
  return (
    <PageContainer>
      <RetroWindow title="portfolio" id="vscode" noPadding>
        <div className="flex flex-col lg:flex-row w-full items-stretch min-h-max bg-card">
          
          {/* Sidebar (Explorer) */}
          <div className="w-full lg:w-1/3 border-b-2 lg:border-b-0">
            <ExperienceExplorer />
          </div>
          
          {/* Main Editor Panes */}
          <div className="w-full lg:w-2/3 flex flex-col">
            
            {/* Editor Area */}
            <div className="flex flex-col w-full group cursor-default">
              {/* Tab Bar */}
              <div className="flex border-b-2 border-border bg-muted/40">
                <div className="px-4 py-2 border-r-2 border-border bg-card text-xs flex items-center gap-2 text-foreground font-mono select-none transition-all duration-300 group-hover:bg-accent group-hover:-translate-y-[1px]">
                  <FileType className="w-3.5 h-3.5 text-foreground transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-[#569CD6]" />
                  <span>about_me.ts</span>
                </div>
              </div>
              
              {/* Editor Content */}
              <div className="w-full">
                <CodeEditorBio />
              </div>
            </div>
            
          </div>
        </div>
      </RetroWindow>
      
      <TerminalSpecs />
    </PageContainer>
  );
}
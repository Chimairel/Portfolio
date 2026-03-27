import { RetroWindow } from "@/components/common/RetroWindow";

export function CodeEditorBio() {
  return (
    <RetroWindow title="about_me.ts" id="bio" noPadding>
      
      <div className="group font-mono text-base md:text-lg flex bg-card overflow-hidden text-foreground transition-colors duration-300">
        
        <div className="flex flex-col text-muted-foreground py-6 pl-4 pr-4 border-r-2 border-border select-none text-right opacity-50 hidden md:flex group-hover:opacity-70 transition-opacity duration-300">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className="flex flex-col py-6 px-4 w-full">
          
          <span className="text-muted-foreground mb-2 italic group-hover:text-green-600 dark:group-hover:text-[#6A9955] transition-colors duration-300">
            // Initializing developer profile...
          </span>
          
          <span className="transition-colors duration-300">
            <span className="font-bold group-hover:text-blue-600 dark:group-hover:text-[#569CD6] transition-colors duration-300">const</span>{" "}
            <span className="group-hover:text-blue-800 dark:group-hover:text-[#9CDCFE] transition-colors duration-300">developerBio</span>{" "}
            <span className="text-foreground">=</span>{" "}
            <span className="group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">`</span>
          </span>
          
          <div className="group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">
            <p className="mt-2 leading-relaxed pl-2 md:pl-4 pr-2">
              Hello! I'm Chimairel Pacaldo, an IT student based in the Philippines. I focus on building modern, interactive, and efficient web applications using Next.js, React, and Tailwind CSS.
            </p>
            
            <p className="mt-4 leading-relaxed pl-2 md:pl-4 pr-2">
              Beyond just writing code, I am deeply interested in technopreneurship and how technology can solve real-world business problems. I love turning complex logic into clean, user-friendly digital experiences that actually streamline operations.
            </p>

            <p className="mt-4 mb-2 leading-relaxed pl-2 md:pl-4 pr-2">
              When I'm not studying for classes or debugging layouts, I'm usually working on my capstone project, NutriMind, or playing Roblox. If you'd like to know more about me formally, you can{" "}
              <a 
                href="/resume.pdf" 
                download="Chimairel_Resume.pdf" 
                className="underline underline-offset-4 decoration-2 hover:font-bold hover:text-blue-600"
              >
                download my resume here
              </a>.
            </p>
          </div>
          
          <span>
            <span className="group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">`</span>
            <span className="text-foreground">;</span>
          </span>
          <br />
          <span className="transition-colors duration-300">
            <span className="font-bold group-hover:text-purple-600 dark:group-hover:text-[#C586C0] transition-colors duration-300">export</span>{" "}
            <span className="font-bold group-hover:text-purple-600 dark:group-hover:text-[#C586C0] transition-colors duration-300">default</span>{" "}
            <span className="group-hover:text-blue-800 dark:group-hover:text-[#9CDCFE] transition-colors duration-300">developerBio</span>
            <span className="text-foreground">;</span>
          </span>

        </div>

      </div>

    </RetroWindow>
  );
}
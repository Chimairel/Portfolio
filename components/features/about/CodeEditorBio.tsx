export function CodeEditorBio() {
  return (
    <div className="group font-mono text-sm md:text-base lg:text-lg flex flex-col bg-card text-foreground transition-colors duration-300 py-6 h-full">
      
      {/* Line 1 */}
      <div className="flex w-full min-h-[1.5rem]">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">1</div>
        <div className="pl-4 w-full text-muted-foreground italic group-hover:text-green-600 dark:group-hover:text-[#6A9955] transition-colors duration-300">
          {"// Initializing developer profile..."}
        </div>
      </div>

      {/* Line 2 */}
      <div className="flex w-full min-h-[1.5rem] mt-2">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">2</div>
        <div className="pl-4 w-full transition-colors duration-300">
          <span className="font-bold group-hover:text-blue-600 dark:group-hover:text-[#569CD6] transition-colors duration-300">const</span>{" "}
          <span className="group-hover:text-blue-800 dark:group-hover:text-[#9CDCFE] transition-colors duration-300">developerBio</span>{" "}
          <span className="text-foreground">=</span>{" "}
          <span className="group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">`</span>
        </div>
      </div>

      {/* Line 3 (Text Paragraph 1) */}
      <div className="flex w-full h-full mt-2">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">3</div>
        <div className="pl-4 w-full group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">
          <p className="leading-relaxed pl-2 md:pl-4 pr-2">
            Hello! I&apos;m Chimairel Pacaldo, an IT student based in the Philippines. I focus on building modern, interactive, and efficient web applications using Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Line 4 (Empty) */}
      <div className="flex w-full min-h-[1.5rem]">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">4</div>
        <div className="pl-4 w-full"></div>
      </div>

      {/* Line 5 (Text Paragraph 2) */}
      <div className="flex w-full h-full">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">5</div>
        <div className="pl-4 w-full group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">
          <p className="leading-relaxed pl-2 md:pl-4 pr-2">
            Beyond just writing code, I am deeply interested in technopreneurship and how technology can solve real-world business problems. I love turning complex logic into clean, user-friendly digital experiences that actually streamline operations.
          </p>
        </div>
      </div>

      {/* Line 6 (Empty) */}
      <div className="flex w-full min-h-[1.5rem]">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">6</div>
        <div className="pl-4 w-full"></div>
      </div>

      {/* Line 7 (Text Paragraph 3) */}
      <div className="flex w-full h-full">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">7</div>
        <div className="pl-4 w-full group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">
          <p className="leading-relaxed pl-2 md:pl-4 pr-2">
            When I&apos;m not studying for classes or debugging layouts, I&apos;m usually working on my capstone project, NutriMind, or playing Roblox.
          </p>
        </div>
      </div>

      {/* Line 8 (Empty) */}
      <div className="flex w-full min-h-[1.5rem]">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">8</div>
        <div className="pl-4 w-full"></div>
      </div>

      {/* Line 9 (Text Paragraph 4) */}
      <div className="flex w-full h-full">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">9</div>
        <div className="pl-4 w-full group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">
          <p className="leading-relaxed pl-2 md:pl-4 pr-2">
            P.S. If you&apos;re looking for my formal qualifications, feel free to download my resume via &apos;chimairel-resume.pdf&apos; from the public folder on the left!
          </p>
        </div>
      </div>

      {/* Line 10 */}
      <div className="flex w-full min-h-[1.5rem] mt-2">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">10</div>
        <div className="pl-4 w-full">
          <span className="group-hover:text-orange-700 dark:group-hover:text-[#CE9178] transition-colors duration-300">`</span>
          <span className="text-foreground">;</span>
        </div>
      </div>

      {/* Line 11 (Empty) */}
      <div className="flex w-full min-h-[1.5rem]">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">11</div>
        <div className="pl-4 w-full"></div>
      </div>

      {/* Line 12 (Export) */}
      <div className="flex w-full min-h-[1.5rem]">
        <div className="w-12 shrink-0 text-right pr-4 border-r-2 border-border select-none opacity-50 hidden md:block">12</div>
        <div className="pl-4 w-full transition-colors duration-300">
          <span className="font-bold group-hover:text-purple-600 dark:group-hover:text-[#C586C0] transition-colors duration-300">export</span>{" "}
          <span className="font-bold group-hover:text-purple-600 dark:group-hover:text-[#C586C0] transition-colors duration-300">default</span>{" "}
          <span className="group-hover:text-blue-800 dark:group-hover:text-[#9CDCFE] transition-colors duration-300">developerBio</span>
          <span className="text-foreground">;</span>
        </div>
      </div>

    </div>
  );
}
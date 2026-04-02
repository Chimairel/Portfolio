import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

export function useTerminal(currentDirectory: string = "about") {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const promptString = `C:/Chimairel/${currentDirectory}>`;

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const validRoutes = ["", "home", "projects", "blog", "contact", "about"];

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const [command, ...args] = cmd.toLowerCase().split(" ");
    let output = "";

    const executeCommand: Record<string, () => string | void> = {
      cls: () => setHistory([]),
      clear: () => setHistory([]),
      help: () => "Supported commands: cd <path ex: ../projects>, cls, clear, help",

      cd: () => {
        const target = args[0];
        if (!target) return promptString.replace(">", "");

        if (target.startsWith("/") || target.startsWith("~") || target.startsWith("\\")) {
          return `The system cannot find the path specified: ${target}`;
        }

        const currentPath = !currentDirectory || currentDirectory.toLowerCase() === "home" ? [] : currentDirectory.split("/");
        const targetPath = [...currentPath];

        const segments = target.split(/[\/\\]/).filter(Boolean);
        for (const seg of segments) {
          if (seg === "..") {
            targetPath.pop();
          } else if (seg !== ".") {
            targetPath.push(seg);
          }
        }

        const finalPathStr = targetPath.join("/").toLowerCase();

        const isRoot = finalPathStr === "" || finalPathStr === "home";
        const normalizedContext = isRoot ? "" : finalPathStr;

        if (validRoutes.includes(normalizedContext)) {
          if (normalizedContext === currentPath.join("/").toLowerCase()) {
            return `Already in C:/Chimairel/${currentDirectory}`;
          }

          const route = normalizedContext === "" ? "/" : `/${normalizedContext}`;
          setTimeout(() => router.push(route), 500);
          return `Navigating to ${route === "/" ? "root" : route} directory...`;
        }

        return `The system cannot find the path specified: ${target}`;
      }
    };

    if (executeCommand[command]) {
      const result = executeCommand[command]();
      if (typeof result === "string") {
        output = result;
      } else {
        setInput("");
        return;
      }
    } else {
      output = `'${command}' is not recognized as an internal or external command, operable program or batch file.`;
    }

    setHistory(prev => [...prev, { cmd, output }]);
    setInput("");
  };

  return {
    input,
    setInput,
    history,
    inputRef,
    promptString,
    handleTerminalClick,
    handleCommand,
  };
}
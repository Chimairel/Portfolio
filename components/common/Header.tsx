"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react"; 
import { cn } from "@/lib/utils"; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background text-foreground w-full px-6 pt-6 pb-2 flex flex-col items-center transition-colors duration-200">
      <div className={cn(
        "flex justify-between items-center w-full max-w-6xl pb-4 border-b-2 border-border transition-colors",
        isMobileMenuOpen && "border-transparent" 
      )}>
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-4 h-4 bg-foreground rounded-full"></div>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Chimairel.app</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-2 font-semibold">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "px-3 py-1 transition-none font-mono uppercase tracking-widest text-sm",
                    active 
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-foreground hover:text-background"
                  )}
                >
                  {link.name === "Blogs" ? "Blog" : link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-1.5 text-foreground cursor-pointer outline-none focus:outline-none transition-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-3" />
              ) : (
                <Menu className="w-6 h-6 stroke-3" />
              )}
              <span className="sr-only">Toggle Menu</span>
            </button>
          </div>

          <ThemeToggle />
          
        </div>
      </div>

      {/* Expanded Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-[100vh] z-40 md:hidden flex flex-col items-center">
          {/* Retro Pixelated Backdrop */}
          <div 
            className="absolute inset-0 flex cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)} 
          >
            <div className="absolute inset-0 bg-background/60" />
            <div 
              className="absolute inset-0 opacity-20 dark:invert"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h2v2H0zM2 2h2v2H2z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />
          </div>
          
          <div className="w-full relative z-50 animate-in slide-in-from-top-1 fade-in duration-200">
            <nav className="flex flex-col w-full bg-background border-b-2 border-border">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-6 py-4 border-b-2 border-border last:border-b-0 font-mono uppercase font-bold tracking-widest transition-none",
                      active 
                        ? "bg-foreground text-background" 
                        : "bg-background text-foreground hover:bg-foreground hover:text-background"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
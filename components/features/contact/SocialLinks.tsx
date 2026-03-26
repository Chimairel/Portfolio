import { Button } from "@/components/ui/button";

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-6 font-mono h-full justify-center">
      <div>
        <h3 className="text-xl font-bold uppercase tracking-widest mb-2">
          On The Web_
        </h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Prefer to connect on other platforms? Check out my repositories or reach out to me on social media.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {/* GitHub Button */}
        <Button 
          asChild 
          variant="outline"
          className="bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground font-bold uppercase tracking-widest w-full"
        >
          <a href="https://github.com/chimairel" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        
        {/* Facebook Button */}
        <Button 
          asChild 
          variant="outline"
          className="bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground font-bold uppercase tracking-widest w-full"
        >
          <a href="https://facebook.com/chimairel.pacaldo" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </Button>

        {/* Placeholder for future links (like LinkedIn) */}
        <Button 
          asChild 
          variant="outline"
          className="bg-transparent text-background border-2 border-background hover:bg-background hover:text-foreground font-bold uppercase tracking-widest w-full"
        >
          <a href="https://www.roblox.com/users/3461734497/profile" target="_blank" rel="noopener noreferrer">
            Roblox
          </a>
        </Button>
      </div>
    </div>
  );
}
import { Button } from "@/components/ui/button";

export function SendMessage() {
  return (
    <div className="flex flex-col gap-6 font-mono h-full w-full">
      
      <div className="border-b-2 border-border pb-4">
        <h2 className="text-2xl font-bold tracking-tight uppercase">
          Let's get in touch!
        </h2>
        <p className="text-sm opacity-70 mt-1">
          Fill out the form below to send me a message.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        
        {/* Top Row: Email & Phone side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-current">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="juan@example.com"
              className="bg-transparent text-current border-2 border-border px-4 py-3 outline-none focus:bg-foreground/5 transition-all w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold uppercase tracking-widest text-current">
              Phone Number (Optional)
            </label>
            <input 
              type="tel" 
              placeholder="+63 900 000 0000"
              className="bg-transparent text-current border-2 border-border px-4 py-3 outline-none focus:bg-foreground/5 transition-all w-full"
            />
          </div>
        </div>

        {/* Name Row */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold uppercase tracking-widest text-current">
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="Juan Dela Cruz"
            className="bg-transparent text-current border-2 border-border px-4 py-3 outline-none focus:bg-foreground/5 transition-all w-full"
            required
          />
        </div>

        {/* Message Row */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold uppercase tracking-widest text-current">
            Your Message
          </label>
          <textarea 
            rows={4}
            placeholder="How can I help you?"
            className="bg-transparent text-current border-2 border-border px-4 py-3 outline-none focus:bg-foreground/5 transition-all resize-none w-full"
            required
          />
        </div>

        <div>
          <Button type="submit" size="lg" className="font-bold uppercase tracking-widest border-2 border-current hover:bg-transparent hover:text-current">
            Send Message
          </Button>
        </div>
      </form>

    </div>
  );
}
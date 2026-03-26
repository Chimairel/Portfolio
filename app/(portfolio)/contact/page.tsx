import { RetroWindow } from "@/components/common/RetroWindow";
import { SendMessage } from "@/components/features/contact/SendMessage";
import { Connections } from "@/components/features/contact/Connections";
import { SocialLinks } from "@/components/features/contact/SocialLinks";
import { MapWidget } from "@/components/features/contact/MapWidget";

export default function ContactPage() {
  return (
    <main className="w-full px-6 py-8 flex flex-col min-h-[calc(100vh-64px)] animate-in fade-in duration-500">
      
      <RetroWindow 
        title="Contact_Dashboard.exe" 
        id="contact-main" 
        className="grow max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col gap-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border-2 border-border p-6 shadow-[4px_4px_0px_0px_var(--color-border)] bg-card">
              <SendMessage />
            </div>
            <div className="lg:col-span-1 border-2 border-border p-6 shadow-[4px_4px_0px_0px_var(--color-border)] bg-foreground text-background">
              <SocialLinks />
            </div>
          </div>

          <Connections />

          <div className="border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)] bg-card p-2">
            <MapWidget />
          </div>

        </div>
      </RetroWindow>

    </main>
  );
}
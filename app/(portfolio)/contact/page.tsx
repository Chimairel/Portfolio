import { SendMessage } from "@/components/features/contact/SendMessage";
import { Connections } from "@/components/features/contact/Connections";
import { SocialLinks } from "@/components/features/contact/SocialLinks";
import { MapWidget } from "@/components/features/contact/MapWidget";
import { PageContainer } from "@/components/common/PageContainer";
import { RetroShadow } from "@/components/common/RetroShadow";

export default function ContactPage() {
  return (
    <PageContainer innerClassName="gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RetroShadow className="lg:col-span-2 p-6 bg-card">
          <SendMessage />
        </RetroShadow>
        <RetroShadow className="lg:col-span-1 p-6 bg-foreground text-background">
          <SocialLinks />
        </RetroShadow>
      </div>

      <Connections />

      <RetroShadow className="bg-card p-2">
        <MapWidget />
      </RetroShadow>
    </PageContainer>
  );
}
import { SendMessage } from "@/components/features/contact/SendMessage";
import { Connections } from "@/components/features/contact/Connections";
import { SocialLinks } from "@/components/features/contact/SocialLinks";
import { MapWidget } from "@/components/features/contact/MapWidget";
import { PageContainer } from "@/components/common/PageContainer";
import { RetroBlock } from "@/components/common/RetroBlock";

export default function ContactPage() {
  return (
    <PageContainer innerClassName="gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RetroBlock className="lg:col-span-2 p-6 bg-card">
          <SendMessage />
        </RetroBlock>
        <RetroBlock className="lg:col-span-1 p-6 bg-foreground text-background">
          <SocialLinks />
        </RetroBlock>
      </div>

      <Connections />

      <RetroBlock className="bg-card p-2">
        <MapWidget />
      </RetroBlock>
    </PageContainer>
  );
}
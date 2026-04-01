import { HeroBanner } from "@/components/features/home/HeroBanner";
import { RecentProjects } from "@/components/features/home/RecentProjects";
import { ContactCTA } from "@/components/features/home/ContactCTA";
import { PageContainer } from "@/components/common/PageContainer";

export default function HomePage() {
  return (
    <PageContainer>
      <HeroBanner />
      <RecentProjects />
      <ContactCTA />
    </PageContainer>
  );
}
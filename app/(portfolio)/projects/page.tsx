import { Suspense } from "react";
import { ProjectsList } from "@/components/features/projects/ProjectsList";
import { PageContainer } from "@/components/common/PageContainer";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Suspense>
        <ProjectsList />
      </Suspense>
    </PageContainer>
  );
}
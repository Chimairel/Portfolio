import { BlogFeed } from "@/components/features/blog/BlogFeed";
import { PageContainer } from "@/components/common/PageContainer";

export default function BlogPage() {
  return (
    <PageContainer innerClassName="gap-6">
      <BlogFeed />
    </PageContainer>
  );
}
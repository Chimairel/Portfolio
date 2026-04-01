import { blogData } from "@/constants/blog";
import { notFound } from "next/navigation";
import { BlogPostReader } from "@/components/features/blog/BlogPostReader";
import { PageContainer } from "@/components/common/PageContainer";

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  
  const { post } = await params;
  
  const blogPost = blogData.find((p) => p.slug === post);
  if (!blogPost) notFound();
  
  return (
    <PageContainer innerClassName="w-full max-w-4xl flex flex-col gap-6" withInnerContainer={false}>
      <BlogPostReader post={blogPost} />
    </PageContainer>
  );
}
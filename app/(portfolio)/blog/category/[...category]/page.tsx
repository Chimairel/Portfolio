import { blogData as BLOG_POSTS } from "@/constants/blog";
import { BlogCategoryContent } from "@/components/features/blog/BlogCategoryContent";
import { PageContainer } from "@/components/common/PageContainer";

type Props = { params: Promise<{ category: string[] }> };

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const activeCategories = category || [];
  
  const mainCategory = activeCategories[activeCategories.length - 1];
  
  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (!mainCategory) return false;
    const postSlug = post.category.toLowerCase().replace(/\s+/g, '-');
    return postSlug === mainCategory.toLowerCase();
  });

  return (
    <PageContainer innerClassName="gap-6">
      <BlogCategoryContent 
        activeCategories={activeCategories}
        filteredPosts={filteredPosts}
        mainCategory={mainCategory}
      />
    </PageContainer>
  );
}
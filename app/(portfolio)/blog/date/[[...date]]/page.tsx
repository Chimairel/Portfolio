import { blogData as BLOG_POSTS } from "@/constants/blog";
import { BlogDateContent } from "@/components/features/blog/BlogDateContent";
import { PageContainer } from "@/components/common/PageContainer";

type Props = { params: Promise<{ date?: string[] }> };

export default async function BlogDatePage({ params }: Props) {
  const { date } = await params;
  const segments = date || [];
  const year = segments[0] ? (segments[0].length === 2 ? `20${segments[0]}` : segments[0]) : undefined;
  const month = segments[1] ? segments[1].padStart(2, "0") : undefined;
  const day = segments[2] ? segments[2].padStart(2, "0") : undefined;

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (!year) return true;
    const postDate = new Date(post.date);
    const postYear = postDate.getFullYear().toString();
    const postMonth = (postDate.getMonth() + 1).toString().padStart(2, "0");
    const postDay = postDate.getDate().toString().padStart(2, "0");

    if (day) return postYear === year && postMonth === month && postDay === day;
    if (month) return postYear === year && postMonth === month;
    return postYear === year;
  });

  return (
    <PageContainer innerClassName="gap-6">
      <BlogDateContent 
        segments={segments}
        filteredPosts={filteredPosts}
        year={year}
        month={month}
        day={day}
      />
    </PageContainer>
  );
}
import { BlogPost } from "@/components/blog/blog-post";
import PublicLayout from "@/layouts/public-layout";
import { BlogPostData } from "@/types";

export default function BlogShow({ post }: { post: BlogPostData }) {
    return (
        <PublicLayout>
            <BlogPost post={post} />
        </PublicLayout>
    );
}

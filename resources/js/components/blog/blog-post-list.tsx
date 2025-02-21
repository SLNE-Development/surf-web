import { BlogPost } from "@/components/blog/blog-post";
import { BlogPostData } from "@/types";
import { PaginatedModel } from "@/types/helper-types";
import { cn } from "../../lib/utils";

export function BlogPostList({
    posts,
}: {
    posts: PaginatedModel<BlogPostData>;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {posts.data.map((post, index) => (
                <BlogPost
                    key={post.id}
                    post={post}
                    className={cn({
                        "col-span-2": index === 0,
                        "md:col-span-1": index !== 0,
                    })}
                />
            ))}
        </div>
    );
}

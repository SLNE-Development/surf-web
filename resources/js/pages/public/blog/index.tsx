import { BlogPostList } from "@/components/blog/blog-post-list";
import PublicLayout from "@/layouts/public-layout";
import { BlogPostData } from "@/types";
import { PaginatedModel } from "@/types/helper-types";
import { Deferred } from "@inertiajs/react";

export default function BlogIndex({
    posts,
}: {
    posts: PaginatedModel<BlogPostData>;
}) {
    return (
        <PublicLayout>
            <h1>Blog</h1>

            <Deferred data="posts" fallback={<div>Loading...</div>}>
                <BlogPostList posts={posts} />
            </Deferred>
        </PublicLayout>
    );
}

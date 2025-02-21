import { formatDate } from "@/lib/date-utils";
import { cn } from "@/lib/utils";
import { BlogPostData } from "@/types";
import { Link } from "@inertiajs/react";

const blogTypes: Record<string, string> = {
    RELEASE: "text-orange-400",
    UPDATE: "text-emerald-400",
    EVENT: "text-cyan-400",
    TUTORIAL: "text-blue-400",
    ANNOUNCEMENT: "text-red-400",
    DEVLOG: "text-purple-400",
};

export function BlogPost({
    post,
    className,
}: {
    post: BlogPostData;
    className?: string;
}) {
    const { blog_type } = post;
    const blogTypeDisplay = blogTypes[blog_type] || "text-gray-400";

    return (
        <article className={cn("w-full flex flex-col gap-1 group", className)}>
            <Link href={route("blog.show", post.slug)}>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <img
                        src={post.meta.image}
                        alt={post.title}
                        className="w-full h-full group-hover:scale-110 group-hover:rotate-2 transition-transform duration-150 shadow rounded-lg"
                    />
                </div>

                <h3 className="font-semibold text-lg">{post.title}</h3>
                <div className="flex flex-row items-center gap-2">
                    <span
                        className={cn(blogTypeDisplay, "uppercase font-bold")}
                    >
                        {blog_type}
                    </span>
                    <span className="text-muted-foreground">
                        {formatDate(new Date(post.created_at), false)}
                    </span>
                </div>
                <p>{splitText(post.meta.description)}</p>
            </Link>
        </article>
    );
}

function splitText(text: string, length: number = 150) {
    return text.length > length ? text.substring(0, length) + "..." : text;
}

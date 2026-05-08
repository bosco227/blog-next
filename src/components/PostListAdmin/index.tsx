import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { deletePostAction } from "@/actions/post/delete-post-action";

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "py-2 px-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between",
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>^{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}
            <form action={deletePostAction}>
              <input type="hidden" name="id" defaultValue={post.id} />
              <button
                className={clsx(
                  "text-red-500 cursor-pointer transition",
                  "[&_svg]:w-4 [&_svg]:h-4",
                  "hover:scale-120 hover:text-red-700",
                )}
                aria-label={`Apagar post: ${post.title}`}
                title={`Apagar post: ${post.title}`}
              >
                <Trash2Icon size={18} />
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}

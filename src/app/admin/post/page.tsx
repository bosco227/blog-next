import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminLPostPage() {
  const posts = await findAllPostsAdmin();
  return (
    <div className="py-16 text-6xl">
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}

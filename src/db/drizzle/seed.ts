import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "./schemas";

(async () => {
  console.log("🔥 SEED INICIADO");

  const jsonPostRepository = new JsonPostRepository();
  const posts = await jsonPostRepository.findAll();

  const normalizedPosts = posts.map((post) => ({
    ...post,
    published: true, // 🔥 garante que vai aparecer
    createdAt: post.createdAt || new Date().toISOString(),
    updatedAt: post.updatedAt || new Date().toISOString(),
  }));

  try {
    await drizzleDb.delete(postsTable);
    await drizzleDb.insert(postsTable).values(normalizedPosts);

    console.log(`✅ ${normalizedPosts.length} posts inseridos`);
  } catch (e) {
    console.error("❌ ERRO NO SEED:", e);
  }
})();

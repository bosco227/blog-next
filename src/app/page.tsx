import { SpinLoader } from "@/src/components/SpinLoader";
import { PostsList } from "../components/PostsList";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostsList />
    </Suspense>
  );
}

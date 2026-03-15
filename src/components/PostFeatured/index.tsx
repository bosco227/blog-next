import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = 'x';
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: require("../../public/images/bryen_9.png").default,
          alt: "alt",
        }}
      />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt qui
      eaque autem illum maxime error ex laborum doloremque culpa, ipsa molestias
      sint. Neque numquam eos nihil animi tenetur tempore optio.
    </section>
  );
}

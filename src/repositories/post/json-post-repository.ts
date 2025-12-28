import { PostModel } from "@/src/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsoncontent = await readFile(JSON_POSTS_FILE_PATH, "utf8");
    const parsedJson = JSON.parse(jsoncontent);
  }

  async findAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();

import { readFile } from "node:fs/promises";

const messageFile = process.env.HUSKY_GIT_PARAMS ?? process.argv[2];
if (!messageFile) {
  console.error("Usage: node scripts/validate-commit-msg.mjs <commit-msg-file>");
  process.exit(1);
}

const message = (await readFile(messageFile, "utf8")).trim();
const conventional =
  /^(feat|fix|docs|chore|refactor|test|ops|data|build|ci|perf|style)(\([a-z0-9-]+\))?: .{1,120}$/;

if (!conventional.test(message.split("\n")[0] ?? "")) {
  console.error("Commit message must use Conventional Commits, e.g. feat: add parser panel");
  process.exit(1);
}

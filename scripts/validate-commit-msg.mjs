#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ALLOWED_TYPES = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];

const COMMIT_PATTERN = new RegExp(
  `^(?:${ALLOWED_TYPES.join("|")})(?:\\([a-z0-9]+(?:[-./][a-z0-9]+)*\\))?(?:!)?: [^\\s].{0,72}$`,
);

const file = process.argv[2];
if (!file) {
  console.error("validate-commit-msg: missing commit message file path");
  process.exit(1);
}

const commitMessagePath = path.resolve(file);
let message;
try {
  message = fs.readFileSync(commitMessagePath, "utf8");
} catch (error) {
  console.error("validate-commit-msg: unable to read commit message file");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

const firstLine = message.split("\n")[0].trim();

if (
  firstLine.startsWith("Merge ") ||
  firstLine.startsWith('Revert "') ||
  firstLine === ""
) {
  process.exit(0);
}

if (!COMMIT_PATTERN.test(firstLine)) {
  console.error("\n🚫 Commit message không hợp lệ.");
  console.error("Dòng đầu tiên phải tuân theo định dạng Conventional Commits");
  console.error("Ví dụ:");
  console.error("  feat(search): add fuzzy match for suggestions");
  console.error("  fix: trim user input before submit");
  console.error("\nYêu cầu:");
  console.error(`- Type hợp lệ: ${ALLOWED_TYPES.join(", ")}`);
  console.error('- Subject phải có dạng "type(scope?): description"');
  console.error(
    "- Subject dài tối đa 72 ký tự và không bắt đầu bằng khoảng trắng",
  );
  console.error("- Scope (tùy chọn): chữ thường, phân cách bằng -, /, hoặc .");
  process.exit(1);
}

// Kiểm tra cơ bản cho imperative mood (cảnh báo)
const description = firstLine.split(": ")[1];
if (description && /^[a-z]/.test(description)) {
  console.warn(
    "\n⚠️  Cảnh báo: Mô tả nên bắt đầu bằng chữ hoa (imperative mood)",
  );
  console.warn('Ví dụ: "Add feature" thay vì "add feature"');
}

process.exit(0);

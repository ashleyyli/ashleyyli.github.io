export type Project = {
  slug: string;
  title: string;
  date: string;
  subtitle: string;
  tagline: string;
  content: string;
};

const files = import.meta.glob<string>(["./*.md", "!./_*.md"], {
  query: "?raw",
  import: "default",
  eager: true,
});

const images = import.meta.glob<string>(
  "./images/**/*.{png,jpg,jpeg,gif,webp,avif,svg}",
  { query: "?url", import: "default", eager: true }
);

// Maps a path written in a project file (`./images/foo.png`) to its bundled URL
export function resolveImage(src: string) {
  const path = src.startsWith("./") ? src : `./${src}`;
  return images[path] ?? src;
}

// Splits the `---` delimited `key: value` block off the top of a markdown file
function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {} as Record<string, string>, content: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    data[key] = value.replace(/^(["'])(.*)\1$/, "$2");
  }
  return { data, content: raw.slice(match[0].length) };
}

// Shown in ascending `order`; files starting with `_` are drafts and are not bundled
export const projects: Project[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.replace(/^\.\//, "").replace(/\.md$/, "");
    const { data, content } = parseFrontmatter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      subtitle: data.subtitle ?? "",
      tagline: data.tagline ?? "",
      content,
      order: Number(data.order ?? Infinity),
    };
  })
  .sort((a, b) => a.order - b.order);

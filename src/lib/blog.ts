export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  description: string;
  content: string;
  readingTime: number;
  formattedDate: string;
}

const polishMonths = [
  'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
  'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
];

export function formatPolishDate(dateStr: string): string {
  try {
    const parts = dateStr.trim().split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const monthIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const monthName = polishMonths[monthIdx] || parts[1];
      return `${day} ${monthName} ${year}`;
    }
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return `${d.getDate()} ${polishMonths[d.getMonth()]} ${d.getFullYear()}`;
    }
  } catch (e) {
    // fallback
  }
  return dateStr;
}

export function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

/**
 * Bezpieczny, lekki parser frontmattera YAML oparty na RegExp
 * Eliminuje konieczność stosowania gray-matter i zależności Node.js Buffer
 */
export function parseMarkdownFile(raw: string, fallbackSlug?: string): BlogPost {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = raw.match(frontmatterRegex);

  let title = 'Artykuł bez tytułu';
  let slug = fallbackSlug || 'artykul';
  let date = new Date().toISOString().split('T')[0];
  let description = '';
  let content = raw;

  if (match) {
    const yamlBlock = match[1];
    content = match[2];

    const lines = yamlBlock.split(/\r?\n/);
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;

      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Usunięcie otaczających cudzysłowów
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      if (key === 'title') title = value;
      else if (key === 'slug') slug = value;
      else if (key === 'date') date = value;
      else if (key === 'description') description = value;
    }
  }

  // Wyprowadzenie sluga jeśli nie było w YAML
  if (!slug && fallbackSlug) {
    slug = fallbackSlug;
  }

  return {
    title,
    slug,
    date,
    description,
    content: content.trim(),
    readingTime: calculateReadingTime(content),
    formattedDate: formatPolishDate(date)
  };
}

/**
 * Pobiera wszystkie posty z folderu src/content/blog/*.md za pomocą Vite import.meta.glob
 */
export function getAllPosts(): BlogPost[] {
  // Vite eager raw import dla wszystkich plików .md
  const modules = import.meta.glob('/src/content/blog/*.md', {
    query: '?raw',
    eager: true,
    import: 'default'
  }) as Record<string, string>;

  const posts: BlogPost[] = [];

  for (const [path, rawContent] of Object.entries(modules)) {
    // Wyciągamy domyślny slug z nazwy pliku jeśli potrzebny
    const fileName = path.split('/').pop()?.replace(/\.md$/, '') || '';
    const post = parseMarkdownFile(rawContent, fileName);
    posts.push(post);
  }

  // Sortowanie malejąco po dacie publikacji (najnowsze u góry)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Pobiera pojedynczy post na podstawie unikalnego sluga
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug || encodeURIComponent(p.slug) === slug);
}

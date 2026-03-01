import { type SearchEntry } from "./search-data";

type ScoredEntry = SearchEntry & { score: number };

function scoreField(field: string, tokens: string[], weight: number): number {
  const lower = field.toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (lower.includes(token)) {
      score += weight;
      // Word-boundary bonus
      const idx = lower.indexOf(token);
      if (idx === 0 || lower[idx - 1] === " ") {
        score += 3;
      }
    }
  }
  return score;
}

export function search(entries: SearchEntry[], query: string, max = 8): SearchEntry[] {
  const raw = query.trim().toLowerCase();
  if (!raw) return [];

  const tokens = raw.split(/\s+/).filter(Boolean);

  const scored: ScoredEntry[] = [];

  for (const entry of entries) {
    let score = 0;

    // Title (10pts per token match)
    score += scoreField(entry.title, tokens, 10);

    // Title starts with query bonus
    if (entry.title.toLowerCase().startsWith(raw)) {
      score += 15;
    }

    // Exact title match bonus
    if (entry.title.toLowerCase() === raw) {
      score += 20;
    }

    // Description (5pts per token match)
    score += scoreField(entry.description, tokens, 5);

    // Keywords (3pts per token match)
    for (const kw of entry.keywords) {
      score += scoreField(kw, tokens, 3);
    }

    if (score > 0) {
      scored.push({ ...entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, max);
}

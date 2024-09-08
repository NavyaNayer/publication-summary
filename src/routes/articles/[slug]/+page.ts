// src/routes/article/[slug]/+page.ts

import type { Load } from '@sveltejs/kit';
import type { ArticleParams } from './$types';

// Define the article interface
interface Article {
  slug: string;
  title: string;
  content: string;
}

// Mock articles data for demonstration
const articles: Article[] = [
  { slug: 'article-1', title: 'Article 1', content: 'This is the full content of Article 1.' },
  { slug: 'article-2', title: 'Article 2', content: 'This is the full content of Article 2.' }
];

// Use PageLoad type from @sveltejs/kit
export const load: Load<ArticleParams> = async ({ params }) => {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    return {
      status: 404,
      error: new Error('Article not found')
    };
  }

  return {
    props: {
      article
    }
  };
};

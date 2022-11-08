export interface BlogPost {
  title: string;
  image: string;
  excerpt: string;
  date: number; // Unix timestamp
  slug: string;
  isFeatured: boolean;
}

type MarkdownString = string;

export interface FullBlogPost extends BlogPost {
  content: MarkdownString;
}

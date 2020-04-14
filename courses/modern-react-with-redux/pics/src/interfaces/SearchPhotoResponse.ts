interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface ImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface ImageAuthor {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string | null;
  instagram_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  }
  profile_image: {
    small: string;
    medium: string;
    large: string;
  }
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

interface ImageTag {
  type: string;
  title: string;
  source?: any
}

export interface SearchPhotosImage {
  id: string;
  created_at: string;
  update_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: ImageUrls
  links: ImageLinks
  categories: any;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any;
  user: ImageAuthor;
  tags: ImageTag[];
}

export interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: SearchPhotosImage[];
}

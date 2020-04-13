interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: {
    id: string;
    created_at: string;
    update_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    description: string;
    alt_description: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    }
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    }
    categories: any;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any;
    user: {
      [key: string]: any;
    }
    tags: {
      [key: string]: any;
    }[];
  }[];
}

export default SearchPhotosResponse;

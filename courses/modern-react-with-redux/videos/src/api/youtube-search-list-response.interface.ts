interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YoutubeSearchResultSnippet {
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: {
    default: YoutubeThumbnail;
    medium: YoutubeThumbnail;
    hight: YoutubeThumbnail;
  }
  liveBroadcastContent: string;
}

export interface YoutubeSearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  }
  snippet?: YoutubeSearchResultSnippet;
}

export default interface YoutubeSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: YoutubeSearchResult[];
}

import { YoutubeSearchResult } from 'api/youtube-search-list-response.interface';

export default interface State {
  videos: YoutubeSearchResult[];
  selectedVideo: YoutubeSearchResult | null;
}

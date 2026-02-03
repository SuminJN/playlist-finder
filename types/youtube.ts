// YouTube Data API 응답 타입 정의
export interface YouTubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubePlaylistItem[];
}

export interface YouTubePlaylistItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: YouTubeThumbnail;
      medium: YouTubeThumbnail;
      high: YouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

// 애플리케이션에서 사용할 간소화된 플레이리스트 타입
export interface Playlist {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  channelTitle: string;
  publishedAt: string;
}

import { YouTubeSearchResponse, Playlist } from "@/types/youtube";
import { getMockPlaylists } from "./mockData";

const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

// Mock 데이터 사용 여부 (환경 변수로 제어)
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";

/**
 * YouTube Data API를 사용하여 플레이리스트 검색
 * @param searchQuery - 검색 쿼리 (사용자 입력 또는 "상황 기분" 조합)
 * @returns 플레이리스트 배열
 */
export async function fetchPlaylists(
  searchQuery: string
): Promise<Playlist[]> {
  // Mock 데이터 모드가 활성화된 경우
  if (USE_MOCK_DATA) {
    console.log("🔧 Mock 데이터 모드 사용 중");
    // 실제 API 호출처럼 약간의 지연 추가
    await new Promise((resolve) => setTimeout(resolve, 500));
    return getMockPlaylists(searchQuery);
  }

  // API 키 확인
  if (!API_KEY) {
    console.warn(
      "⚠️ YouTube API 키가 없습니다. Mock 데이터로 전환합니다."
    );
    return getMockPlaylists(searchQuery);
  }

  // 검색 쿼리 구성 - 플레이리스트를 명시적으로 추가
  const query = `${searchQuery} 플레이리스트`;
  
  // URL 파라미터 설정
  const params = new URLSearchParams({
    part: "snippet",
    q: query,
    type: "playlist",
    maxResults: "10",
    key: API_KEY,
    regionCode: "KR", // 한국 지역 설정
    relevanceLanguage: "ko", // 한국어 관련성 우선
  });

  try {
    // API 요청
    const response = await fetch(
      `${YOUTUBE_API_BASE_URL}/search?${params.toString()}`
    );

    // HTTP 에러 체크
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `YouTube API 요청 실패: ${response.status} - ${
          errorData.error?.message || response.statusText
        }`
      );
    }

    const data: YouTubeSearchResponse = await response.json();

    // 응답 데이터를 애플리케이션에서 사용할 형태로 변환
    const playlists: Playlist[] = data.items.map((item) => ({
      id: item.id.playlistId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl:
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        item.snippet.thumbnails.default?.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));

    return playlists;
  } catch (error) {
    // 에러 처리
    console.error("플레이리스트 검색 중 오류 발생:", error);
    
    // API 할당량 초과 또는 네트워크 오류 시 Mock 데이터로 대체
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();
      
      // Quota 초과 또는 403 에러인 경우 Mock 데이터 사용
      if (
        errorMessage.includes("quota") ||
        errorMessage.includes("403") ||
        errorMessage.includes("limit")
      ) {
        console.warn("⚠️ API 할당량 초과. Mock 데이터로 전환합니다.");
        return getMockPlaylists(searchQuery);
      }
      
      throw error;
    }
    
    throw new Error("플레이리스트를 가져오는 중 알 수 없는 오류가 발생했습니다.");
  }
}

/**
 * YouTube 플레이리스트 URL 생성
 * @param playlistId - 플레이리스트 ID
 * @returns YouTube 플레이리스트 URL
 */
export function getPlaylistUrl(playlistId: string): string {
  return `https://www.youtube.com/playlist?list=${playlistId}`;
}

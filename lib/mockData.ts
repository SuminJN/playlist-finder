import { Playlist } from "@/types/youtube";

/**
 * Mock 플레이리스트 데이터
 * 빌드 시 또는 API 할당량 초과 시 사용
 */
export const mockPlaylists: Playlist[] = [
  {
    id: "PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf",
    title: "공부할 때 듣기 좋은 음악 🎵 집중력 향상 플레이리스트",
    description:
      "공부하거나 일할 때 집중력을 높여주는 차분한 음악 모음입니다.",
    thumbnailUrl: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
    channelTitle: "Study Music Channel",
    publishedAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "PLKQw8JvVXBLUFbX4nV3YTNlYZ7rGKVW1S",
    title: "운동할 때 듣는 신나는 음악 💪 워크아웃 플레이리스트",
    description: "운동 동기부여를 높여주는 에너지 넘치는 음악 모음",
    thumbnailUrl: "https://i.ytimg.com/vi/2z5sGJhYbXI/hqdefault.jpg",
    channelTitle: "Workout Motivation",
    publishedAt: "2023-02-20T14:30:00Z",
  },
  {
    id: "PLY6OHmUyvSXRqfGM_JdQvLFKzXGZKLxQZ",
    title: "휴식 시간 🌿 힐링 음악 모음",
    description: "마음을 편안하게 해주는 힐링 음악 플레이리스트",
    thumbnailUrl: "https://i.ytimg.com/vi/5qap5aO4i9A/hqdefault.jpg",
    channelTitle: "Healing Music",
    publishedAt: "2023-03-10T09:00:00Z",
  },
  {
    id: "PL8mPWv3h1vKQ5XhHxmHLpKaJFfTQFZHDK",
    title: "드라이브 음악 🚗 감성 드라이빙 플레이리스트",
    description: "드라이브하면서 듣기 좋은 감성적인 음악 모음",
    thumbnailUrl: "https://i.ytimg.com/vi/lTRiuFIWV54/hqdefault.jpg",
    channelTitle: "Drive Music",
    publishedAt: "2023-04-05T16:20:00Z",
  },
  {
    id: "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
    title: "요리할 때 듣는 음악 🍳 쿠킹 타임 플레이리스트",
    description: "요리하면서 듣기 좋은 경쾌한 음악",
    thumbnailUrl: "https://i.ytimg.com/vi/Rbm6GXllBiw/hqdefault.jpg",
    channelTitle: "Cooking Music",
    publishedAt: "2023-05-12T11:45:00Z",
  },
  {
    id: "PLMSXw4sbD7TUhpEDLWNHShSt7LvMB8EBl",
    title: "차분한 재즈 🎷 릴렉스 재즈 플레이리스트",
    description: "편안한 분위기의 재즈 음악 모음",
    thumbnailUrl: "https://i.ytimg.com/vi/Dx5qFachd3A/hqdefault.jpg",
    channelTitle: "Jazz Cafe",
    publishedAt: "2023-06-18T13:00:00Z",
  },
  {
    id: "PLMrqJ4JbE2dKLlCJ3FQ6GmU7h8D8mXwGX",
    title: "집중력 향상 🧠 뇌파 자극 음악",
    description: "집중력과 창의력을 높여주는 바이노럴 비트 음악",
    thumbnailUrl: "https://i.ytimg.com/vi/WPni755-Krg/hqdefault.jpg",
    channelTitle: "Focus Music Lab",
    publishedAt: "2023-07-22T08:30:00Z",
  },
  {
    id: "PLcirGkCPGtcTzqLaHALqH0wHhJVrXqz3g",
    title: "우울할 때 듣는 음악 💙 감성 플레이리스트",
    description: "감정을 정화해주는 위로가 되는 음악",
    thumbnailUrl: "https://i.ytimg.com/vi/i3NlJU-yaxg/hqdefault.jpg",
    channelTitle: "Emotional Music",
    publishedAt: "2023-08-15T17:00:00Z",
  },
  {
    id: "PLaW7sQUC0qzTJJ7lkRXlXmVrXJZDHfpDp",
    title: "몽환적인 음악 ✨ 드림 팝 플레이리스트",
    description: "꿈결같은 분위기의 몽환적인 음악 모음",
    thumbnailUrl: "https://i.ytimg.com/vi/vNunvNqKnPU/hqdefault.jpg",
    channelTitle: "Dream Pop",
    publishedAt: "2023-09-10T12:15:00Z",
  },
  {
    id: "PLOzRYVm0a65GKBJPAr3L_2a4Nw0-8lL37",
    title: "신나는 K-POP 💃 댄스 플레이리스트",
    description: "기분을 업시켜주는 신나는 K-POP 댄스 음악",
    thumbnailUrl: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    channelTitle: "K-POP Hits",
    publishedAt: "2023-10-05T15:40:00Z",
  },
];

/**
 * 검색어에 따라 Mock 데이터 필터링
 */
export function getMockPlaylists(searchQuery: string): Playlist[] {
  const query = searchQuery.toLowerCase();
  
  // 검색어가 비어있으면 모든 데이터 반환
  if (!query.trim()) {
    return mockPlaylists;
  }

  // 검색어와 매칭되는 플레이리스트 필터링
  const filtered = mockPlaylists.filter(
    (playlist) =>
      playlist.title.toLowerCase().includes(query) ||
      playlist.description.toLowerCase().includes(query) ||
      playlist.channelTitle.toLowerCase().includes(query)
  );

  // 매칭 결과가 없으면 모든 데이터 반환
  return filtered.length > 0 ? filtered : mockPlaylists;
}

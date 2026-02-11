"use client";

import { useState, useEffect, useRef } from "react";
import { Playlist } from "@/types/youtube";
import { getPlaylistUrl, fetchPopularPlaylists } from "@/lib/youtube";
import Image from "next/image";

// 카테고리 정의
const categories = [
  { id: "all", label: "전체", keyword: "인기 플레이리스트" },
  { id: "study", label: "공부", keyword: "공부 집중 플레이리스트" },
  { id: "workout", label: "운동", keyword: "운동 플레이리스트" },
  { id: "drive", label: "드라이브", keyword: "드라이브 음악" },
  { id: "sleep", label: "수면", keyword: "수면 잔잔한 음악" },
];

export default function TrendingPlaylists() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 메모이제이션을 위한 캐시
  const cacheRef = useRef<Record<string, Playlist[]>>({});

  // 카테고리별 플레이리스트 로드
  useEffect(() => {
    const loadPlaylists = async () => {
      // 캐시에 데이터가 있으면 사용
      if (cacheRef.current[selectedCategory]) {
        setPlaylists(cacheRef.current[selectedCategory]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const category = categories.find((c) => c.id === selectedCategory);
        const keyword = category?.keyword || "인기 플레이리스트";
        const results = await fetchPopularPlaylists(keyword, 10);

        // 캐시에 저장
        cacheRef.current[selectedCategory] = results;
        setPlaylists(results);
      } catch (error) {
        console.error("인기 플레이리스트 로드 실패:", error);
        setPlaylists([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPlaylists();
  }, [selectedCategory]);

  return (
    <section className="mb-16">
      {/* 섹션 헤더 */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          🔥 실시간 인기 무드 TOP 10
        </h2>
        <p className="text-gray-600 mb-6">
          지금 가장 많이 듣는 플레이리스트를 확인해보세요
        </p>

        {/* 카테고리 필터 버튼 */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-102"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* 로딩 상태 - 스켈레톤 UI */}
      {isLoading && <SkeletonLoader />}

      {/* 플레이리스트 그리드/스크롤 */}
      {!isLoading && playlists.length > 0 && (
        <div className="relative">
          {/* 모바일: 가로 스크롤 */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {playlists.map((playlist, index) => (
                <TrendingCard
                  key={playlist.id}
                  playlist={playlist}
                  rank={index + 1}
                />
              ))}
            </div>
          </div>

          {/* 데스크톱: 그리드 */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {playlists.map((playlist, index) => (
              <TrendingCard
                key={playlist.id}
                playlist={playlist}
                rank={index + 1}
              />
            ))}
          </div>
        </div>
      )}

      {/* 데이터 없음 */}
      {!isLoading && playlists.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">플레이리스트를 불러올 수 없습니다.</p>
        </div>
      )}
    </section>
  );
}

// 스켈레톤 UI 컴포넌트
function SkeletonLoader() {
  return (
    <div className="relative">
      {/* 모바일: 가로 스크롤 */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {[...Array(10)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>

      {/* 데스크톱: 그리드 */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(10)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}

// 스켈레톤 카드
function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-[280px] md:w-auto animate-pulse">
      {/* 썸네일 스켈레톤 */}
      <div className="relative aspect-video bg-gray-300" />

      {/* 정보 스켈레톤 */}
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
}

interface TrendingCardProps {
  playlist: Playlist;
  rank: number;
}

function TrendingCard({ playlist, rank }: TrendingCardProps) {
  const playlistUrl = getPlaylistUrl(playlist.id);

  // 순위별 배지 색상
  const getBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-amber-700 text-white";
    return "bg-gray-700 text-white";
  };

  return (
    <a
      href={playlistUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-[280px] md:w-auto"
    >
      {/* 순위 배지 */}
      <div
        className={`absolute top-3 left-3 z-10 ${getBadgeColor(
          rank
        )} rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg`}
      >
        {rank}
      </div>

      {/* 인기 배지 */}
      <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
        <svg
          className="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        인기
      </div>

      {/* 썸네일 */}
      <div className="relative aspect-video overflow-hidden bg-gray-200">
        <Image
          src={playlist.thumbnailUrl}
          alt={playlist.title}
          fill
          sizes="(max-width: 768px) 280px, (max-width: 1200px) 50vw, 20vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized={playlist.thumbnailUrl.includes("i.ytimg.com")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* 재생 아이콘 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 rounded-full p-4 shadow-xl">
            <svg
              className="w-8 h-8 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 정보 */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors text-sm md:text-base">
          {playlist.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-1">
          {playlist.channelTitle}
        </p>
      </div>
    </a>
  );
}

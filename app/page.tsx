"use client";

import { useState } from "react";
import { fetchPlaylists } from "@/lib/youtube";
import { Playlist } from "@/types/youtube";
import PlaylistCard from "@/components/PlaylistCard";

// 더미 데이터
const situations = ["공부", "운동", "휴식", "드라이브", "요리"];
const moods = ["신남", "차분함", "우울함", "집중", "몽환적"];

export default function HomePage() {
  const [selectedSituation, setSelectedSituation] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [customInput, setCustomInput] = useState<string>("");
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSearch = async () => {
    console.log("검색 시작:", {
      situation: selectedSituation,
      mood: selectedMood,
      customInput: customInput,
    });

    // 상태 초기화
    setIsLoading(true);
    setError("");
    setPlaylists([]);

    try {
      // YouTube API 호출 - 커스텀 입력이 있으면 우선 사용
      const searchQuery = customInput.trim() || `${selectedSituation} ${selectedMood}`;
      const results = await fetchPlaylists(searchQuery);
      setPlaylists(results);
      
      console.log(`${results.length}개의 플레이리스트를 찾았습니다:`, results);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "플레이리스트를 가져오는데 실패했습니다.";
      setError(errorMessage);
      console.error("검색 오류:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* 헤더 섹션 */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            🎵 무드플리
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            당신의 상황과 기분에 딱 맞는 플레이리스트를 찾아드립니다
          </p>
        </header>

        {/* 메인 검색 카드 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          {/* 상황 선택 섹션 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              지금 어떤 상황인가요?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {situations.map((situation) => (
                <button
                  key={situation}
                  onClick={() => setSelectedSituation(situation)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    selectedSituation === situation
                      ? "bg-purple-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"
                  }`}
                >
                  {situation}
                </button>
              ))}
            </div>
          </section>

          {/* 기분 선택 섹션 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              지금 기분은 어떤가요?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    selectedMood === mood
                      ? "bg-pink-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102"
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </section>

          {/* 구분선 */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">또는</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* 자유 입력 섹션 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              어떤 플레이리스트를 찾고 있나요?
            </h2>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && customInput.trim()) {
                  handleSearch();
                }
              }}
              placeholder="예: 비오는 날 감성에 젖고 싶어, 새벽 공부할 때..."
              className="w-full px-4 py-4 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-gray-800 placeholder-gray-400 transition-colors"
            />
          </section>

          {/* 검색 버튼 */}
          <div className="flex justify-center">
            <button
              onClick={handleSearch}
              disabled={!customInput.trim() && (!selectedSituation || !selectedMood)}
              className={`py-4 px-12 rounded-full text-lg font-bold transition-all duration-200 ${
                customInput.trim() || (selectedSituation && selectedMood)
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              🔍 플레이리스트 검색
            </button>
          </div>
        </div>

        {/* 검색 결과 표시 영역 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            추천 플레이리스트
          </h3>

          {/* 로딩 상태 */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-600"></div>
              <p className="mt-4 text-gray-600">플레이리스트를 찾고 있습니다...</p>
            </div>
          )}

          {/* 에러 상태 */}
          {error && !isLoading && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-medium mb-2">⚠️ 오류 발생</p>
              <p className="text-red-500 text-sm">{error}</p>
              <p className="text-gray-600 text-sm mt-3">
                .env.local 파일에 NEXT_PUBLIC_YOUTUBE_API_KEY가 설정되어 있는지 확인해주세요.
              </p>
            </div>
          )}

          {/* 초기 상태 */}
          {!isLoading && !error && playlists.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              {selectedSituation && selectedMood ? (
                <p className="text-lg">
                  검색 버튼을 눌러 플레이리스트를 찾아보세요! ✨
                </p>
              ) : (
                <p className="text-lg">
                  상황과 기분을 선택하면 여기에 결과가 표시됩니다 🎶
                </p>
              )}
            </div>
          )}

          {/* 검색 결과 */}
          {!isLoading && !error && playlists.length > 0 && (
            <div>
              <p className="text-gray-600 mb-4">
                총 <span className="font-semibold text-purple-600">{playlists.length}</span>개의
                플레이리스트를 찾았습니다
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playlists.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

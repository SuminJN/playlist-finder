import TrendingPlaylists from "@/components/TrendingPlaylists";
import SearchSection from "@/components/SearchSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* 헤더 섹션 */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            🎵 무드플리
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            당신의 상황과 기분에 딱 맞는 플레이리스트를 찾아드립니다
          </p>
        </header>

        {/* 실시간 인기 무드 TOP 10 섹션 */}
        <TrendingPlaylists />

        {/* 검색 섹션 (클라이언트 컴포넌트) */}
        <div className="max-w-4xl mx-auto">
          <SearchSection />
        </div>
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '음악 가이드 블로그 - 무드플리',
  description: '상황별, 무드별 음악 선택 가이드와 플레이리스트 큐레이션 팁을 제공합니다.',
};

const blogPosts = [
  {
    id: 1,
    slug: 'study-music-guide',
    title: '공부할 때 듣기 좋은 음악과 그 과학적 효과',
    excerpt: '집중력을 높이고 학습 효율을 극대화하는 음악 선택 가이드입니다. 과학적 연구 결과를 바탕으로 최적의 공부 음악을 찾아보세요.',
    date: '2026년 2월 11일',
    category: '학습',
    readTime: '5분',
  },
  {
    id: 2,
    slug: 'workout-music-guide',
    title: '운동 효율을 높이는 음악 선택 가이드',
    excerpt: 'BPM과 리듬이 운동 성과에 미치는 영향을 알아보고, 운동 종류별 최적의 음악을 선택하는 방법을 소개합니다.',
    date: '2026년 2월 10일',
    category: '운동',
    readTime: '6분',
  },
  {
    id: 3,
    slug: 'work-focus-playlist',
    title: '업무 집중력을 높이는 플레이리스트 만들기',
    excerpt: '생산성을 극대화하는 음악의 비밀. 업무 환경에 맞는 배경 음악을 선택하여 집중력과 창의성을 높이는 방법을 알려드립니다.',
    date: '2026년 2월 9일',
    category: '업무',
    readTime: '5분',
  },
  {
    id: 4,
    slug: 'mood-based-music-guide',
    title: '상황별 최적의 음악 장르 가이드',
    excerpt: '드라이브, 휴식, 요리 등 다양한 일상 상황에서 분위기를 극대화할 수 있는 음악 장르와 플레이리스트 선택 팁을 제공합니다.',
    date: '2026년 2월 8일',
    category: '라이프스타일',
    readTime: '7분',
  },
  {
    id: 5,
    slug: 'music-psychology',
    title: '음악이 기분과 생산성에 미치는 영향',
    excerpt: '음악 심리학의 관점에서 음악이 우리의 감정, 기억, 그리고 일상 생활에 어떤 영향을 미치는지 탐구합니다.',
    date: '2026년 2월 7일',
    category: '심리학',
    readTime: '8분',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎵 음악 가이드 블로그
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            당신의 일상을 더 풍요롭게 만들어줄 음악 선택 가이드와 플레이리스트 큐레이션 팁
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime} 읽기</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="text-purple-600 font-semibold hover:underline">
                    읽어보기 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            원하는 플레이리스트를 찾아보세요
          </h2>
          <p className="text-gray-600 mb-6">
            무드플리에서 당신의 상황과 기분에 맞는 완벽한 플레이리스트를 검색해보세요.
          </p>
          <Link 
            href="/"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            플레이리스트 검색하기
          </Link>
        </div>
      </div>
    </div>
  );
}

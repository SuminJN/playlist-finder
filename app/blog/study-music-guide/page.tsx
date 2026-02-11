import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '공부할 때 듣기 좋은 음악과 그 과학적 효과 - 무드플리',
  description: '집중력을 높이고 학습 효율을 극대화하는 음악 선택 가이드. 과학적 연구 결과를 바탕으로 최적의 공부 음악을 찾아보세요.',
};

export default function StudyMusicGuidePage() {
  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-purple-600 hover:underline mb-6 inline-block">
          ← 블로그 목록으로
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-1 rounded-full">
              학습
            </span>
            <span className="text-sm text-gray-500">2026년 2월 11일</span>
            <span className="text-sm text-gray-500">• 5분 읽기</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            공부할 때 듣기 좋은 음악과 그 과학적 효과
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            집중력을 높이고 학습 효율을 극대화하는 음악 선택 가이드입니다. 
            과학적 연구 결과를 바탕으로 최적의 공부 음악을 찾아보세요.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">음악이 학습에 미치는 영향</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              많은 학생들과 직장인들이 공부나 업무를 할 때 음악을 듣습니다. 하지만 모든 음악이 집중력 향상에 도움이 되는 것은 아닙니다. 
              연구에 따르면, 특정 유형의 음악은 인지 기능을 향상시키고 학습 효율을 높이는 반면, 
              어떤 음악은 오히려 주의력을 분산시켜 학습을 방해할 수 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              스탠퍼드 대학교의 연구에 따르면, 바로크 시대의 음악(특히 60-70 BPM)이 집중력과 기억력 향상에 
              효과적이라고 합니다. 이는 우리 뇌파를 알파파 상태로 유도하여 편안하면서도 집중된 상태를 만들어주기 때문입니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">공부에 적합한 음악의 특징</h2>
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. 가사가 없는 음악</h3>
              <p className="text-gray-700 leading-relaxed">
                가사가 있는 음악은 언어 처리를 담당하는 뇌 영역과 경쟁하여 독해나 작문 같은 언어 관련 학습에 
                방해가 될 수 있습니다. 클래식, 재즈, 로파이 힙합, 앰비언트 음악 등 인스트루멘탈 음악을 추천합니다.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. 일정한 템포와 리듬</h3>
              <p className="text-gray-700 leading-relaxed">
                급격한 템포 변화나 예측 불가능한 리듬은 집중력을 방해합니다. 
                60-70 BPM의 일정한 템포를 가진 음악이 가장 효과적입니다. 
                이는 휴식 상태의 심박수와 유사하여 자연스러운 집중 상태를 유도합니다.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. 중간 음량 (50-60dB)</h3>
              <p className="text-gray-700 leading-relaxed">
                일리노이 대학교 연구에 따르면, 중간 정도의 백색 소음이나 음악(50-60dB, 카페 소음 수준)이 
                창의성과 추상적 사고를 향상시킵니다. 너무 조용하거나 시끄러운 환경보다 적절한 배경 음악이 더 효과적입니다.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">학습 유형별 추천 음악</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">암기 학습</h3>
                <p className="text-gray-700 leading-relaxed">
                  바로크 음악(바흐, 비발디), 클래식 피아노 음악이 효과적입니다. 
                  특히 모차르트 효과로 알려진 모차르트의 음악은 공간-시간 추론 능력을 일시적으로 향상시킵니다.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">독해 및 작문</h3>
                <p className="text-gray-700 leading-relaxed">
                  앰비언트 음악, 자연의 소리, 로파이 힙합이 추천됩니다. 
                  가사가 없고 예측 가능한 패턴의 음악이 언어 처리에 방해가 되지 않습니다.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">수학 및 문제 해결</h3>
                <p className="text-gray-700 leading-relaxed">
                  미니멀리스트 클래식, 일렉트로닉 앰비언트 음악이 적합합니다. 
                  단순하고 반복적인 패턴이 논리적 사고를 방해하지 않으면서 집중력을 유지시켜줍니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">창의적 작업</h3>
                <p className="text-gray-700 leading-relaxed">
                  재즈, 인디 음악, 중간 음량의 카페 소음이 창의성을 자극합니다. 
                  약간의 변화와 예상치 못한 요소가 창의적 사고를 촉진합니다.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">공부 음악 활용 팁</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>
                  <strong>학습 전 플레이리스트 준비:</strong> 공부 중에 음악을 찾느라 집중력이 흐트러지지 않도록 
                  사전에 2-3시간 분량의 플레이리스트를 준비하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>
                  <strong>익숙한 음악 선택:</strong> 새로운 음악은 주의를 끌 수 있으므로, 
                  이미 들어본 적 있는 익숙한 음악을 선택하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>
                  <strong>25분 집중 + 5분 휴식:</strong> 포모도로 기법과 음악을 결합하여 
                  학습 세션마다 다른 분위기의 음악으로 전환하면 더 효과적입니다.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✓</span>
                <span>
                  <strong>개인차 고려:</strong> 모든 사람에게 같은 음악이 효과적인 것은 아닙니다. 
                  여러 장르를 시도해보고 자신에게 가장 잘 맞는 음악을 찾으세요.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주의사항</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              음악은 학습 보조 도구일 뿐, 학습 그 자체를 대체할 수 없습니다. 
              다음과 같은 경우에는 음악 없이 공부하는 것이 더 효과적일 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>복잡한 개념을 처음 배울 때</li>
              <li>시험 환경이 조용할 것으로 예상될 때 (상태 의존 학습)</li>
              <li>음악이 오히려 집중을 방해한다고 느낄 때</li>
            </ul>
          </section>

          <section className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">무드플리에서 공부 플레이리스트 찾기</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              무드플리에서 &apos;공부&apos;, &apos;집중&apos;, &apos;학습&apos; 등의 키워드로 검색하여 
              당신에게 완벽한 공부 플레이리스트를 찾아보세요. 
              수천 개의 큐레이션된 플레이리스트 중에서 최적의 학습 음악을 발견할 수 있습니다.
            </p>
            <Link 
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              공부 플레이리스트 검색하기
            </Link>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link href="/blog" className="text-purple-600 hover:underline">
            ← 블로그 목록으로 돌아가기
          </Link>
        </footer>
      </div>
    </article>
  );
}

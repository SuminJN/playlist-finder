import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '운동 효율을 높이는 음악 선택 가이드 - 무드플리',
  description: 'BPM과 리듬이 운동 성과에 미치는 영향을 알아보고, 운동 종류별 최적의 음악을 선택하는 방법을 소개합니다.',
};

export default function WorkoutMusicGuidePage() {
  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-purple-600 hover:underline mb-6 inline-block">
          ← 블로그 목록으로
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-1 rounded-full">
              운동
            </span>
            <span className="text-sm text-gray-500">2026년 2월 10일</span>
            <span className="text-sm text-gray-500">• 6분 읽기</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            운동 효율을 높이는 음악 선택 가이드
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            BPM과 리듬이 운동 성과에 미치는 영향을 알아보고, 
            운동 종류별 최적의 음악을 선택하는 방법을 소개합니다.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">음악이 운동 성과에 미치는 영향</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              음악은 단순히 운동 중 지루함을 달래주는 것 이상의 역할을 합니다. 
              브루넬 대학교(Brunel University)의 스포츠 심리학 연구에 따르면, 
              적절한 음악은 운동 지구력을 최대 15% 향상시키고, 피로감을 10% 감소시킬 수 있다고 합니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              음악은 우리의 움직임을 동기화하고, 통증 인식을 감소시키며, 
              긍정적인 감정을 유발하여 운동 효율을 크게 높입니다. 
              특히 BPM(분당 비트 수)은 운동 강도와 페이스를 조절하는 핵심 요소입니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">운동 강도별 최적 BPM</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">워밍업 (60-90 BPM)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  가벼운 스트레칭이나 준비 운동에는 느린 템포의 음악이 적합합니다. 
                  몸을 서서히 풀어주고 심박수를 점진적으로 높여줍니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 칠 아웃(Chill Out), 다운템포 일렉트로닉, 스무스 재즈
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">유산소 운동 (120-140 BPM)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  러닝, 사이클링, 에어로빅 등의 유산소 운동에는 중간 템포의 음악이 이상적입니다. 
                  자연스러운 보폭과 동기화되어 리듬감 있는 운동이 가능합니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 팝, 댄스 음악, 힙합, EDM
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">고강도 인터벌 트레이닝 (140-180 BPM)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  HIIT, 스프린트, 인터벌 러닝 같은 고강도 운동에는 빠른 템포의 음악이 필요합니다. 
                  높은 에너지와 강한 비트가 최대 출력을 이끌어냅니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 하드 록, 메탈, 더블타임 힙합, 하드스타일 EDM
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">근력 운동 (100-130 BPM)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  웨이트 트레이닝에는 중간 템포의 파워풀한 음악이 효과적입니다. 
                  강력한 베이스라인과 드라이빙 리듬이 힘을 내는 데 도움을 줍니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 록, 힙합, 트랩, 드럼 앤 베이스
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">쿨다운 (60-80 BPM)</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  마무리 스트레칭과 심박수 안정화를 위해 느리고 차분한 음악이 필요합니다. 
                  근육을 이완시키고 회복을 돕습니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 앰비언트, 뉴에이지, 어쿠스틱 음악, 자연의 소리
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">운동 종류별 추천 음악</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">러닝</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  리듬감 있는 120-140 BPM의 음악이 최적입니다. 
                  연구에 따르면 음악의 템포가 달리기 페이스와 일치할 때 운동 효율이 가장 높아집니다.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-2"><strong>팁:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 5km 러닝: 125-135 BPM의 안정적인 템포</li>
                    <li>• 인터벌 러닝: 빠른 구간(150+ BPM), 느린 구간(100-120 BPM) 교차</li>
                    <li>• 장거리 러닝: 120-130 BPM의 일정한 템포로 지구력 유지</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">웨이트 트레이닝</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  강력한 비트와 공격적인 사운드가 테스토스테론 수치를 높이고 
                  더 무거운 중량을 들 수 있게 도와줍니다. 100-130 BPM의 파워풀한 음악을 선택하세요.
                </p>
                <p className="text-gray-600 text-sm">
                  추천 장르: 헤비메탈, 하드록, 트랩, 그라임
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">요가 & 필라테스</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  차분하고 흐르는 듯한 음악이 호흡과 움직임의 조화를 돕습니다. 
                  60-80 BPM의 앰비언트나 뉴에이지 음악이 이상적입니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 인도 클래식, 앰비언트, 자연의 소리, 티베트 싱잉볼
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">사이클링</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  일정한 케이던스를 유지하는 데 도움이 되는 120-140 BPM의 댄스/일렉트로닉 음악이 효과적입니다. 
                  스피닝 클래스에서 가장 많이 사용되는 음악 스타일입니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 하우스, 테크노, 프로그레시브 하우스, 트랜스
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">복싱 & 크로스핏</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  고강도 운동에는 140-160 BPM의 에너제틱한 음악이 필수입니다. 
                  강한 비트와 공격적인 사운드가 최대 출력을 이끌어냅니다.
                </p>
                <p className="text-gray-600 text-sm">
                  추천: 트랩, 더블타임 힙합, 드럼 앤 베이스, 하드스타일
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">운동 플레이리스트 만들기 팁</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span>
                  <strong>운동 단계별 구성:</strong> 워밍업 → 메인 운동 → 쿨다운 순서로 
                  BPM을 점진적으로 높였다가 낮추는 구조로 플레이리스트를 만드세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span>
                  <strong>동기부여 곡 배치:</strong> 가장 좋아하는 곡이나 에너지 넘치는 곡을 
                  운동이 가장 힘든 중반부에 배치하여 동기를 유지하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span>
                  <strong>충분한 길이:</strong> 최소 45-60분 분량의 플레이리스트를 준비하여 
                  운동 중 음악 선택에 신경 쓰지 않도록 하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span>
                  <strong>주기적 업데이트:</strong> 같은 플레이리스트를 반복하면 효과가 감소합니다. 
                  2-3주마다 새로운 곡을 추가하여 신선함을 유지하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">5.</span>
                <span>
                  <strong>개인 취향 반영:</strong> 과학적 근거도 중요하지만, 
                  본인이 좋아하고 동기부여가 되는 음악이 가장 효과적입니다.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">운동 음악의 과학</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              음악이 운동에 미치는 긍정적 효과는 여러 메커니즘을 통해 작동합니다:
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold mb-2">1. 주의 분산 효과</h4>
                <p>음악이 피로감과 불편함에서 주의를 돌려 운동을 더 오래 지속할 수 있게 합니다.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold mb-2">2. 리듬 반응</h4>
                <p>우리 몸은 자연스럽게 음악의 리듬과 동기화되어 움직임이 더 효율적이 됩니다.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-2">3. 감정 조절</h4>
                <p>음악이 긍정적 감정을 유발하고 스트레스 호르몬을 감소시킵니다.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold mb-2">4. 각성 수준 조절</h4>
                <p>빠른 음악은 각성을 높이고, 느린 음악은 진정 효과를 제공합니다.</p>
              </div>
            </div>
          </section>

          <section className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">무드플리에서 운동 플레이리스트 찾기</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              무드플리에서 &apos;운동&apos;, &apos;워크아웃&apos;, &apos;헬스&apos;, &apos;러닝&apos; 등의 키워드로 검색하여 
              당신의 운동 스타일에 완벽하게 맞는 플레이리스트를 찾아보세요. 
              BPM과 강도에 따라 분류된 다양한 운동 플레이리스트를 만나보실 수 있습니다.
            </p>
            <Link 
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              운동 플레이리스트 검색하기
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

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '업무 집중력을 높이는 플레이리스트 만들기 - 무드플리',
  description: '생산성을 극대화하는 음악의 비밀. 업무 환경에 맞는 배경 음악을 선택하여 집중력과 창의성을 높이는 방법을 알려드립니다.',
};

export default function WorkFocusPlaylistPage() {
  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-purple-600 hover:underline mb-6 inline-block">
          ← 블로그 목록으로
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-1 rounded-full">
              업무
            </span>
            <span className="text-sm text-gray-500">2026년 2월 9일</span>
            <span className="text-sm text-gray-500">• 5분 읽기</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            업무 집중력을 높이는 플레이리스트 만들기
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            생산성을 극대화하는 음악의 비밀. 업무 환경에 맞는 배경 음악을 선택하여 
            집중력과 창의성을 높이는 방법을 알려드립니다.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">업무 환경과 음악의 관계</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              현대 직장인들의 70% 이상이 업무 중 음악을 듣는다는 통계가 있습니다. 
              하지만 단순히 좋아하는 음악을 트는 것만으로는 충분하지 않습니다. 
              업무의 성격과 개인의 성향에 따라 적절한 음악을 선택하는 것이 생산성 향상의 핵심입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              테레사 레시우크(Teresa Lesiuk) 박사의 연구에 따르면, 
              업무 중 음악을 듣는 사람들이 그렇지 않은 사람들보다 업무를 더 빨리 완수하고, 
              더 창의적인 아이디어를 냈다고 합니다. 특히 반복적이고 단순한 업무에서 효과가 두드러졌습니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">업무 유형별 최적 음악</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. 코딩 & 데이터 분석</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  논리적 사고가 필요한 작업에는 가사 없는 일렉트로닉 음악이 이상적입니다. 
                  특히 앰비언트 테크노, 신스웨이브, 로파이 힙합이 효과적입니다.
                </p>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천 아티스트:</p>
                  <p className="text-sm text-gray-600">Tycho, Boards of Canada, Aphex Twin (Selected Ambient Works)</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. 글쓰기 & 콘텐츠 제작</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  창의적 글쓰기에는 중간 음량의 카페 소음이나 앰비언트 음악이 효과적입니다. 
                  일리노이 대학교 연구에 따르면, 70dB 정도의 적당한 소음이 창의성을 자극합니다.
                </p>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천:</p>
                  <p className="text-sm text-gray-600">카페 배경음, 자연의 소리, 재즈 피아노, 포스트록</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. 디자인 & 창의적 작업</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  시각적 창의성을 요구하는 작업에는 약간의 변화가 있는 음악이 좋습니다. 
                  인디, 포크, 재즈 등 예측 가능하지만 흥미로운 음악이 적합합니다.
                </p>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천 장르:</p>
                  <p className="text-sm text-gray-600">인디 포크, 재즈, 뉴에이지, 월드뮤직</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. 행정 & 이메일 처리</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  반복적이고 단순한 업무에는 리듬감 있고 에너지 넘치는 음악이 효과적입니다. 
                  팝이나 업비트 인디 음악으로 동기부여를 유지하세요.
                </p>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천:</p>
                  <p className="text-sm text-gray-600">팝, 인디 팝, 펑크, 디스코</p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. 회의 준비 & 프레젠테이션 연습</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  자신감을 높이고 긴장을 완화하는 음악이 필요합니다. 
                  클래식 음악이나 영화 사운드트랙이 효과적입니다.
                </p>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천:</p>
                  <p className="text-sm text-gray-600">영화 OST, 클래식(베토벤, 차이콥스키), 에픽 뮤직</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">하루 일과에 따른 음악 전략</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">오전 (9:00 - 12:00)</h3>
                <p className="text-gray-700 leading-relaxed">
                  아침에는 에너지가 높고 집중력이 좋은 시간입니다. 
                  복잡한 업무는 이 시간에 처리하고, 집중을 돕는 앰비언트나 클래식 음악을 선택하세요.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">점심 직후 (13:00 - 15:00)</h3>
                <p className="text-gray-700 leading-relaxed">
                  식후 졸음이 오는 시간대입니다. 
                  약간 빠른 템포의 음악(100-120 BPM)으로 각성 상태를 유지하세요. 
                  로파이 힙합이나 재즈가 적합합니다.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">오후 (15:00 - 17:00)</h3>
                <p className="text-gray-700 leading-relaxed">
                  집중력이 다시 회복되는 시간입니다. 
                  창의적 업무나 협업에 적합하며, 약간 더 다양한 음악을 시도해볼 수 있습니다.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">저녁 (17:00 - 19:00)</h3>
                <p className="text-gray-700 leading-relaxed">
                  하루를 마무리하는 시간입니다. 
                  단순 업무 처리나 정리 작업에는 편안한 음악으로 스트레스를 해소하세요.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">업무 플레이리스트 구성 전략</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. 작업 세션 구조화</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                포모도로 기법(25분 작업 + 5분 휴식)과 음악을 결합하세요:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>25분 집중 세션:</strong> 일관된 템포와 분위기의 음악</li>
                <li>• <strong>5분 휴식:</strong> 다른 분위기의 음악으로 전환하여 리프레시</li>
                <li>• <strong>긴 휴식(15분):</strong> 완전히 다른 장르나 무음악</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. 플레이리스트 길이</h3>
              <p className="text-gray-700 leading-relaxed">
                최소 2-3시간 분량의 플레이리스트를 준비하여 음악 선택에 신경 쓰지 않도록 하세요. 
                같은 곡이 반복되면 익숙해져서 효과가 감소할 수 있으므로, 
                충분히 다양한 곡을 포함시키는 것이 중요합니다.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">음악 vs 무음악: 언제 조용히 일해야 할까?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              모든 상황에서 음악이 도움이 되는 것은 아닙니다. 다음의 경우에는 음악 없이 일하는 것이 더 효과적입니다:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>새로운 정보 학습:</strong> 복잡한 개념을 처음 배우거나 
                  중요한 문서를 읽을 때는 조용한 환경이 더 효과적입니다.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>전화나 화상 회의:</strong> 음악은 커뮤니케이션을 방해할 수 있습니다.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>고도의 집중이 필요한 순간:</strong> 매우 복잡한 문제 해결이나 
                  중요한 결정을 내려야 할 때는 외부 자극을 최소화하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>
                  <strong>개인적 선호:</strong> 음악이 오히려 방해가 된다면 무리하지 마세요. 
                  생산성은 개인마다 다릅니다.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">프로 팁: 음악 볼륨 조절</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              적절한 음량은 업무 효율에 큰 영향을 미칩니다:
            </p>
            <div className="space-y-3 text-gray-700">
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">🔊 40-60dB (낮은 음량)</p>
                <p className="text-sm">독해, 글쓰기, 복잡한 사고가 필요한 작업에 적합</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">🔊 60-70dB (중간 음량)</p>
                <p className="text-sm">창의적 작업, 디자인, 반복 업무에 이상적</p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-semibold mb-2">🔊 70dB+ (높은 음량)</p>
                <p className="text-sm">동기부여가 필요한 단순 반복 작업에만 사용 (장시간 권장하지 않음)</p>
              </div>
            </div>
          </section>

          <section className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">무드플리에서 업무용 플레이리스트 찾기</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              무드플리에서 &apos;집중&apos;, &apos;업무&apos;, &apos;생산성&apos;, &apos;코딩&apos;, &apos;공부&apos; 등의 키워드로 검색하여 
              당신의 업무 스타일에 완벽하게 맞는 플레이리스트를 찾아보세요. 
              수천 명의 전문가들이 추천하는 업무 집중 플레이리스트를 경험해보실 수 있습니다.
            </p>
            <Link 
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              업무용 플레이리스트 검색하기
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

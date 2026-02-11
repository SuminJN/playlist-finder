import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '상황별 최적의 음악 장르 가이드 - 무드플리',
  description: '드라이브, 휴식, 요리 등 다양한 일상 상황에서 분위기를 극대화할 수 있는 음악 장르와 플레이리스트 선택 팁을 제공합니다.',
};

export default function MoodBasedMusicGuidePage() {
  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="text-purple-600 hover:underline mb-6 inline-block">
          ← 블로그 목록으로
        </Link>
        
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-4 py-1 rounded-full">
              라이프스타일
            </span>
            <span className="text-sm text-gray-500">2026년 2월 8일</span>
            <span className="text-sm text-gray-500">• 7분 읽기</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            상황별 최적의 음악 장르 가이드
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            드라이브, 휴식, 요리 등 다양한 일상 상황에서 분위기를 극대화할 수 있는 
            음악 장르와 플레이리스트 선택 팁을 제공합니다.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">왜 상황에 맞는 음악이 중요할까?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              음악은 우리의 경험을 증폭시키고, 순간을 더 특별하게 만들어줍니다. 
              스탠퍼드 대학교 음악 심리학 연구소의 연구에 따르면, 
              상황에 적합한 음악은 그 순간의 즐거움을 40% 이상 증가시키고, 
              긍정적인 기억을 더 오래 유지하게 해준다고 합니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              똑같은 활동이라도 배경 음악에 따라 완전히 다른 경험이 됩니다. 
              이 가이드에서는 일상의 다양한 상황에 최적화된 음악 장르를 소개합니다.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🚗 드라이브</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">도심 드라이브</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                도심의 활기찬 분위기와 어울리는 에너지 넘치는 음악이 좋습니다. 
                팝, 힙합, 인디 록 등 리듬감 있는 음악으로 운전의 즐거움을 배가시키세요.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 mb-2">추천 장르:</p>
                <p className="text-sm text-gray-600">팝 록, 얼터너티브 록, 힙합, 펑크, 신스팝</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">고속도로 장거리 드라이브</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                장시간 운전에는 일정한 템포의 음악이 피로를 줄여줍니다. 
                록 발라드, 소울, 블루스 등 편안하면서도 집중력을 유지시켜주는 음악이 이상적입니다.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 mb-2">추천 장르:</p>
                <p className="text-sm text-gray-600">클래식 록, 소울, 컨트리, 포크, 레게</p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">야간 드라이브</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                밤의 고요하고 몽환적인 분위기에는 신스웨이브, 칠웨이브, 드림팝이 완벽하게 어울립니다. 
                감성적이고 분위기 있는 음악으로 특별한 드라이브를 만들어보세요.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm font-semibold text-gray-700 mb-2">추천 장르:</p>
                <p className="text-sm text-gray-600">신스웨이브, 칠웨이브, 드림팝, 앰비언트, 트립합</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🍳 요리 & 식사</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">요리 준비</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  요리는 창의적이고 즐거운 활동입니다. 재즈, 라틴 음악, 
                  펑크 등 리듬감 있고 기분 좋은 음악이 요리의 재미를 더해줍니다.
                </p>
                <p className="text-sm text-gray-600">추천: 재즈, 보사노바, 살사, 펑크, 소울</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">아침 식사</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  상쾌한 아침을 시작하는 밝고 경쾌한 음악이 좋습니다. 
                  어쿠스틱 팝, 인디 포크 등 부담 없이 들을 수 있는 음악을 추천합니다.
                </p>
                <p className="text-sm text-gray-600">추천: 어쿠스틱, 인디 포크, 팝, 칠 일렉트로닉</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">저녁 만찬</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  우아하고 세련된 분위기를 위해 클래식, 재즈 피아노, 
                  보사노바 등이 이상적입니다. 대화를 방해하지 않는 적절한 음량이 중요합니다.
                </p>
                <p className="text-sm text-gray-600">추천: 클래식, 재즈 피아노, 보사노바, 라운지</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🛀 휴식 & 힐링</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">명상 & 요가</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  깊은 이완과 내면의 평화를 위해 앰비언트, 뉴에이지, 
                  자연의 소리가 효과적입니다. 60 BPM 이하의 느린 템포가 호흡과 조화를 이룹니다.
                </p>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천:</p>
                  <p className="text-sm text-gray-600">앰비언트, 뉴에이지, 티베트 싱잉볼, 자연의 소리, 백색 소음</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">반신욕 & 스파</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  따뜻한 물과 함께 스트레스를 풀어주는 부드러운 음악이 필요합니다. 
                  클래식, 스파 뮤직, 앰비언트가 완벽한 휴식을 선사합니다.
                </p>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천:</p>
                  <p className="text-sm text-gray-600">스파 뮤직, 클래식, 앰비언트, 물 소리, 피아노 솔로</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">독서</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  책에 몰입할 수 있도록 조용하고 방해되지 않는 음악이 좋습니다. 
                  클래식, 앰비언트, 포스트록 등 가사 없는 음악을 선택하세요.
                </p>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm font-semibold text-gray-700 mb-2">추천:</p>
                  <p className="text-sm text-gray-600">클래식, 앰비언트, 포스트록, 재즈 발라드, 미니멀리즘</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎉 파티 & 모임</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">집들이 & 홈파티</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  손님을 환영하고 편안한 분위기를 만드는 음악이 필요합니다. 
                  팝, 인디, 펑크 등 모두가 즐길 수 있는 친숙한 음악이 좋습니다.
                </p>
                <p className="text-sm text-gray-600">추천: 팝, 인디 팝, 펑크, 디스코, 하우스</p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">생일 파티</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  축하 분위기를 극대화하는 신나는 음악이 필수입니다. 
                  댄스 음악, K-팝, 라틴 팝 등 모두가 따라 부를 수 있는 곡들로 구성하세요.
                </p>
                <p className="text-sm text-gray-600">추천: 댄스 팝, K-팝, 라틴 팝, 파티 록</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">칵테일 파티</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  세련되고 우아한 분위기를 위해 재즈, 라운지, 보사노바가 완벽합니다. 
                  대화를 방해하지 않으면서도 분위기를 살려주는 음악을 선택하세요.
                </p>
                <p className="text-sm text-gray-600">추천: 재즈, 라운지, 보사노바, 칠 일렉트로닉</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌙 취침 전</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">수면 유도</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                하루를 마무리하고 깊은 수면에 들기 위해서는 40-60 BPM의 
                매우 느린 음악이 효과적입니다. 클래식, 앰비언트, 자연의 소리가 이상적입니다.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-800 mb-2">추천 음악:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 클래식: 드뷔시, 사티, 쇼팽의 녹턴</li>
                    <li>• 앰비언트: Brian Eno, Harold Budd</li>
                    <li>• 자연의 소리: 빗소리, 파도 소리, 숲속 소리</li>
                    <li>• 백색 소음: 부드러운 백색 소음이나 핑크 노이즈</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 수면 음악 팁</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>취침 30-60분 전부터 음악 듣기 시작</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>매우 낮은 볼륨 유지 (속삭임 수준)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>타이머 설정으로 자동 종료 (30-60분)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>가사 없는 음악 선택</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌧️ 날씨별 음악 추천</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">☀️ 맑은 날</h4>
                <p className="text-sm text-gray-600">
                  밝고 경쾌한: 팝, 레게, 펑크, 인디 록
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🌧️ 비 오는 날</h4>
                <p className="text-sm text-gray-600">
                  감성적인: 재즈, 어쿠스틱, 인디 포크, R&B
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🍂 가을날</h4>
                <p className="text-sm text-gray-600">
                  따뜻한: 포크, 재즈, 소울, 어쿠스틱
                </p>
              </div>
              
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">❄️ 겨울날</h4>
                <p className="text-sm text-gray-600">
                  포근한: 클래식, 재즈 발라드, 뉴에이지
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">상황별 플레이리스트 만들기 팁</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span>
                  <strong>활동 시간 고려:</strong> 플레이리스트는 활동 시간보다 
                  10-20% 길게 만들어 음악 선택에 신경 쓰지 않도록 하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span>
                  <strong>분위기 전환:</strong> 같은 장르 내에서도 분위기를 조금씩 
                  변화시켜 지루하지 않게 구성하세요.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span>
                  <strong>개인 취향 반영:</strong> 가이드를 참고하되, 
                  본인이 좋아하는 음악을 중심으로 구성하는 것이 가장 효과적입니다.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span>
                  <strong>정기적 업데이트:</strong> 같은 플레이리스트를 반복하면 
                  익숙해져서 효과가 감소합니다. 주기적으로 새로운 곡을 추가하세요.
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">무드플리에서 상황별 플레이리스트 찾기</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              무드플리에서 &apos;드라이브&apos;, &apos;요리&apos;, &apos;휴식&apos;, &apos;파티&apos; 등의 키워드로 검색하여 
              당신의 모든 일상 순간에 완벽하게 어울리는 플레이리스트를 찾아보세요. 
              전문가들이 큐레이션한 다양한 상황별 플레이리스트가 준비되어 있습니다.
            </p>
            <Link 
              href="/"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              상황별 플레이리스트 검색하기
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

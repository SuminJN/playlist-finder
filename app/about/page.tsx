import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서비스 소개 - 무드플리',
  description: '무드플리는 당신의 상황과 기분에 맞는 완벽한 플레이리스트를 찾아주는 서비스입니다.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          무드플리에 대하여
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎵 서비스 소개
            </h2>
            <p className="text-gray-700 leading-relaxed">
              무드플리는 당신의 현재 상황과 기분에 딱 맞는 음악 플레이리스트를 찾아주는 서비스입니다. 
              공부할 때, 운동할 때, 휴식이 필요할 때, 드라이브할 때 등 다양한 상황에서 
              당신에게 필요한 완벽한 분위기의 음악을 YouTube 플레이리스트로 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              💡 제작 배경
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              음악은 우리의 일상에서 빼놓을 수 없는 중요한 요소입니다. 
              하지만 수많은 플레이리스트 중에서 지금 내 기분과 상황에 딱 맞는 음악을 찾는 것은 쉽지 않습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              우리는 이러한 문제를 해결하고자 '무드플리'를 만들었습니다. 
              간단한 선택만으로 당신의 순간에 어울리는 최적의 플레이리스트를 제공하여, 
              음악을 찾는 시간을 줄이고 음악을 즐기는 시간을 늘릴 수 있도록 돕습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎯 주요 기능
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <strong>상황별 검색:</strong> 공부, 운동, 휴식, 드라이브, 요리 등 다양한 상황에 맞는 음악 추천
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <strong>기분별 검색:</strong> 신남, 차분함, 우울함, 집중, 몽환적 등 당신의 기분에 따른 맞춤 추천
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <strong>커스텀 검색:</strong> 원하는 키워드를 직접 입력하여 더욱 세밀한 검색 가능
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <strong>YouTube 연동:</strong> 검색된 플레이리스트를 바로 YouTube에서 재생 가능
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📖 사용 방법
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">1단계: 상황 선택</h3>
                <p>현재 당신이 처한 상황을 선택하세요. (예: 공부, 운동, 휴식 등)</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">2단계: 기분 선택</h3>
                <p>지금 당신의 기분이나 원하는 분위기를 선택하세요. (예: 신남, 차분함 등)</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">3단계: 검색 또는 커스텀 입력</h3>
                <p>선택한 조건으로 검색하거나, 원하는 키워드를 직접 입력할 수 있습니다.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">4단계: 플레이리스트 감상</h3>
                <p>추천된 플레이리스트 중 마음에 드는 것을 선택하여 YouTube에서 바로 감상하세요!</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🌟 서비스의 장점
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>직관적이고 간편한 사용자 인터페이스</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>빠른 검색 속도와 정확한 추천</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>모바일과 데스크톱 모두에서 최적화된 경험</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>무료로 제공되는 모든 기능</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>YouTube의 방대한 음악 라이브러리 활용</span>
              </li>
            </ul>
          </section>

          <section className="border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📬 문의하기
            </h2>
            <p className="text-gray-700 leading-relaxed">
              서비스에 대한 문의사항이나 개선 제안이 있으시다면 언제든지 연락 주세요.
              더 나은 서비스를 만들기 위해 여러분의 소중한 의견을 기다립니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

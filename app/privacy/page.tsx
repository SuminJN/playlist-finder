import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보 처리방침 - 무드플리',
  description: '무드플리의 개인정보 처리방침을 확인하세요.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          개인정보 처리방침
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div className="text-sm text-gray-600 mb-6">
            최종 수정일: 2026년 2월 3일
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 개인정보의 수집
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              무드플리는 별도의 회원가입 없이 사용할 수 있는 서비스입니다. 
              따라서 본 서비스는 사용자의 개인정보를 직접 수집하지 않습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              다만, 서비스 이용 과정에서 다음과 같은 정보가 자동으로 수집될 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>방문 기록 (IP 주소, 접속 시간, 사용 환경)</li>
              <li>서비스 이용 기록 (검색 키워드, 클릭 정보)</li>
              <li>쿠키 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 개인정보의 이용 목적
            </h2>
            <p className="text-gray-700 leading-relaxed">
              수집된 정보는 다음의 목적으로만 사용됩니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>서비스 제공 및 개선</li>
              <li>사용자 경험 향상</li>
              <li>서비스 이용 통계 분석</li>
              <li>서비스 장애 및 오류 해결</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. YouTube API 서비스 이용
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              본 서비스는 YouTube API Services를 사용합니다. 
              YouTube API Services를 사용함으로써 귀하는 다음에 동의하게 됩니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <a 
                  href="https://www.youtube.com/t/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  YouTube 이용약관
                </a>
              </li>
              <li>
                <a 
                  href="http://www.google.com/policies/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google 개인정보 보호정책
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 쿠키(Cookie) 사용
            </h2>
            <p className="text-gray-700 leading-relaxed">
              본 서비스는 사용자 경험 개선을 위해 쿠키를 사용할 수 있습니다. 
              쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 데이터 파일입니다. 
              사용자는 브라우저 설정을 통해 쿠키 사용을 거부할 수 있으나, 
              이 경우 일부 서비스 이용이 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 광고 서비스
            </h2>
            <p className="text-gray-700 leading-relaxed">
              본 서비스는 Google AdSense를 통해 광고를 제공합니다. 
              Google은 광고 맞춤 설정을 위해 쿠키를 사용할 수 있습니다. 
              자세한 내용은 Google의 개인정보 보호정책을 참조하시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 개인정보의 제3자 제공
            </h2>
            <p className="text-gray-700 leading-relaxed">
              본 서비스는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 
              다만, 법령에 의해 요구되는 경우 또는 사용자의 동의가 있는 경우 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. 개인정보 보호책임자
            </h2>
            <p className="text-gray-700 leading-relaxed">
              개인정보 처리에 관한 문의사항이 있으시면 Contact 페이지를 통해 연락 주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. 개인정보 처리방침의 변경
            </h2>
            <p className="text-gray-700 leading-relaxed">
              본 개인정보 처리방침은 법령, 정책 또는 보안 기술의 변경에 따라 내용이 수정될 수 있습니다. 
              개인정보 처리방침이 변경되는 경우 본 페이지를 통해 공지하겠습니다.
            </p>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
              본 개인정보 처리방침은 2026년 2월 3일부터 적용됩니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

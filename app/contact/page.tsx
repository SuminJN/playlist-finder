import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - 무드플리',
  description: '무드플리 문의 및 연락처 정보',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Contact
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              💬 연락 방법
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">GitHub</h3>
                <a 
                  href="https://github.com/SuminJN/playlist-finder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 hover:underline"
                >
                  https://github.com/SuminJN/playlist-finder
                </a>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">이메일</h3>
                <a 
                  href="mailto:wjstnals1211@gmail.com"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  wjstnals1211@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ⏰ 응답 시간
            </h2>
            <p className="text-gray-700 leading-relaxed">
              문의하신 내용은 확인 후 가능한 빠른 시일 내에 답변드리도록 하겠습니다.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              🙏 감사합니다
            </h2>
            <p className="text-gray-700 leading-relaxed">
              무드플리를 이용해 주셔서 감사합니다. 
              더 나은 서비스를 제공하기 위해 항상 노력하겠습니다.
            </p>
          </section>

          <section className="text-center pt-6 border-t">
            <p className="text-sm text-gray-600">
              서비스에 대한 자세한 정보는{' '}
              <a href="/about" className="text-purple-600 hover:underline">
                서비스 소개
              </a>
              {' '}페이지에서 확인하실 수 있습니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

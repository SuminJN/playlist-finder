import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
            🎵 무드플리
          </Link>
          
          <nav className="flex gap-6 text-sm">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              홈
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              서비스 소개
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

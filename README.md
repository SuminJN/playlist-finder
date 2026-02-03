# 무드플리 🎵

당신의 상황과 기분에 딱 맞는 플레이리스트를 찾아주는 서비스입니다.

## ✨ 주요 기능

- 🎯 **상황별 선택**: 공부, 운동, 휴식, 드라이브, 요리 등
- 😊 **기분별 선택**: 신남, 차분함, 우울함, 집중, 몽환적 등
- ✍️ **자유 입력**: 현재 상태나 기분을 직접 입력 가능
- 📱 **반응형 디자인**: 모바일 & 데스크톱 완벽 지원
- 🎨 **현대적인 UI**: Tailwind CSS로 구현한 깔끔한 디자인

## 🛠 기술 스택

- **Next.js 14** - App Router 사용
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 반응형 UI
- **YouTube Data API v3** - 플레이리스트 검색

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone <repository-url>
cd playlist-finder
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env.local` 파일 생성:
```env
# YouTube API 키 (실제 API 사용)
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key_here

# Mock 데이터 사용 (선택사항)
NEXT_PUBLIC_USE_MOCK_DATA=false
```

**YouTube API 키 발급 방법**:
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. "API 및 서비스" → "라이브러리" → "YouTube Data API v3" 활성화
4. "사용자 인증 정보" → "사용자 인증 정보 만들기" → "API 키" 선택

### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 📦 빌드 & 배포

### 로컬 빌드
```bash
npm run build
npm start
```

### Vercel 배포
1. GitHub 저장소에 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 가져오기
3. 환경 변수 설정:
   - `NEXT_PUBLIC_YOUTUBE_API_KEY`: YouTube API 키
   - `NEXT_PUBLIC_USE_MOCK_DATA`: `false` (선택사항)
4. 배포!

자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md) 참고

## 🔧 Mock 데이터 모드

API 할당량 절약이나 테스트를 위해 Mock 데이터를 사용할 수 있습니다.

```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```

자세한 내용은 [MOCK_DATA_GUIDE.md](./MOCK_DATA_GUIDE.md) 참고

## 📂 프로젝트 구조

```
playlist-finder/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   └── globals.css         # 전역 스타일
├── components/
│   └── PlaylistCard.tsx    # 플레이리스트 카드 컴포넌트
├── lib/
│   ├── youtube.ts          # YouTube API 로직
│   └── mockData.ts         # Mock 데이터
├── types/
│   └── youtube.ts          # TypeScript 타입 정의
├── public/                 # 정적 파일
├── .env.local              # 환경 변수 (git ignored)
├── .env.example            # 환경 변수 예시
├── next.config.js          # Next.js 설정
├── vercel.json             # Vercel 배포 설정
├── DEPLOYMENT.md           # 배포 가이드
└── MOCK_DATA_GUIDE.md      # Mock 데이터 가이드
```

## 🔑 API 할당량 관리

YouTube Data API v3 무료 할당량:
- **일일 한도**: 10,000 units
- **검색 비용**: 100 units/call
- **하루 최대 검색**: 약 100회

**권장 사항**:
- 개발 중에는 Mock 데이터 사용
- API 키에 도메인 제한 설정
- 프로덕션에서는 캐싱 고려

## 📄 라이선스

MIT License

## 🤝 기여

이슈와 PR은 언제나 환영합니다!


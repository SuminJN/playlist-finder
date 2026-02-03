# Vercel 배포 가이드

## 1. 환경 변수 설정

### Vercel Dashboard에서 설정
1. Vercel 프로젝트 대시보드로 이동
2. **Settings** → **Environment Variables** 클릭
3. 다음 환경 변수 추가:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_YOUTUBE_API_KEY` | YouTube API 키 | Production, Preview, Development |

### ⚠️ 주의사항
- **NEXT_PUBLIC_** 접두사가 붙은 환경 변수는 클라이언트 사이드에 노출됩니다
- API 키가 브라우저에서 보이므로, YouTube API Console에서 **도메인 제한**을 설정하세요
- **API Keys → Credentials → API restrictions** 에서 HTTP referrers 제한 추가:
  - `https://your-domain.vercel.app/*`
  - `http://localhost:3000/*` (개발용)

## 2. YouTube API Quota 관리

### Quota 제한
- YouTube Data API v3 무료 할당량: **10,000 units/day**
- 검색(search) 요청: **100 units/call**
- 하루 약 **100회 검색** 가능

### Quota 초과 방지 전략
1. **캐싱 구현** (추천)
2. **Rate Limiting** 추가
3. **Mock 데이터** 사용 (개발/테스트용)

## 3. 성능 최적화

### next.config.js 설정
- ✅ YouTube 이미지 도메인 허용
- ✅ WebP 이미지 포맷 자동 변환
- ✅ Production 빌드 시 console 제거

### 추가 최적화
- 이미지 lazy loading (Next.js Image 컴포넌트 사용)
- API 응답 캐싱
- 검색 결과 로컬 스토리지 저장

## 4. 배포 체크리스트

- [ ] `.env.local` 파일이 `.gitignore`에 포함되어 있는지 확인
- [ ] YouTube API 키 발급 및 도메인 제한 설정
- [ ] Vercel 환경 변수 설정 완료
- [ ] `npm run build` 로컬 빌드 테스트
- [ ] Git push → Vercel 자동 배포 확인

## 5. 배포 명령어

```bash
# Vercel CLI 설치 (선택사항)
npm i -g vercel

# 배포
vercel

# Production 배포
vercel --prod
```

## 6. 문제 해결

### API 키 오류
- Vercel 환경 변수가 제대로 설정되었는지 확인
- 배포 후 환경 변수 변경 시 **Redeploy** 필요

### Quota 초과
- YouTube API Console에서 현재 사용량 확인
- Mock 데이터로 전환 (DEPLOYMENT_MOCK_DATA.md 참고)

### 이미지 로드 실패
- next.config.js의 remotePatterns 확인
- YouTube 썸네일 URL 형식 확인

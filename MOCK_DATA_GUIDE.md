# Mock 데이터 사용 가이드

## 개요
YouTube API 할당량 제한이나 빌드 시 API 호출을 피하기 위해 Mock 데이터를 사용할 수 있습니다.

## 사용 방법

### 1. 환경 변수 설정

#### 로컬 개발
`.env.local` 파일에 다음 추가:
```env
NEXT_PUBLIC_USE_MOCK_DATA=true
```

#### Vercel 배포
Vercel Dashboard → Settings → Environment Variables:
- Key: `NEXT_PUBLIC_USE_MOCK_DATA`
- Value: `true`
- Environments: Development, Preview (또는 필요한 환경)

### 2. Mock 데이터 동작 방식

#### 자동 전환 조건
다음 경우 자동으로 Mock 데이터로 전환됩니다:
1. `NEXT_PUBLIC_USE_MOCK_DATA=true` 설정 시
2. YouTube API 키가 없는 경우
3. API 할당량 초과 (403, Quota exceeded 에러)

#### Mock 데이터 확인
콘솔에서 다음 메시지 확인:
```
🔧 Mock 데이터 모드 사용 중
⚠️ YouTube API 키가 없습니다. Mock 데이터로 전환합니다.
⚠️ API 할당량 초과. Mock 데이터로 전환합니다.
```

### 3. Mock 데이터 커스터마이징

`lib/mockData.ts` 파일을 수정하여 데이터 추가/변경:

```typescript
export const mockPlaylists: Playlist[] = [
  {
    id: "고유ID",
    title: "플레이리스트 제목",
    description: "설명",
    thumbnailUrl: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
    channelTitle: "채널명",
    publishedAt: "2023-01-01T00:00:00Z",
  },
  // 더 추가...
];
```

## YouTube API Quota 관리

### 할당량 정보
- **일일 무료 한도**: 10,000 units
- **검색 요청 비용**: 100 units/call
- **하루 최대 검색 횟수**: 약 100회

### 현재 사용량 확인
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 프로젝트 선택
3. **APIs & Services** → **Dashboard**
4. YouTube Data API v3 선택
5. **Quotas** 탭에서 사용량 확인

### 권장 전략

#### 개발 단계
```env
# .env.local
NEXT_PUBLIC_USE_MOCK_DATA=true
```
- 개발 중에는 Mock 데이터 사용
- API 할당량 절약

#### 스테이징/테스트
```env
# Vercel Preview 환경
NEXT_PUBLIC_USE_MOCK_DATA=true
```
- Preview 배포 시 Mock 데이터 사용
- 실제 프로덕션 할당량 보호

#### 프로덕션
```env
# Vercel Production 환경
NEXT_PUBLIC_USE_MOCK_DATA=false
NEXT_PUBLIC_YOUTUBE_API_KEY=your_real_api_key
```
- 실제 API 사용
- Quota 초과 시 자동으로 Mock으로 전환

## 고급 전략

### 1. 캐싱 구현 (추천)
```typescript
// 검색 결과를 로컬 스토리지에 캐싱
const cachedResults = localStorage.getItem(searchQuery);
if (cachedResults) {
  return JSON.parse(cachedResults);
}
```

### 2. Rate Limiting
```typescript
// 검색 버튼에 딜레이 추가
const [lastSearchTime, setLastSearchTime] = useState(0);
const canSearch = Date.now() - lastSearchTime > 2000; // 2초 제한
```

### 3. 조건부 API 호출
```typescript
// 특정 시간대에만 실제 API 사용
const isPeakHours = new Date().getHours() >= 9 && new Date().getHours() < 18;
const useMock = !isPeakHours; // 비성수기에만 실제 API
```

## 문제 해결

### Q: Mock 데이터가 보이지 않아요
**A**: 브라우저 콘솔에서 환경 변수 확인:
```javascript
console.log(process.env.NEXT_PUBLIC_USE_MOCK_DATA);
```

### Q: API 키가 있는데도 Mock 데이터가 나와요
**A**: 
1. API 할당량 초과 가능성 확인
2. API 키의 도메인 제한 확인
3. 브라우저 콘솔에서 오류 메시지 확인

### Q: Vercel 배포 후 환경 변수가 적용 안 돼요
**A**: 
1. Vercel Dashboard에서 환경 변수 확인
2. **Deployments** → **Redeploy** 클릭
3. 환경 변수 변경 후에는 재배포 필요

## 참고 자료
- [YouTube Data API Quota](https://developers.google.com/youtube/v3/getting-started#quota)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

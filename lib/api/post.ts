// app/posts/lib/getPosts.ts
export async function getPosts() {
  // 서버 지연 시뮬레이션 (선택 사항)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 테스트용 가짜 포스트 데이터
  return [
    { id: 1, title: '첫 번째 포스트', content: '이것은 첫 번째 포스트입니다.' },
    { id: 2, title: '두 번째 포스트', content: '이것은 두 번째 포스트입니다.' },
  ];
}

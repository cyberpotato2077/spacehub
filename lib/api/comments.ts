// app/posts/lib/getComments.ts
export async function getComments() {
  // 서버 지연 시뮬레이션 (선택 사항)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 테스트용 가짜 댓글 데이터
  return [
    { id: 1, postId: 1, content: '첫 번째 포스트의 첫 댓글' },
    { id: 2, postId: 1, content: '첫 번째 포스트의 두 번째 댓글' },
    { id: 3, postId: 2, content: '두 번째 포스트의 첫 댓글' },
  ];
}

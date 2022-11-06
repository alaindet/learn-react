import { MOCK_POST } from '@/mock';
import { PostContent } from '@/common/components/posts';

export default function PostPage() {
  return (
    <PostContent post={MOCK_POST} />
  );
}

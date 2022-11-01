import { Comment } from '@/features/comments';
import css from './comment-list.module.css';

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <ul className={css.comments}>
      {comments.map(comment => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>By <address>{comment.name} &lt;{comment.email}&gt;</address></div>
        </li>
      ))}
    </ul>
  );
}

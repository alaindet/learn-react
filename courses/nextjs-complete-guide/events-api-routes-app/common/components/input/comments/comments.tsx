import { useState } from 'react';

import { Comment } from '@/features/comments';
import { CommentList } from '../comment-list/comment-list';
import { NewComment } from '../new-comment/new-comment';
import css from './comments.module.css';

interface CommentsProps {
  eventId: string;
}

export function Comments({ eventId }: CommentsProps) {

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments(show => !show);
  }

  async function addCommentHandler(commentData: Partial<Comment>) {
    // send data to API
  }

  return (
    <section className={css.comments}>
      <button type="button" onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>

      {showComments && (
        <>
          <NewComment onAddComment={addCommentHandler} />
          <CommentList />
        </>
      )}
    </section>
  );
}

async function fetchComments(): Promise<Comment[]> {
  // Call API route
}

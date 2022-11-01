import { useState } from 'react';

import { getJson, postJson } from '@/common/utils';
import { Comment, CommentData, CreateCommentRequest } from '@/features/comments';
import { LiveEvent } from '@/features/events';
import { CommentList } from '../comment-list/comment-list';
import { NewComment } from '../new-comment/new-comment';
import css from './comments.module.css';

interface CommentsProps {
  eventId: LiveEvent['id'];
}

export function Comments({ eventId }: CommentsProps) {

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  async function handleToggleComments() {
    setShowComments(show => {
      const willShow = !show;
      if (willShow && !comments.length) fetchComments();
      return willShow;
    });
  }

  async function fetchComments() {
    const res = await getJson(`/api/events/${eventId}/comments`);
    setComments(res.data.reverse());
  }

  async function handleAddComment(commentData: CommentData) {
    const payload: CreateCommentRequest = { eventId, ...commentData };
    const comment = await postJson(`/api/events/${eventId}/comments`, payload);
    setComments(comments => [...comments, comment.data].reverse());
  }

  return (
    <section className={css.comments}>
      <button type="button" onClick={handleToggleComments}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>

      {showComments && (
        <>
          <NewComment onAddComment={handleAddComment} />
          <CommentList comments={comments} />
        </>
      )}
    </section>
  );
}

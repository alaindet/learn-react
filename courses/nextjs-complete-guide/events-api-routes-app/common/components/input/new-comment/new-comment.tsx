import { useRef, useState, FormEvent } from 'react';

import { Comment } from '@/features/comments';
import css from './new-comment.module.css';

interface NewCommentProps {
  onAddComment: (partialComment: Partial<Comment>) => void;
}

export function NewComment({ onAddComment }: NewCommentProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const commentInputRef = useRef<HTMLTextAreaElement | null>(null);

  function sendCommentHandler(event: FormEvent) {
    event.preventDefault();

    const email = emailInputRef.current?.value ?? '';
    const name = nameInputRef.current?.value ?? '';
    const text = commentInputRef.current?.value ?? '';

    if (
      !email || email.trim() === '' || !email.includes('@') ||
      !name || name.trim() === '' ||
      !text || text.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    onAddComment({ email, name, text });
  }

  return (
    <form className={css.form} onSubmit={sendCommentHandler}>

      <div className={css.row}>

        {/* Email */}
        <div className={css.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>

        {/* Name */}
        <div className={css.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>

      {/* Comment */}
      <div className={css.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows={5} ref={commentInputRef}></textarea>
        {isInvalid && <p>Please enter a valid email address and comment!</p>}
      </div>

      {/* Submit */}
      <button type="submit">Save</button>
    </form>
  );
}

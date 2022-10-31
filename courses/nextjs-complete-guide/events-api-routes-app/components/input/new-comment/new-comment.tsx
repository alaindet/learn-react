import { useRef, useState, FormEvent } from 'react';

import { Comment } from '@/types';
import css from './new-comment.module.css';

interface NewCommentProps {
  onAddComment: (comment: Comment) => void;
}

export function NewComment({ onAddComment }: NewCommentProps) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event: FormEvent) {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const text = commentInputRef.current.value;

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
        <div className={css.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div className={css.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' ref={nameInputRef} />
        </div>
      </div>
      <div className={css.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows='5' ref={commentInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button type="submit">Add comment</button>
    </form>
  );
}

import css from './comment-list.module.css';

export function CommentList() {
  return (
    <ul className={css.comments}>
      {/* Render list of comments - fetched from API */}
      
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>

      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>

    </ul>
  );
}

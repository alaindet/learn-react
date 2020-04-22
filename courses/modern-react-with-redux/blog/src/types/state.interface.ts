import Post from 'types/post.interface';
import User from 'types/user.interface';

export default interface State {
  posts: Post[];
  users: User[];
}

import React from 'react';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const comments = [
  {
    image: faker.image.avatar(),
    author: 'John Doe',
    text: 'Nice blog post!',
    timeAgo: 'Today at 6:06 PM',
  },
  {
    image: faker.image.avatar(),
    author: 'Jane Doe',
    text: 'Really well written article',
    timeAgo: 'Today at 3:03 AM',
  },
];

const Comments = () => {
  return (
    <div className="ui container comments">
      {comments.map((comment, index) => (
        <ApprovalCard key={index}>
          <CommentDetails
            image={comment.image}
            author={comment.author}
            text={comment.text}
            timeAgo={comment.timeAgo}
          />
        </ApprovalCard>
      ))}
    </div>
  );
};

export default Comments;

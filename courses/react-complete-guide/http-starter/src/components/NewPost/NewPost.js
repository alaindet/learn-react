import React, { useState } from 'react';

import { NewPostStyled, Label, Input, Textarea, Select } from './NewPost.style';
import Button from 'components/UI/Button/Button';

const AUTHORS = [
  { name: 'Alice' },
  { name: 'Bob' },
];

const NewPost = (props) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <NewPostStyled>
      <h1>Add a Post</h1>

      <Label>Title</Label>
      <Input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Label>Content</Label>
      <Textarea
        rows="4"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <Label>Author</Label>
      <Select
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      >
        {AUTHORS.map(author => (
          <option key={author.name} value={author.name}>{author.name}</option>
        ))}
      </Select>

      <Button type="submit" color="primary">
        Add Post
      </Button>

    </NewPostStyled>
  );
};

export default NewPost;

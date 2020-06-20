import React, { useState } from 'react';

import { NewPostStyled, Label, Input, Textarea, Select, Centered, DismissButton } from './NewPost.style';
import Button from 'components/UI/Button/Button';
import AUTHORS from 'data/authors';

const NewPost = (props) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  if (collapsed) {
    return (
      <Centered>
        <Button color="primary" onClick={() => setCollapsed(false)}>
          Add a new post
        </Button>
      </Centered>
    );
  }

  return (
    <NewPostStyled>
      <h1>Add a Post</h1>

      <DismissButton onClick={() => setCollapsed(true)}>
        &times;
      </DismissButton>

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

      <div style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
        <Button type="submit" color="primary">
          Add Post
        </Button>
      </div>

    </NewPostStyled>
  );
};

export default NewPost;

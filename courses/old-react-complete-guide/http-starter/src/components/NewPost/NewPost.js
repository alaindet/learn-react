import React, { useState } from 'react';
import axios from 'axios';

import { NewPostStyled, Label, Input, Textarea, Select, Centered, DismissButton } from './NewPost.style';
import Button from 'components/UI/Button/Button';
import AUTHORS from 'data/authors';

const NewPost = (props) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  const submitNewPost = async () => {
    const url = 'http://localhost:4242/posts';
    const data = {
      authorId: parseInt(authorId, 10),
      title,
      body,
    };
    const response = await axios.post(url, data);
    if (response.status === 200 || response.status === 201) {
      window.scrollTo(0, 0);
      setCollapsed(true);
      console.log('You created a new post');
    }
  };

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
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />

      <Label>Author</Label>
      <Select
        value={authorId}
        onChange={(event) => setAuthorId(event.target.value)}
      >
        {AUTHORS.map(author => (
          <option key={author.name} value={author.id}>{author.name}</option>
        ))}
      </Select>

      <div style={{
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
      }}>
        <Button color="primary" onClick={submitNewPost}>
          Add Post
        </Button>
      </div>

    </NewPostStyled>
  );
};

export default NewPost;

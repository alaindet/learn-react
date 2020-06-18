import React from 'react';

import { FullPostStyled, EditSection } from './FullPost.style';
import Button from 'components/UI/Button/Button';

const FullPost = (props) => {

    const post = <p>Please select a Post!</p>

    return (
        <FullPostStyled>
            <h1>Title</h1>
            {post}
            <EditSection>
                <Button type="button" color="secondary">Delete</Button>
            </EditSection>
        </FullPostStyled>
    );
};

export default FullPost;

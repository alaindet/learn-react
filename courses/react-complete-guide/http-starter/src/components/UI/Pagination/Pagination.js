import React from 'react';

import { Container, CurrentPage } from './Pagination.style.js';
import Button from 'components/UI/Button/Button';

const Pagination = (props) => {

  const isPrevDisabled = props.page === 1;
  const isNextDisabled = props.page === props.lastPage;

  return (
    <Container>

      <Button
        onClick={props.onPrev}
        disabled={isPrevDisabled}
      >
        Prev
      </Button>

      <CurrentPage>{props.page}</CurrentPage>

      <Button
        onClick={props.onNext}
        disabled={isNextDisabled}
      >
        Next
      </Button>

    </Container>
  );
};

export default Pagination;

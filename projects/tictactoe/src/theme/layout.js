import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 30rem;
  border-radius: 1rem;

  ${props => props.withShadow
    ? 'box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);'
    : ''
  }

  ${props => props.withPadding
    ? 'padding: 1rem;'
    : ''
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${props => props.maxWidth ? props.maxWidth : '60rem'};
  margin: 0 auto;
  border-radius: 0.5rem;
  ${props => !props.hasPadding ? '' : `
    padding: 1rem;
  `}
  ${props => !props.hasShadow ? '' : `
    box-shadow: 3px 3px 7px rgba(0,0,0,.2);
  `}
`;

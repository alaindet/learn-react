import styled from 'styled-components';

import theme from 'theme/variables';

export const FullPostStyled = styled.div`
  width: 80%;
  margin: 1.25rem auto;
  padding: 1rem;
  border: 1px solid ${theme.color.greyLight};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 7px ${theme.color.shadowLight};
  position: relative;
`;

export const EditSection = styled.div`

`;

export const PostBody = styled.div`
  
`;

export const DismissButton = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2 ease-out;

  &:hover {
    color: ${theme.color.orange};
  }
`;

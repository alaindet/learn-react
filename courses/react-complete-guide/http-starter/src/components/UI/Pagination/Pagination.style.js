import styled from 'styled-components';

import theme from 'theme/variables';

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 1rem;
  border-top: 2px solid ${theme.color.orange};
  width: 90%;
`;

export const CurrentPage = styled.span`
  margin: 0 1rem;
  width: 3.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.color.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`;

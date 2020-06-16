import styled from 'styled-components';

import theme from './../../../theme/theme';

export const BuildControlsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 0;
  border: 1px solid #ccc;
  border-bottom: 5px solid ${theme.color.yellow};
`;

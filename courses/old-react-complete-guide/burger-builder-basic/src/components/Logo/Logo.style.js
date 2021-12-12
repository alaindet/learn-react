import styled from 'styled-components';

export const LogoStyled = styled.div`
  background-color: white;
  padding: 0.5rem;
  height: ${props => props.height ? props.height : '80%'};
`;

export const LogoImage = styled.img`
  max-widht: 100%;
  max-height: 100%;
`;

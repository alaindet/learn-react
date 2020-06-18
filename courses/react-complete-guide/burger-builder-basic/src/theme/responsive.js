import styled from 'styled-components';

import theme from 'theme/theme';

export const Hide = styled.div`
  ${props => {
    const query = `${props.from}-${props.dir}`;
    switch (query) {
      case 'tablet-up':
        return `
          @media (min-width: ${theme.breakpoint.mobileToTablet}px) {
            display: none;
          }
        `;
    }
  }}
`;

export const Show = styled.div`
  ${props => {
    const _from = props.from ? props.from : 'tablet';
    const dir = props.dir ? props.dir : 'up';
    const display = props.display ? props.display : 'block';
    switch (`${_from}-${dir}`) {
      case 'tablet-up':
        return `
          display: none;
          @media (min-width: ${theme.breakpoint.mobileToTablet}px) {
            display: ${display};
          }
        `;
    }
  }}
`;

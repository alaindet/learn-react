import styled from 'styled-components';

export function withShadowHover(Component, boxShadow, options = {}) {

  boxShadow = boxShadow || 'box-shadow: 3px 3px 7px rgba(0, 0, 0, .3)';
  options.transitionDuration = options.transitionDuration || '0.2s';
  options.transitionTiming = options.transitionTiming || 'ease-in-out';
  options.persistShadowOnFocus = !!options.persistShadowOnFocus;

  return styled(Component)`
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: ' ';
      opacity: 0;
      transition: opacity ${options.transitionDuration} ${options.transitionTiming};
      ${boxShadow};
    }

    &:hover::before {
      opacity: 1;
    }

    ${!options.persistShadowOnFocus ? '' : `
      &:focus::before {
        opacity: 1
      }
    `}
  `;
}

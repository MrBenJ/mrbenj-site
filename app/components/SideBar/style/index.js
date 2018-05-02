// @flow
import { css } from 'emotion';

import { COLORS, BP } from '@app/style';

const DESKTOP_WIDTH = '30%';

export default css`
  height: 100%;
  width: 100%;
  background-color: ${COLORS.primary_accent};

  position: absolute;
  top: 0;
  left: -100%;

  transition: all .5s cubic-bezier(0.42, 0, 0.58, 1);

  .full { width: 100%; }

  .link-container {
    overflow: hidden;
  }

  &.open {
    left: 0;

    .toggle {
      color: ${COLORS.bright};
      right: 20px;
    }
  }

  .toggle {
    font-size: 30px;
    position: absolute;
    right: -30px;

    top: 10px;
    transition: all .5s cubic-bezier(0.42, 0, 0.58, 1);
    cursor: pointer;
  }

  @media screen and (min-width: ${BP.MD}) {

    width: ${DESKTOP_WIDTH};
    left: -${DESKTOP_WIDTH};

  }

`;

// @flow
import { css } from 'emotion';

import { COLORS } from '@app/style';

export default css`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  padding-left: 2rem;



  font-size: 1rem;
  color: ${COLORS.bright};
  background-color: ${COLORS.dark};
  text-decoration: none;

  &:hover, &.active {
    background-color: ${COLORS.dark_accent};
  }


`;

// @flow
import { css } from 'emotion';

export default css`
  min-height: 90vh;
  width: 100%;
  position: relative;

  .centered-box {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

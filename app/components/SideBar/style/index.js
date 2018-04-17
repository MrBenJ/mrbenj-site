import { css } from 'emotion';

export default css`
  height: 100%;
  width: 30%;
  background-color: dodgerblue;

  position: absolute;
  top: 0;
  left: -30%;

  transition: all .5s cubic-bezier(0.42, 0, 0.58, 1);

  &.open {
    left: 0;

    .toggle {
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

`;

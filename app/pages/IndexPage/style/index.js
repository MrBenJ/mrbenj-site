// @flow
import { css } from 'emotion';

import { COLORS, BP } from '@app/style';
export default css`

  // background-image: linear-gradient(${COLORS.bright}, ${COLORS.dark_accent});

  .intro {
    margin-bottom: 1rem;
  }

  .pad {
    margin: 2rem 0;
    padding: 0 2rem;
  }

  .work {
    margin: 2rem 0;
  }

  .work-blurb, .main-paragraph {
    margin: 2rem auto;
    width: 75%;
  }

  .img {
    max-width: 300px;
  }

  @media screen and (min-width: ${BP.MD}) {

    .work-blurb, .main-paragraph {
      width: 50%;
    }
  }
`;

// @flow
import { css } from 'emotion';

import { BP } from '@app/style';
export default css`

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

  .work-blurb {
    margin: 2rem auto;
    width: 75%;
  }

  @media screen and (min-width: ${BP.MD}) {

    .work-blurb {
      width: 50%;
    }
  }
`;

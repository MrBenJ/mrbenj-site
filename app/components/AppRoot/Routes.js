// @flow
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import IndexPage from '@app/pages/IndexPage';
import ContactPage from '@app/pages/ContactPage';
import SpeakingPage from '@app/pages/SpeakingPage';
import BlogPage from '@app/pages/BlogPage';

export default function Routes(): Fragment {
  return (
    <Fragment>
      <Route exact path="/" component={IndexPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/speaking" component={SpeakingPage} />
      <Route path="/blog" component={BlogPage} />
    </Fragment>
  );
}

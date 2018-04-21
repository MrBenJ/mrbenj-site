// @flow
import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import Routes from './Routes';
import FullscreenLayout from '@app/components/FullscreenLayout';
import SideBar from '@app/components/SideBar';

export default function AppRoot() {
  return (
    <div className="approot">
      <HashRouter>
        <FullscreenLayout>
          <SideBar />
          <Switch>
            <Routes />
          </Switch>
        </FullscreenLayout>
      </HashRouter>
    </div>
  );
}

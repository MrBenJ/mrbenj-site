// @flow
import React from 'react';

import FullscreenLayout from '@app/components/FullscreenLayout';
import SideBar from '@app/components/SideBar';

export default function AppRoot() {
  return (
    <div className="approot">
      <FullscreenLayout>
        <SideBar />
      </FullscreenLayout>
    </div>
  );
}

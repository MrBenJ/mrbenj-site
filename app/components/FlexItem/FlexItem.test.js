// @flow
import React from 'react';
import { shallow } from 'enzyme';

import FlexItem from './FlexItem';

describe('<FlexItem> tests', () => {
  const renderShallow = props => shallow(<FlexItem {...props} />);
  const children = <p>hello</p>;

  it('Renders without crashing', () => {
    const wrapper = renderShallow({ children });

    expect(wrapper).toBeTruthy();
  });
});

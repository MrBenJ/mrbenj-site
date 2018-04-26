// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('<Image> tests', () => {
  const renderShallow = props => shallow(<Image {...props} />);

  it('Renders without crashing', () => {
    const wrapper = renderShallow({
      src:"https://placehold.it/300x300"
    });

    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('Renders a round class element', () => {
    const wrapper = renderShallow({
      src:"whatever",
      circle: true
    });

    expect(wrapper.find('.circle')).toHaveLength(1);
  });

});

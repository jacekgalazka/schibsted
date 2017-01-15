/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Test } from './Test';

describe('Test', () => {
  it('should render itself ', () => {
    const wrapper = shallow(<Test />);
    expect(wrapper.find('.testObjec')).to.have.length(1);
  });
});

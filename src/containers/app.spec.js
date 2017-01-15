/* eslint-env mocha */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { App } from './app';
import { Tabs } from './../components/tabs/Tabs';

const props = {
  fetchData() {},
};

describe('App: ', () => {
  it('should render itself ', () => {
    const wrapper = mount(<App {...props} />);
    expect(wrapper.find(Tabs)).to.have.length(1);
  });
});

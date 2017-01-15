/* eslint-env mocha */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import { Tabs } from './Tabs';


describe('Tabs: ', () => {
  it('should render itself ', () => {
    const wrapper = shallow(<Tabs>
      <div label="test1">1</div>
      <div label="test2">2</div>
    </Tabs>);

    expect(wrapper.find('.tabs')).to.have.length(1);
    expect(wrapper.find('.tabs-labels')).to.have.length(1);
  });

  it('should render one tab  ', () => {
    const wrapper = shallow(<Tabs>
      <div className="singleTab" label="test1">1</div>
      <div className="singleTab" label="test2">2</div>
    </Tabs>);

    expect(wrapper.find('.singleTab')).to.have.length(1);
  });

  it('should show second tab and hide first tab afterchange state', () => {
    const wrapper = mount(<Tabs>
      <div className="firstTab" label="test1">1</div>
      <div className="secondTab" label="test2">2</div>
    </Tabs>);

    expect(wrapper.find('.firstTab')).to.have.length(1);
    expect(wrapper.find('.secondTab')).to.have.length(0);

    wrapper.setState({ selected: 1 });

    expect(wrapper.find('.firstTab')).to.have.length(0);

    expect(wrapper.find('.secondTab')).to.have.length(1);
  });
});


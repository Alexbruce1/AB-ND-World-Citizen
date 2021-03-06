import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  })

  it('should exist', () => {
    
    expect(wrapper).toBeDefined();
  })

    it("should have a default empty state", () => {
    expect(wrapper.state()).toEqual({});
  });

});

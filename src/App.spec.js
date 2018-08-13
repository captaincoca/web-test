import React from 'react';
import ReactDOM from 'react-dom';

import jasmineEnzyme from 'jasmine-enzyme';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

configure({ adapter: new Adapter() });

beforeEach(function() {
  jasmineEnzyme();
});

describe('Root test', function() {
  
  const wrapper = shallow(<App />);
  it('should be created', () =>  {
    expect(wrapper).toBeTruthy();
  });

  it('should have correct title', () =>  {
    expect(wrapper.find('h1').first().text()).toBe("Hello World App");
  });
});
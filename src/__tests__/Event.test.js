import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from "../mock-data";

describe('<Event /> component', () => {

  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event/>);
  });

  test('test that componet is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('test that event wrapping div just shows event__Overview', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

  test('test that eventOverview is rendered', () => {
    expect(EventWrapper.find('.eventOverview')).toHaveLength(1);
  });

  test('test that eventOverview children are rendered', () => {
    expect(EventWrapper.find('.eventOverview').children()).toHaveLength(1);
  });

  test('test that eventDetails children are rendered', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.eventDetailsDescription')).toHaveLength(1);
  });

  test('test that show/hide details button is rendered', () => {
    expect(EventWrapper.find('.detailsBtn')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.detailsBtn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('click on button should hide details', () => {
    EventWrapper.setState({
      showDetails: true
    });
    EventWrapper.find('.detailsBtn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });
})
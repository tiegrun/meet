import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
// import { mockData } from "../mock-data";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
  });

  test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });
  
  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('eventCount');
    expect(NumberOfEventsWrapper.find('#numberOfEventsInput').prop('value')).toBe(numberOfEvents);
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 30 }};
    NumberOfEventsWrapper.find('#numberOfEventsInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(30);
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 24 }};
    NumberOfEventsWrapper.find('#numberOfEventsInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCount')).toBe(24);
  });

  test('show number of events input label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(1);
  });
});

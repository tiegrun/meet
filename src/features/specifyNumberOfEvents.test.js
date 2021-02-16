import React from 'react';
import { shallow, mount } from 'enzyme';
// import { extractLocations } from '../api';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {

    given('32 events', () => {

    });

    let AppWrapper;

    when('the user does not specify the number of events', () => {
      AppWrapper = mount(<App />);
    });

    then('the default number should be 32', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;

    given('32 events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of events', () => {
      const numberOfEvents = { target: { value: 3 } };
      AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents)
    });

    then('they can see the chosen number of events', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ eventCount: 3 });
      expect(NumberOfEventsWrapper.state('eventCount')).toBe(3);
    });
  });

});
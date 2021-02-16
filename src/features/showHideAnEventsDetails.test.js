import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {

    let AppWrapper;

    given('a list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user sees the events, but not details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('events should be collapsed by default', () => {
      expect(AppWrapper.find('showDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {

    let AppWrapper;

    given('a list of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the event is clicked by the user', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      AppWrapper.find('.event .detailsBtn').at(0).simulate('click')
    });

    then('that should be expanded and the user can see the details', () => {
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {

    let AppWrapper;

    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('event element is expanded and shows details', () => {
      AppWrapper.update();
      AppWrapper.find('.event .detailsBtn').at(0).simulate('click');
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1);
    });

    when('the user clicks to hide details', () => {
      AppWrapper.find('.event .detailsBtn').at(0).simulate('click');
    });

    then('the event should be collapsed', () => {
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(0);
    });

  });
});
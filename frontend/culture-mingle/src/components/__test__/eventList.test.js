import React from 'react';
import { render, screen } from '@testing-library/react';
import EventList from '../EventList/index';

// Mock the events data
const events = [
  { id: 1, name: 'event 1' },
  { id: 2, name: 'event 2' },
  { id: 3, name: 'event 3' }
];

describe('eventList', () => {
  test('renders a list of events', () => {
    render(<EventList events={events} />);

    // Assert that each event in the list is rendered
    events.forEach(event => {
      const eventElement = screen.getByText(event.name);
      expect(eventElement).toBeInTheDocument();
    });
  });

});

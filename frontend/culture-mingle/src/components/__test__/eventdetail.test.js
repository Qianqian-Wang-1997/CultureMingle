import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import EventDetail from '../EventDetail';

jest.mock('axios');

describe('EventDetail', () => {
  const eventData = {
    time: '2023-05-01T14:00:00Z',
    title: 'Test Event',
    description: 'This is a test event description.',
    group: '1',
    venue: 'Test Venue',
  };

  const groupData = {
    groupName: 'Test Group',
  };

  beforeEach(() => {
    // // setup a DOM element as a render target
    // container = document.createElement("div");
    // document.body.appendChild(container);
    axios.get.mockResolvedValueOnce({ data: eventData })
      .mockResolvedValueOnce({ data: groupData });
  });

  afterEach(() => {
    // // cleanup on exiting
    // unmountComponentAtNode(container);
    // container.remove( );
    // container = null;
    jest.resetAllMocks();
  });

  test('displays event details correctly', async () => {
    const { getByText } = render(<EventDetail />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

    //expect(getByText('May 1, 2023, 2:00 PM')).toBeInTheDocument();
    expect(getByText('Test Event')).toBeInTheDocument();
    expect(getByText('This is a test event description.')).toBeInTheDocument();
    expect(getByText('Test Venue')).toBeInTheDocument();
    expect(getByText('Test Group')).toBeInTheDocument();
  });

  test('shows join modal when join button is clicked', async () => {
    const { getByText, getByRole } = render(<EventDetail />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

    fireEvent.click(getByText('Join'));

    expect(getByText('Are you sure to join in this event?')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Yes' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  test('shows share modal when share button is clicked', async () => {
    const { getByText, getByRole } = render(<EventDetail />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

    fireEvent.click(getByText('Share'));

    expect(getByText('Share with your friends!')).toBeInTheDocument();
    expect(getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Facebook' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Instagram' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Slack' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });
});

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};
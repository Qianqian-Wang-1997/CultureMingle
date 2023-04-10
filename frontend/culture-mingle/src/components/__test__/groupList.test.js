import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupList from '../GroupList/index';

// Mock the groups data
const groups = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  { id: 3, name: 'Group 3' }
];

describe('GroupList', () => {
  test('renders a list of groups', () => {
    render(<GroupList groups={groups} />);

    // Assert that each group in the list is rendered
    groups.forEach(group => {
      const groupElement = screen.getByText(group.name);
      expect(groupElement).toBeInTheDocument();
    });
  });

});

import React from 'react';
import { render } from '@testing-library/react';
import Bangazon from './Bangazon';

test('renders learn react link', () => {
  const { getByText } = render(<Bangazon />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

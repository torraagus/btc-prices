import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Currencies from '../Currencies';

test('select currency', () => {
  const { getByTestId } = render(<Currencies />);
  const linkElement = getByTestId('btn-1');
  expect(linkElement).toBeInTheDocument();
});
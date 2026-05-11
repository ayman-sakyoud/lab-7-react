import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('affiche le message correct', () => {
  render(<Greeting name="Ayman" />);
  expect(screen.getByText('Bonjourr, Ayman')).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';

import { Home } from './Home';

describe('Home Component', () => {
  it('should render the home component', () => {
    render(<Home />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});

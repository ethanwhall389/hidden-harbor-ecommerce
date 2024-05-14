import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavigationLink from '../elements/NavigationLink';
import { describe, expect, it } from 'vitest';

describe('Navigation Link Component', () => {
  it('renders correct text', () => {
    render(
      <BrowserRouter>
        <NavigationLink text={'testtext'} link={'testlink'} />
      </BrowserRouter>
    );
    expect(screen.getByRole('link').textContent).toMatch(/testtext/i);
  });
});

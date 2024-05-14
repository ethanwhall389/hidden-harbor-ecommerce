import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '../elements/Button';

describe('Button component', () => {
  it('Renders correct text', () => {
    render(
      <BrowserRouter>
        <Button text={'test'} link={'testlink'} />
      </BrowserRouter>
    );
    const button = screen.getByRole('button');
    expect(button.textContent).toMatch(/test/i);
  });
});

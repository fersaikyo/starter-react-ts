import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { vi, describe, it, expect } from 'vitest';

vi.mock('./styledComponents', () => ({
  ButtonSC: (props: any) => {
    const { children, $size, $variant, $disabled, onClick } = props;
    return React.createElement(
      'button',
      {
        onClick,
        'data-testid': 'button',
        disabled: $disabled,
        '$size': $size,
        '$variant': $variant,
        '$disabled': $disabled,
      },
      children
    );
  },
}));

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button label="Click me" />);
    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

});

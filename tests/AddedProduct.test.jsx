import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import AddedProducts from '../src/components/AddedProducts.jsx';

describe('AddedProducts Component', () => {
  const mockProduct = {
    quantity: 2,
    product: {
      image: 'https://via.placeholder.com/150',
      title: 'Test Laptop',
      price: 999,
    },
  };

  const mockOnRemove = vi.fn();
  const mockOnUpdate = vi.fn();

  it('renders product details correctly', () => {
    render(
      <AddedProducts 
        product={mockProduct} 
        onRemove={mockOnRemove} 
        onUpdate={mockOnUpdate} 
      />
    );

    expect(screen.getByRole('img')).toHaveAttribute('src', mockProduct.product.image);
    expect(screen.getByText('999$')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('quantity')).toHaveValue('2');
  });

  it('calls onUpdate with incremented value when + is clicked', async () => {
    const user = userEvent.setup();
    render(
      <AddedProducts 
        product={mockProduct} 
        onRemove={mockOnRemove} 
        onUpdate={mockOnUpdate} 
      />
    );

    const plusButton = screen.getByText('+');
    await user.click(plusButton);

    expect(mockOnUpdate).toHaveBeenCalledWith(mockProduct, 3);
  });

  it('calls onUpdate with decremented value when - is clicked', async () => {
    const user = userEvent.setup();
    render(
      <AddedProducts 
        product={mockProduct} 
        onRemove={mockOnRemove} 
        onUpdate={mockOnUpdate} 
      />
    );

    const minusButton = screen.getByText('-');
    await user.click(minusButton);

    expect(mockOnUpdate).toHaveBeenCalledWith(mockProduct, 1);
  });

  it('calls onRemove when the "remove from cart" button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <AddedProducts 
        product={mockProduct} 
        onRemove={mockOnRemove} 
        onUpdate={mockOnUpdate} 
      />
    );

    const removeButton = screen.getByRole('button', { name: /remove from cart/i });
    await user.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledWith(mockProduct);
  });

  it('calls onUpdate when the quantity input is changed', async () => {
    const user = userEvent.setup();
    render(
      <AddedProducts 
        product={mockProduct} 
        onRemove={mockOnRemove} 
        onUpdate={mockOnUpdate} 
      />
    );

    const input = screen.getByPlaceholderText('quantity');
    await user.type(input, '5');

    expect(mockOnUpdate).toHaveBeenCalledWith(mockProduct, 25);
  });
});

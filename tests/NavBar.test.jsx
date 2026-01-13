import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router"; 
import NavBar from "../src/components/NavBar.jsx"; 

describe("NavBar Component", () => {
  const renderWithRouter = (props) => {
    return render(
      <MemoryRouter>
        <NavBar {...props} />
      </MemoryRouter>
    );
  };

  it("renders all navigation links", () => {
    renderWithRouter({ ItemCount: 0 });

    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Shopping Page/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart Page/i)).toBeInTheDocument();
  });

  it("displays the correct item count when greater than 0", () => {
    renderWithRouter({ ItemCount: 5 });

    const countElement = screen.getByText("5");
    expect(countElement).toBeInTheDocument();
    expect(countElement).toHaveClass("itemCount");
  });

  it("does not display the item count when it is 0", () => {
    renderWithRouter({ ItemCount: 0 });

    const countElement = screen.queryByText("0");
    expect(countElement).not.toBeInTheDocument();
  });

  it("links have correct 'to' attributes", () => {
    renderWithRouter({ ItemCount: 0 });

    expect(screen.getByText(/Home Page/i).closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText(/Shopping Page/i).closest('a')).toHaveAttribute('href', '/ShopPage');
    expect(screen.getByText(/Cart Page/i).closest('a')).toHaveAttribute('href', '/CartPage');
  });
});

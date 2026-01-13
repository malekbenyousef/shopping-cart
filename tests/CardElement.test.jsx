import { render, screen } from "@testing-library/react";
import { expect, vi, it, describe } from "vitest";
import CardElement from "../src/components/CardElement.jsx";
import userEvent from "@testing-library/user-event";

const mockProduct = {
    title: "Premium Widget",
    price: 99,
    image: "widget.jpg"
};

describe("CardElement Component", () => {

    it("renders product price and initial quantity", () => {
        render(<CardElement product={mockProduct} AddToCart={vi.fn()} />);

        expect(screen.getByText("99$")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("quantity").value).toBe("0");
    });

    it("increment button increases quantity value", async() => {
        const user = userEvent.setup();
        render(<CardElement product={mockProduct} AddToCart={vi.fn()} />);
        const plusButton = screen.getByRole("button",{name: "+"});
        const input = screen.getByPlaceholderText("quantity");
        await user.click(plusButton)

        expect(input.value).toBe("1");
    });

    it("decrement button stops at zero (no negative numbers)", async() => {
        const user = userEvent.setup();
        render(<CardElement product={mockProduct} AddToCart={vi.fn()} />);
        const minusButton = screen.getByRole("button",{name: "-"});
        const input = screen.getByPlaceholderText("quantity");
        await user.click(minusButton)
        expect(input.value).toBe("0");
    });

    it("manual input updates state and handles empty strings", async () => {
        const user = userEvent.setup();
        render(<CardElement product={mockProduct} AddToCart={vi.fn()} />);
        const input = screen.getByPlaceholderText("quantity");
        await user.type(input, "10")

        expect(input.value).toBe("10");
        await user.keyboard("{backspace>2}")
        expect(input.value).toBe("0"); 
    });

    it("Add to cart button calls callback with correct data", async () => {
        const user= userEvent.setup();
        const mockAddToCart = vi.fn();
        render(<CardElement product={mockProduct} AddToCart={mockAddToCart} />);

        const plusButton = screen.getByRole("button",{name: "+"})
        const buyButton = screen.getByRole("button",{name: "Add to cart"})
        await user.click(plusButton)
        await user.click(buyButton)

            expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 1);
    });
});

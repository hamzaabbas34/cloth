import React, { createContext, useContext, useState, useEffect } from "react";
import data from "../data.json";

// Create the context
const CartContext = createContext();

// Custom hook to use the Cart context
const useCart = () => {
	return useContext(CartContext);
};

// Create the provider component
export default function CartProvider({ children }) {
	// Declare stateful values
	const [myarr, setMyarr] = useState([]);
	const [cartItems, setCartItems] = useState(() => {
		// Retrieve cartItems from localStorage and parse it, or start with an empty array
		return JSON.parse(localStorage.getItem("cartItems")) || [];
	});
	const [totalPrice, setTotalPrice] = useState(0);

	const [order, setOrder] = useState(() => {
		// Try to retrieve the existing order from localStorage or return an empty string
		return localStorage.getItem("order") || "";
	});

	useEffect(() => {
		if (!order) {
			function generateRandomString() {
				const letters = "abcdefghijklmnopqrstuvwxyz".split("");
				const numbers = Array.from({ length: 10 }, (_, i) =>
					(i + 1).toString()
				);
				const pool = [...letters, ...numbers];

				let randomString = "";
				for (let i = 0; i < 10; i++) {
					const randomIndex = Math.floor(Math.random() * pool.length);
					randomString += pool[randomIndex];
				}

				return randomString;
			}

			const newOrder = generateRandomString();
			setOrder(newOrder);
			localStorage.setItem("order", newOrder); // Save the new order in localStorage
		}
	}, [order]);

	// Recalculate the total price whenever cartItems change
	useEffect(() => {
		const newTotalPrice = cartItems.reduce(
			(total, item) => total + item.price_final * item.quantity,
			0
		);
		setTotalPrice(newTotalPrice);

		// Save updated cartItems to localStorage whenever it changes
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	function addToCart(id, quantity, size) {
		// Find if the item already exists in the cart
		const existingItem = cartItems.find((item) => item.id === id);

		if (existingItem) {
			// Update quantity and size if the item already exists
			const updatedItems = cartItems.map((item) =>
				item.id === id ? { ...item, quantity: +quantity, size: size } : item
			);
			setCartItems(updatedItems);
		} else {
			// Add the new item to the cart
			const newItem = data.find((dt) => dt.id === parseInt(id));
			if (newItem) {
				setCartItems([
					...cartItems,
					{ ...newItem, quantity: +quantity, size: size },
				]);
			}
		}
	}

	function incrementQuantity(id) {
		const updatedItems = cartItems.map((item) =>
			item.id === id ? { ...item, quantity: item.quantity + 1 } : item
		);
		setCartItems(updatedItems);
	}

	function decrementQuantity(id) {
		const updatedItems = cartItems
			.map((item) =>
				item.id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
			.filter((item) => item.quantity > 0); // Remove items with quantity 0

		setCartItems(updatedItems);
	}

	function removeFromCart(id) {
		// Filter out the item with the given id
		const updatedItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedItems);
	}

	function recentViewId(id) {
		if (!myarr.includes(id)) {
			const updatedArr = [...myarr, id];
			if (updatedArr.length > 4) {
				updatedArr.shift(); // Remove the oldest item if the length exceeds 4
			}
			setMyarr(updatedArr); // Update the state
		}
	}

	return (
		<CartContext.Provider
			value={{
				recentViewId,
				myarr,
				addToCart,
				cartItems,
				totalPrice,
				incrementQuantity,
				decrementQuantity,
				removeFromCart,
				order,
				setOrder,
			}}>
			{children}
		</CartContext.Provider>
	);
}

export { useCart, CartContext };

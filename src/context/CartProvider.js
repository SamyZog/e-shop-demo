import { createContext, useContext, useEffect, useState } from "react";
import { isInLs, updateLs } from "../utils/localStorage";

const cartContext = createContext();
const { Provider: Cart } = cartContext;

function CartProvider(props) {
	const [cartItems, setCartItems] = useState([]);

	const clearCart = () => {
		setCartItems([]);
	};

	const deleteItemFromCart = (item) => {
		setCartItems((state) => state.filter((el) => el.id !== item.id));
	};

	const addItem = (item) => {
		const isInCart = cartItems.find((el) => el.id === item.id);
		if (isInCart) {
			isInCart.qty = (isInCart.qty || 0) + 1;
			setCartItems((state) => [...state]);
			return;
		}
		const copy = { ...item };
		copy.qty = 1;
		setCartItems((state) => {
			return [...state, copy];
		});
	};

	const removeItem = (item) => {
		const isInCart = cartItems.find((el) => el.id === item.id);
		isInCart.qty = (isInCart.qty || 0) - 1;
		if (isInCart.qty === 0) {
			deleteItemFromCart(item);
			return;
		}
		setCartItems((state) => [...state]);
	};

	useEffect(() => {
		const resFromLs = isInLs("cartitems");
		resFromLs && setCartItems(resFromLs);
	}, []);

	useEffect(() => {
		updateLs("cartitems", "", cartItems);
	}, [cartItems]);

	const value = {
		cartItems,
		setCartItems,
		addItem,
		removeItem,
		deleteItemFromCart,
		clearCart,
		get cartIndicator() {
			return cartItems.reduce((acc, val) => {
				return acc + val.qty;
			}, 0);
		},
	};

	return <Cart value={value}>{props.children}</Cart>;
}

const useCart = () => useContext(cartContext);

export { useCart };
export default CartProvider;

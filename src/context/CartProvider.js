import { createContext, useContext, useState } from "react";

const cartContext = createContext();
const { Provider: Cart } = cartContext;

function CartProvider(props) {
	const [products, setProducts] = useState([]);

	const addProduct = (product) => {
		product.qty = (product.qty || 0) + 1;
		setProducts((state) => {
			return [...new Set([...state, product])];
		});
	};

	const removeProduct = () => {};

	const value = {
		products,
		addProduct,
		removeProduct,
		get cartIndicator() {
			return [...products].reduce((acc, val) => {
				return acc + val.qty;
			}, 0);
		},
	};

	return <Cart value={value}>{props.children}</Cart>;
}

const useCart = () => useContext(cartContext);

export { useCart };
export default CartProvider;

import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();
const { Provider: Cart } = cartContext;

function CartProvider(props) {
	const [products, setProducts] = useState([]);
	const [totalQty, setTotalQty] = useState(0);
	const [total, setTotal] = useState(0);

	const getItemById = (product) => {
		// check to see if the item already exists inside the state array
		return products.find((el) => el.id === product.id);
	};

	useEffect(() => {
		const cachedCart = localStorage.getItem("shopito-cart");
		if (cachedCart) {
			const cachedObject = JSON.parse(cachedCart);
			setProducts(cachedObject);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("shopito-cart", JSON.stringify(products));
	}, [products]);

	const deleteItem = (product) => {
		// if the qty is 0, we delete the item from the state array
		setProducts((state) => {
			return state.filter((el) => el.id !== product.id);
		});
	};

	const clearCart = () => {
		setProducts([]);
	};

	const setManualQty = (product, qty) => {
		// works with items that are already inside the cart
		const item = getItemById(product);
		item.qty = qty;
		// intentional re-render so the indicator updates
		setProducts([...products]);
	};

	const addItem = (product) => {
		const isFound = getItemById(product);
		if (isFound) {
			// if the item exists we just update it's qty
			isFound.qty += 1;
			// intentional re-render so the indicator updates
			setProducts([...products]);
		} else {
			// if the item does not exist, we copy it, add the initial qty and push it to the products array
			const copy = { ...product };
			copy.qty = 1;
			setProducts((state) => {
				return [...state, copy];
			});
		}
	};

	const removeItem = (product) => {
		const isFound = getItemById(product);
		if (isFound) {
			// if the item exists we just update it's qty
			isFound.qty -= 1;
			if (isFound.qty === 0) {
				deleteItem(isFound);
			} else {
				// intentional re-render so the indicator updates
				setProducts([...products]);
			}
		}
	};

	const value = {
		total,
		products,
		getItemById,
		deleteItem,
		addItem,
		removeItem,
		setManualQty,
		clearCart,
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

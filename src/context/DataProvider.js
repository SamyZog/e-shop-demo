import { createContext, memo, useContext } from "react";

const data = {
	appname: "Shopito",
	text: {
		about: "about",
		contact: "contact",
		currency: "$",
	},
	placeholders: {
		search: "search...",
		addbutton: "add to cart",
		addmore: "in cart",
	},
	titles: {
		search: "search",
		light: "light",
		dark: "dark",
	},
	links: {
		home: "/e-shop-demo",
		cart: "/cart",
		favorites: "/favorites",
		product: "/product",
		category: "/category",
		checkout: "/checkout",
		about: "/about",
		contact: "/contact",
	},
};

const dataContext = createContext();
const { Provider: Data } = dataContext;

function DataProvider(props) {
	return <Data value={data}>{props.children}</Data>;
}

const useData = () => useContext(dataContext);

export { useData };
export default memo(DataProvider);

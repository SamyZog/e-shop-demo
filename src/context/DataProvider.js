import { createContext, memo, useContext } from "react";

const data = {
	appname: "Shopito",
	text: {
		about: "about",
		contact: "contact",
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
		home: "/",
		cart: "/cart",
		favorites: "/favorites",
		product: "/product",
		category: "/category",
		checkout: "/checkout",
		about: "/about",
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

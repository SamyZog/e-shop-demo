import { createContext, useContext } from "react";

const data = {
	appname: "Shopito",
	placeholders: {
		search: "Search...",
		addbutton: "Add to cart",
		addmore: "In cart",
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
		product: "/product/:slug",
	},
};

const dataContext = createContext();
const { Provider: Data } = dataContext;

function DataProvider(props) {
	return <Data value={data}>{props.children}</Data>;
}

const useData = () => useContext(dataContext);

export { useData };
export default DataProvider;

import { createContext, useContext } from "react";

const favoriteContext = createContext();
const { Provider: Favorite } = favoriteContext;

function FavoriteProvider(props) {
	const favoritesArray = [];

	const addFavorite = () => {};

	const removeFavorite = () => {};

	const value = {
		favoritesArray,
		addFavorite,
		removeFavorite,
		favoriteIndicator: favoritesArray.length,
	};

	return <Favorite value={value}>{props.children}</Favorite>;
}

const useFavorite = () => useContext(favoriteContext);

export { useFavorite };
export default FavoriteProvider;

import { createContext, useContext, useEffect, useState } from "react";
import { isInLs, updateLs } from "../utils/localStorage";

const favoriteContext = createContext();
const { Provider: Favorite } = favoriteContext;

function FavoriteProvider(props) {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const resFromLs = isInLs("favorites");
		resFromLs && setFavorites(resFromLs);
	}, []);

	useEffect(() => {
		updateLs("favorites", "", favorites);
	}, [favorites]);

	const handleFavorites = (liked, product) => {
		if (liked) {
			setFavorites((state) => {
				const filteredState = state.filter((el) => el.id !== product.id);
				return filteredState;
			});
		} else {
			setFavorites((state) => {
				return [...state, product];
			});
		}
	};

	const value = {
		favorites,
		handleFavorites,
		favoriteIndicator: favorites.length,
	};

	return <Favorite value={value}>{props.children}</Favorite>;
}

const useFavorite = () => useContext(favoriteContext);

export { useFavorite };
export default FavoriteProvider;

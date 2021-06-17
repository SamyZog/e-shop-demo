import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Fav } from "../../assets/icons/fav.svg";
import { useData } from "../../context/DataProvider";
import { useFavorite } from "../../context/FavoriteProvider";
import Indicator from "../Indicator/Indicator";
import styles from "./Favorite.module.scss";

function Favorite(props) {
	const data = useData();

	const { favoriteIndicator } = useFavorite();

	return (
		<div className={styles.Favorite}>
			<Link to={data.links.favorites}>
				<Fav />
				<Indicator length={favoriteIndicator} />
			</Link>
		</div>
	);
}

export default Favorite;

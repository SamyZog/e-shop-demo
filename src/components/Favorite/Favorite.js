import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { useData } from "../../context/DataProvider";
import { useFavorite } from "../../context/FavoriteProvider";
import Indicator from "../Indicator/Indicator";
import styles from "./Favorite.module.scss";

function Favorite(props) {
	const { favoriteIndicator } = useFavorite();
	const data = useData();

	return (
		<div className={styles.Favorite}>
			<Link to={data.links.favorites}>
				<Star />
				<Indicator length={favoriteIndicator} />
			</Link>
		</div>
	);
}

export default Favorite;

import React, { useEffect, useState } from "react";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as EmptyStar } from "../../assets/icons/emptystar.svg";
import { ReactComponent as Remove } from "../../assets/icons/remove.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { useCart } from "../../context/CartProvider";
import { useFavorite } from "../../context/FavoriteProvider";
import styles from "./Button.module.scss";

function Button(props) {
	const { type, item, incart } = props;
	const { favorites, handleFavorites } = useFavorite();
	const { cartItems, addItem, removeItem } = useCart();
	const [liked, setLiked] = useState(false);
	const [currentItem, setCurrentItem] = useState({});

	useEffect(() => {
		if (favorites.find((el) => el.id === item.id)) {
			setLiked(true);
		}
	}, []);

	useEffect(() => {
		setCurrentItem(cartItems.find((el) => el.id === item.id));
	}, [cartItems]);

	const handleLike = () => {
		setLiked((state) => !state);
		handleFavorites(liked, item);
	};

	const handleAddItem = () => {
		addItem(item);
	};

	const handleRemoveItem = () => {
		removeItem(item);
	};

	return (
		<>
			{type === "add" && (
				<button className={styles.AddButton} onClick={handleAddItem}>
					{incart ? <Add /> : (currentItem && currentItem.qty) || <Add />}
				</button>
			)}
			{!currentItem || !currentItem.qty
				? null
				: type === "remove" && (
						<button className={styles.RemoveButton} onClick={handleRemoveItem}>
							<Remove />
						</button>
				  )}
			{type === "clearcart" && <button className={styles.ClearButton}>{props.children}</button>}
			{type === "favorite" && (
				<button className={styles.FavoriteButton} onClick={handleLike}>
					{liked ? <Star /> : <EmptyStar />}
				</button>
			)}
		</>
	);
}

export default Button;

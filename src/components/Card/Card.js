import React from "react";
import AddButton from "../AddButton/AddButton";
import styles from "./Card.module.scss";

function Card(props) {
	const { product } = props;
	const { title, image, price, category, id } = product;

	return (
		<div className={styles.Card}>
			<img src={image} alt={title} />
			<h4>{title}</h4>
			<h3>{price}$</h3>
			<p>{category}</p>
			<div className={styles.cartActions}>
				<AddButton product={product} />
			</div>
		</div>
	);
}

export default Card;

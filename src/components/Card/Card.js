import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import Button from "../Button/Button";
import styles from "./Card.module.scss";

const Card = (props) => {
	const { preview } = props;
	const data = useData();
	const { id, title, price, category, image } = preview;

	return (
		<div className={styles.Card}>
			<img className={styles.Card__image} src={image} alt={title} />
			<hr className={styles.Card__divider} />
			<h2 className={styles.Card__title}>
				<Link to={`${data.links.product}/${id}`} title={title}>
					{title.slice(0, 20)}...
				</Link>
			</h2>
			<h3 className={styles.Card__category}>{category}</h3>
			<h2 className={styles.Card__price}>{`${price}${data.text.currency}`}</h2>
			<hr className={styles.Card__divider} />
			<div className={styles.Card__buttons}>
				<Button item={preview} type="favorite" />
				<Button item={preview} type="add" />
				<Button item={preview} type="remove">
					-1
				</Button>
			</div>
		</div>
	);
};

export default Card;

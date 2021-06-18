import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import Button from "../Button/Button";
import styles from "./CartItem.module.scss";

function CartItem(props) {
	const { item, qty, total, deleteItem } = props;
	const { image, title, category, price, id } = item;
	const data = useData();

	const handleItemDelete = () => {
		deleteItem(item);
	};

	return (
		<div className={styles.CartItem}>
			<img className={styles.CartItem__image} src={image} alt={title} />
			<h3 className={styles.CartItem__title}>
				<Link to={`${data.links.product}/${id}`} title={title}>
					{title.slice(0, 20)}...
				</Link>
			</h3>
			<h4 className={styles.CartItem__category}>
				<Link to={`${data.links.category}/${category}`}>{category}</Link>
			</h4>
			<h3 className={styles.CartItem__price}>{`${price}${data.text.currency}`}</h3>
			<h3 className={styles.CartItem__qty}>{qty}</h3>
			<h3 className={styles.CartItem__total}>{total.toFixed(2)}$</h3>
			<button className={styles.CartItem__clearItemButton} onClick={handleItemDelete}>
				Delete Item
			</button>
			<div className={styles.CartItem__buttons}>
				<Button item={item} type="favorite" />
				<Button item={item} type="add" incart />
				<Button item={item} type="remove">
					-1
				</Button>
			</div>
		</div>
	);
}

export default CartItem;

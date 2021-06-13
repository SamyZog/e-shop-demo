import React from "react";
import { useCart } from "../../context/CartProvider";
import { useData } from "../../context/DataProvider";
import styles from "./AddButton.module.scss";

function AddButton(props) {
	const data = useData();
	const { product } = props;
	const { addProduct } = useCart();

	return (
		<button className={styles.AddButton} onClick={addProduct.bind(null, product)}>
			{product.qty === undefined ? data.placeholders.addbutton : `${data.placeholders.addmore} ${product.qty}`}
		</button>
	);
}

export default AddButton;

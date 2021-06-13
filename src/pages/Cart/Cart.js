import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Cart.module.scss";

function Cart(props) {
	const params = useParams();
	console.log(params);

	return (
		<div className={styles.Cart}>
			<h1>CART</h1>
		</div>
	);
}

export default Cart;

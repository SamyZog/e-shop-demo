import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingCart } from "../../assets/icons/cart.svg";
import { useCart } from "../../context/CartProvider";
import { useData } from "../../context/DataProvider";
import Indicator from "../Indicator/Indicator";
import styles from "./Cart.module.scss";

function Cart(props) {
	const { cartIndicator } = useCart();
	const data = useData();

	return (
		<div className={styles.Cart}>
			<Link to={data.links.cart}>
				<ShoppingCart />
				<Indicator length={cartIndicator} />
			</Link>
		</div>
	);
}

export default Cart;

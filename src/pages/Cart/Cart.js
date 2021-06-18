import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import PageBanner from "../../components/PageBanner/PageBanner";
import { useCart } from "../../context/CartProvider";
import { useData } from "../../context/DataProvider";
import styles from "./Cart.module.scss";

function Cart(props) {
	const data = useData();
	const { cartItems, deleteItemFromCart, clearCart } = useCart();

	return (
		<>
			{cartItems.length > 0 ? (
				<>
					<section className={styles.Cart}>
						<PageBanner>CART</PageBanner>
						<div className={styles.Cart__container}>
							<div className={styles.Cart__items}>
								<ul className={styles.Cart__list}>
									{cartItems.map((item) => {
										const currentItem = cartItems.find((el) => el.id === item.id);
										return (
											<li key={item.id} className={styles.Cart__listItem}>
												<CartItem
													item={item}
													qty={currentItem.qty}
													total={currentItem.total}
													deleteItem={deleteItemFromCart}
												/>
											</li>
										);
									})}
								</ul>
							</div>
							<aside style={{ padding: "0 var(--p-l)" }}>
								<div className={styles.Cart__info}>
									<div className={styles.Cart__totals}>
										<h2>Total Quantity:</h2>
										<h2>
											{cartItems.length &&
												cartItems.reduce((acc, val) => {
													return acc + val.qty;
												}, 0)}
										</h2>
										<h2>Total Price:</h2>
										<h2>
											{cartItems.length &&
												cartItems
													.reduce((acc, val) => {
														return acc + val.total;
													}, 0)
													.toFixed(2)}
											$
										</h2>
									</div>
									<Link to={`${data.links.checkout}`} className={styles.Cart__checkout}>
										CHECKOUT
									</Link>
									<button className={styles.Cart__clearButton} onClick={clearCart}>
										CLEAR CART
									</button>
								</div>
							</aside>
						</div>
					</section>
				</>
			) : (
				<section className={styles.Cart__emptySection}>
					<h1 className={styles.Cart__emptyText}>CART IS EMPTY :(</h1>
				</section>
			)}
		</>
	);
}

export default Cart;

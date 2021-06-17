import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import { useFetch } from "../../hooks/useFetch";
import Cart from "../Cart/Cart";
import Favorite from "../Favorite/Favorite";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

function Header(props) {
	const data = useData();
	const res = useFetch("https://fakestoreapi.com/products/categories", [], "categories");

	return (
		<header className={styles.Header}>
			<Logo />
			<nav className={styles.Header__nav}>
				{res.length > 0 && (
					<ul className={styles.Header__list}>
						<li className={styles.Header__listItem}>
							<NavLink to="/about">{data.text.about}</NavLink>
						</li>
						{res.map((category) => {
							return (
								<li key={category} className={styles.Header__listItem}>
									<NavLink to={`/${category}`}>{category}</NavLink>
								</li>
							);
						})}
						<li className={styles.Header__listItem}>
							<NavLink to="/contact">{data.text.contact}</NavLink>
						</li>
					</ul>
				)}
			</nav>
			<div className={styles.Header__appsettings}>
				<Cart />
				<Favorite />
				<ThemeSwitcher />
			</div>
		</header>
	);
}

export default Header;

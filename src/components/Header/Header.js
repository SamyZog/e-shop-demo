import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import { getSpecificCacheItem, overwriteCache } from "../../utils/localStorage";
import Cart from "../Cart/Cart";
import Favorite from "../Favorite/Favorite";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

function Header(props) {
	const data = useData();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (getSpecificCacheItem("categories")) {
			setCategories(getSpecificCacheItem("categories"));
			return;
		}

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((res) => {
				setCategories(res);
				overwriteCache({ key: "categories", payload: res });
			})
			.catch((err) => console.warn(err));
	}, []);

	return (
		<header className={styles.Header}>
			<Logo />
			<nav className={styles.Header__nav}>
				{categories.length > 0 && (
					<ul className={styles.Header__list}>
						<li className={styles.Header__listItem}>
							<NavLink to="/about">{data.text.about}</NavLink>
						</li>
						{categories.map((category) => {
							return (
								<li key={category} className={styles.Header__listItem}>
									<NavLink to={`/category/${category}`}>{category}</NavLink>
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

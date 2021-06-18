import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { useData } from "../../context/DataProvider";
import { useFetch } from "../../hooks/useFetch";
import Cart from "../Cart/Cart";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Favorite from "../Favorite/Favorite";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

function Header(props) {
	const data = useData();
	const res = useFetch("https://fakestoreapi.com/products/categories", [], "categories", null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("click", closeMenu);
		return () => window.removeEventListener("click", closeMenu);
	}, []);

	const closeMenu = (e) => {
		setOpen(false);
	};

	const handleMenu = (e) => {
		e.stopPropagation();
		setOpen((state) => !state);
	};

	return (
		<header className={styles.Header}>
			<Logo />
			<nav className={styles.Header__nav}>
				{res.length > 0 && (
					<ul className={styles.Header__list}>
						{res.map((category) => {
							return (
								<li key={category} className={styles.Header__listItem}>
									<NavLink to={`${data.links.category}/${category}`}>{category}</NavLink>
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
			<div className={styles.Header__mobileSettings}>
				<ThemeSwitcher />
				<button onClick={handleMenu} className={styles.Header__menuButton}>
					<Menu />
				</button>
			</div>
			<DropDownMenu categories={res} open={open} />
		</header>
	);
}

export default Header;

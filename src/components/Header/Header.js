import React from "react";
import AppName from "../AppName/AppName";
import Cart from "../Cart/Cart";
import Favorite from "../Favorite/Favorite";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

function Header(props) {
	return (
		<header className={styles.Header}>
			<Logo />
			<AppName />
			<div className={styles.appsettings}>
				<Cart />
				<Favorite />
				<ThemeSwitcher />
			</div>
		</header>
	);
}

export default Header;

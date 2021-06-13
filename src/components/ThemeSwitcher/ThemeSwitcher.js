import React, { useState } from "react";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import Switcher from "../Switcher/Switcher";
import styles from "./ThemeSwitcher.module.scss";

const themes = {
	light: {
		"--primary-common": "#ffffff",
		"--secondary-common": "#353535",
		"--primary": "#ffffff",
		"--secondary": "#353535",
		"--yellow": "#FEDB41",
		"--aqua": "#00EFD1",
		"--blue": "#00ACEA",
		"--red": "#e63946",
		"--green": "#2a9d8f",
	},
	dark: {
		"--primary-common": "#ffffff",
		"--secondary-common": "#353535",
		"--primary": "#353535",
		"--secondary": "#ffffff",
		"--yellow": "#FEDB41",
		"--aqua": "#00EFD1",
		"--blue": "#00ACEA",
		"--red": "#e63946",
		"--green": "#2a9d8f",
	},
};

const getInitialTheme = () => {
	let theme;
	let defaultTheme = "light";
	let cachedTheme = localStorage.getItem("e-shop-demo-theme");
	let agentTheme = window.matchMedia("(prefer-color-scheme: dark)").matches ? "dark" : "light";

	if (cachedTheme === "light" || cachedTheme === "dark") {
		theme = cachedTheme;
	} else if (cachedTheme === null) {
		theme = agentTheme;
	} else {
		theme = defaultTheme;
	}

	const themeObject = themes[theme];
	for (const color in themeObject) {
		document.documentElement.style.setProperty(color, themeObject[color]);
	}
	localStorage.setItem("e-shop-demo-theme", theme);
	return theme;
};

function ThemeSwitcher(props) {
	const [theme, setTheme] = useState(getInitialTheme);

	const handleThemeSwitch = () => {
		setTheme((state) => {
			const selectedTheme = theme === "light" ? "dark" : "light";
			localStorage.setItem("e-shop-demo-theme", selectedTheme);
			const themeObject = themes[selectedTheme];
			for (const color in themeObject) {
				document.documentElement.style.setProperty(color, themeObject[color]);
			}
			return selectedTheme;
		});
	};

	return (
		<div className={styles.ThemeSwitcher}>
			<Switcher
				state={theme === "light"}
				setState={handleThemeSwitch}
				render={() => {
					return theme === "light" ? <Moon /> : <Sun />;
				}}
			/>
		</div>
	);
}

export default ThemeSwitcher;

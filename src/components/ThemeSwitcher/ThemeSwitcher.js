import React, { useState } from "react";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import Switcher from "../Switcher/Switcher";
import styles from "./ThemeSwitcher.module.scss";

const themes = {
	light: {
		"--primary": "#ffffff",
		"--secondary": "#1d3557",
		"--green": "#06d6a0",
		"--red": "#d62828",
		"--yellow": "#ffbe0b",
		"--dark": "#1d3557",
		"--light": "#ffffff",
	},
	dark: {
		"--primary": "#1d3557",
		"--secondary": "#ffffff",
		"--green": "#06d6a0",
		"--red": "#d62828",
		"--yellow": "#ffbe0b",
		"--dark": "#1d3557",
		"--light": "#ffffff",
	},
};

const getInitialTheme = () => {
	let theme;
	let defaultTheme = "light";
	let cachedTheme = localStorage.getItem("shopito-theme");
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
	localStorage.setItem("shopito-theme", theme);
	return theme;
};

function ThemeSwitcher(props) {
	const [theme, setTheme] = useState(getInitialTheme);

	const handleThemeSwitch = () => {
		setTheme((state) => {
			const selectedTheme = theme === "light" ? "dark" : "light";
			localStorage.setItem("shopito-theme", selectedTheme);
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

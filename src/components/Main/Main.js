import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import Category from "../../pages/Category/Category";
import Favorites from "../../pages/Favorites/Favorites";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import styles from "./Main.module.scss";

function Main(props) {
	return (
		<main className={styles.Main}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/favorites" component={Favorites} />
				<Route exact path="/cart" component={Cart} />
				<Route path="/product/:slug" component={Product} />
				<Route path="/category/:slug" component={Category} />
			</Switch>
		</main>
	);
}

export default Main;

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import Cart from "../../pages/Cart/Cart";
import Category from "../../pages/Category/Category";
import Contact from "../../pages/Contact/Contact";
import Favorites from "../../pages/Favorites/Favorites";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product/Product";
import styles from "./Main.module.scss";

function Main(props) {
	const data = useData();

	return (
		<main className={styles.Main}>
			<Switch>
				<Route exact path={data.links.home} component={Home} />
				<Route path={data.links.favorites} component={Favorites} />
				<Route path={`${data.links.product}/:slug`} component={Product} />
				<Route path={data.links.cart} component={Cart} />
				<Route path={`${data.links.contact}`} component={Contact} />
				<Route path={`${data.links.category}/:slug`} component={Category} />
			</Switch>
		</main>
	);
}

export default Main;

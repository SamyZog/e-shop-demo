import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import Cart from "../Cart/Cart";
import Favorite from "../Favorite/Favorite";
import styles from "./DropDownMenu.module.scss";

function DropDownMenu(props) {
	const data = useData();
	const { categories, open } = props;

	return (
		<div className={styles.DropDownMenu} style={{ height: open ? "250px" : 0 }}>
			<nav>
				<ul>
					{categories.map((category) => {
						return (
							<li key={category}>
								<NavLink to={`${data.links.category}/${category}`}>{category}</NavLink>
							</li>
						);
					})}
					<li>
						<Cart>Cart</Cart>
					</li>
					<li>
						<Favorite>Favorites</Favorite>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default DropDownMenu;

import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Shop } from "../../assets/icons/shop.svg";
import { useData } from "../../context/DataProvider";
import styles from "./Logo.module.scss";

function Logo(props) {
	const data = useData();

	return (
		<div className={styles.Logo}>
			<Link to={data.links.home}>
				<Shop />
				<h2>SHOPITO</h2>
			</Link>
		</div>
	);
}

export default Logo;

import React from "react";
import styles from "./PageBanner.module.scss";

function PageBanner(props) {
	const { imgSrc } = props;

	return (
		<div
			className={styles.PageBanner}
			style={{
				backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${imgSrc})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<h1>{props.children}</h1>
		</div>
	);
}

export default PageBanner;

import React from "react";
import styles from "./Indicator.module.scss";

function Indicator(props) {
	return <span className={styles.Indicator}>{props.length}</span>;
}

export default Indicator;

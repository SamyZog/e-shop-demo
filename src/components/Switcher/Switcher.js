import React from "react";
import styles from "./Switcher.module.scss";

function Switcher(props) {
	const handleCheck = () => {
		props.setState();
	};

	return (
		<label className={styles.Switcher}>
			{props.render()}
			<input type="checkbox" name="" id="" checked={props.state} onChange={handleCheck} />
		</label>
	);
}

export default Switcher;

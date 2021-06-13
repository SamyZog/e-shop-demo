import React from "react";
import { useData } from "../../context/DataProvider";
import styles from "./AppName.module.scss";

function AppName(props) {
	const data = useData();

	return <h1 className={styles.AppName}>{data.appname}</h1>;
}

export default AppName;

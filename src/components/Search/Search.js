import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { useData } from "../../context/DataProvider";
import styles from "./Search.module.scss";

function Search(props) {
	const data = useData();
	return (
		<label className={styles.Search}>
			<input type="search" name="" id="search" placeholder={data.placeholders.search} />
			<button type="submit">
				<SearchIcon />
			</button>
		</label>
	);
}

export default Search;

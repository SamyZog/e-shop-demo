import React, { useEffect, useState } from "react";
import electronicsImg from "../../assets/images/electronics.jpg";
import jewelryImg from "../../assets/images/jewelry.jpg";
import menFashionImg from "../../assets/images/menfashion.jpg";
import womenFashionImg from "../../assets/images/womenfashion.jpg";
import Slider from "../../components/Slider/Slider";
import { getSpecificCacheItem, overwriteCache } from "../../utils/localStorage";
import styles from "./Home.module.scss";

const bgImages = [electronicsImg, jewelryImg, menFashionImg, womenFashionImg];

function Home(props) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (getSpecificCacheItem("categories")) {
			setCategories(getSpecificCacheItem("categories"));
			return;
		}

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((res) => {
				setCategories(res);
				overwriteCache({ key: "categories", payload: res });
			})
			.catch((err) => console.warn(err));
	}, []);

	return (
		<section className={styles.Home}>
			<Slider images={bgImages} categories={categories} />
		</section>
	);
}

export default Home;

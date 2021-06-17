import React from "react";
import electronicsImg from "../../assets/images/electronics.jpg";
import jewelryImg from "../../assets/images/jewelry.jpg";
import menFashionImg from "../../assets/images/menfashion.jpg";
import womenFashionImg from "../../assets/images/womenfashion.jpg";
import Slider from "../../components/Slider/Slider";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Home.module.scss";

const bgImages = [electronicsImg, jewelryImg, menFashionImg, womenFashionImg];

function Home(props) {
	const res = useFetch(`https://fakestoreapi.com/products/categories`, [], "items");

	return (
		<section className={styles.Home}>
			<Slider images={bgImages} categories={res} />
		</section>
	);
}

export default Home;

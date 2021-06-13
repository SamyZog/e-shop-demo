import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import electronicsImg from "../../assets/images/electronics.jpg";
import jewelryImg from "../../assets/images/jewelry.jpg";
import menFashionImg from "../../assets/images/menfashion.jpg";
import womenFashionImg from "../../assets/images/womenfashion.jpg";
import { useCache } from "../../context/CacheProvider";
import styles from "./Home.module.scss";

const bgImages = [electronicsImg, jewelryImg, menFashionImg, womenFashionImg];

function Home(props) {
	const { cache, setCache } = useCache();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (cache.categories) {
			setCategories(cache.categories);
			return;
		}

		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((res) => {
				setCache((state) => ({ ...state, categories: res }));
				setCategories(res);
			});
	}, []);

	return (
		<section className={styles.Home}>
			<nav className={styles.categories}>
				<ul>
					{categories.map((category, i) => {
						const imgSrc = bgImages[i];
						return (
							<li
								key={category}
								style={{
									backgroundImage: `linear-gradient(rgba(255,255,255,0.25),rgba(255,255,255,0.25)), url(${imgSrc})`,
								}}>
								<Link to={`/category/${category}`}>{category}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
}

export default Home;

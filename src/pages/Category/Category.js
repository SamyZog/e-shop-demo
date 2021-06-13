import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useCache } from "../../context/CacheProvider";
import styles from "./Category.module.scss";

function Category(props) {
	const { cache, setCache } = useCache();
	const { slug } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let products;
		switch (slug) {
			case "men's clothing":
				products = "men";
				break;
			case "women's clothing":
				products = "women";
				break;
			case "jewelery":
				products = "jewelery";
				break;
			case "electronics":
				products = "electronics";
				break;
			default:
				break;
		}
		if (cache[products]) {
			setProducts(cache[products]);
			return;
		}
		fetch(`https://fakestoreapi.com/products/category/${slug}`)
			.then((res) => res.json())
			.then((res) => {
				setCache((state) => ({ ...state, [products]: res }));
				setProducts(res);
			});
	}, []);

	return (
		<section className={styles.Category}>
			<aside className={styles.filter}></aside>
			<div className={styles.showcase}>
				<ul>
					{products.map((product) => {
						return (
							<li key={product.id}>
								<Card product={product} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Category;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import electronicsImg from "../../assets/images/electronics.jpg";
import jewelryImg from "../../assets/images/jewelry.jpg";
import menFashionImg from "../../assets/images/menfashion.jpg";
import womenFashionImg from "../../assets/images/womenfashion.jpg";
import Card from "../../components/Card/Card";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Category.module.scss";

const bgImages = [electronicsImg, jewelryImg, menFashionImg, womenFashionImg];

function Category(props) {
	const { slug } = useParams();
	const res = useFetch(`https://fakestoreapi.com/products/category/${slug}`, [], "items", slug);
	const [imgSrc, setImgSrc] = useState("");

	useEffect(() => {
		let src;
		switch (slug) {
			case "electronics":
				src = bgImages[0];
				break;
			case "jewelery":
				src = bgImages[1];
				break;
			case "men's clothing":
				src = bgImages[2];
				break;
			case "women's clothing":
				src = bgImages[3];
				break;
			default:
				break;
		}
		setImgSrc(src);
	}, [slug]);

	return (
		<section className={styles.Category}>
			<div
				className={styles.Category__banner}
				style={{
					backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${imgSrc})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				<h1 className={styles.Category__heading}>{slug.toUpperCase()}</h1>
			</div>
			<div className={styles.Category__listContainer}>
				<ul className={styles.Category__list}>
					{res.map((preview) => {
						return (
							<li className={styles.Category__listItem} key={preview.id}>
								<Card preview={preview} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Category;

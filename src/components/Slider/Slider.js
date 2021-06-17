import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import styles from "./Slider.module.scss";

function Slider(props) {
	const { images, categories } = props;
	const [imageIndex, setImageIndex] = useState(0);

	const windowRef = useRef({});
	const intervalIdRef = useRef();

	useEffect(() => {
		intervalIdRef.current = setInterval(() => moveForwards(), 5000);
		return () => clearInterval(intervalIdRef.current);
	}, [imageIndex]);

	const moveForwards = () => {
		setImageIndex((state) => {
			return state === images.length - 1 ? 0 : state + 1;
		});
		clearInterval(intervalIdRef.current);
	};

	const moveBackwards = () => {
		setImageIndex((state) => {
			return state === 0 ? images.length - 1 : state - 1;
		});
		clearInterval(intervalIdRef.current);
	};

	return (
		<div className={styles.Slider}>
			<div className={styles.Slider__window} ref={windowRef}>
				<button onClick={moveForwards} className={styles.Slider__forward}>
					{<Arrow />}
				</button>
				<button onClick={moveBackwards} className={styles.Slider__backward}>
					{<Arrow />}
				</button>
				<div
					className={styles.Slider__images}
					style={{
						width: `calc(${images.length} * 100%)`,
						transform: `translateX(-${windowRef.current.offsetWidth * imageIndex}px)`,
					}}>
					{images.map((image, i) => {
						return (
							<Link key={image} to={`/${categories[i]}`}>
								<img className={styles.Slider__image} src={image} alt={categories[i]} />
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Slider;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { useData } from "../../context/DataProvider";
import styles from "./Slider.module.scss";

function Slider(props) {
	const data = useData();
	const { images, categories } = props;
	const [imageIndex, setImageIndex] = useState(0);
	const [[initialX, delta, moved], setCoords] = useState([0, 0, false]);

	const windowRef = useRef({});
	const intervalIdRef = useRef();

	useEffect(() => {
		intervalIdRef.current = setInterval(() => moveForwards(), 5000);
		return () => clearInterval(intervalIdRef.current);
	}, [imageIndex]);

	const moveForwards = (e) => {
		setImageIndex((state) => {
			return state === images.length - 1 ? 0 : state + 1;
		});
		clearInterval(intervalIdRef.current);
	};

	const moveBackwards = (e) => {
		setImageIndex((state) => {
			return state === 0 ? images.length - 1 : state - 1;
		});
		clearInterval(intervalIdRef.current);
	};

	const handleTouchStart = (e) => {
		setCoords((state) => [e.changedTouches[0].clientX, state[1], false]);
	};

	const handleTouchMove = (e) => {
		setCoords((state) => [state[0], e.changedTouches[0].clientX, true]);
	};

	const handleTouchEnd = (e) => {
		if (moved) {
			initialX - delta >= 50 && moveForwards();
			initialX - delta <= -50 && moveBackwards();
		}
		setCoords((state) => [0, 0, false]);
	};

	return (
		<div className={styles.Slider}>
			<div
				className={styles.Slider__window}
				ref={windowRef}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}>
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
					{categories &&
						categories.length &&
						images.map((image, i) => {
							return (
								<div
									key={image}
									className={styles.Slider__slide}
									style={{ backgroundImage: `url(${image})` }}>
									<h1>
										<Link to={`${data.links.category}/${categories[i]}`}>
											{categories[i].toUpperCase()}
										</Link>
									</h1>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default Slider;

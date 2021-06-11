import { useEffect } from "react";

function App() {
	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((res) => console.log(res));
	}, []);

	return <></>;
}

export default App;

import { useEffect, useState } from "react";
import { isInLs, updateLs } from "../utils/localStorage";

const useFetch = (url, initial, key, slug) => {
	const [respsonse, setResponse] = useState(initial);

	useEffect(() => {
		const resFromLs = isInLs(key, slug);
		if (resFromLs) {
			setResponse(resFromLs);
			return;
		}
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setResponse(res);
				updateLs(key, slug, res);
			});
	}, [slug]);

	return respsonse;
};

export { useFetch };

import { useEffect, useState } from "react";
import { isInLs, updateLs } from "../utils/localStorage";

const useFetch = (url, initial, key, slug) => {
	const [res, setRes] = useState(initial);

	useEffect(() => {
		const resFromLs = isInLs(key, slug);
		if (resFromLs) {
			setRes(resFromLs);
			return;
		}
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				updateLs(key, slug, res);
				setRes(res);
			});
	}, [slug]);

	return res;
};

export { useFetch };

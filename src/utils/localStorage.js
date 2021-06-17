const APP_CACHE_NAME = "shopito-app-cache";

const setInitialCache = () => {
	const cache = {
		categories: [],
		cart: [],
		favorites: [],
		products: [],
	};
	localStorage.setItem(APP_CACHE_NAME, JSON.stringify(cache));
};

const checkCache = () => {
	return localStorage.getItem(APP_CACHE_NAME);
};

const getSpecificCacheItem = (key) => {
	if (!checkCache()) {
		return false;
	} else {
		const parsedCache = JSON.parse(checkCache());
		if (key in parsedCache && parsedCache[key].length) {
			return parsedCache[key];
		} else {
			return false;
		}
	}
};

const overwriteCache = ({ key, payload }) => {
	if (!checkCache()) {
		setInitialCache();
		return;
	}
	const parsedCache = JSON.parse(checkCache());
	switch (key) {
		case "categories":
		case "favorites":
		case "cart":
			parsedCache[key] = payload;
			break;
		default:
			break;
	}
	localStorage.setItem(APP_CACHE_NAME, JSON.stringify(parsedCache));
};

export { setInitialCache, getSpecificCacheItem, overwriteCache, checkCache };

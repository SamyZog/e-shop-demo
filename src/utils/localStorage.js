const APP_CACHE_NAME = "shopito-app-cache";

const _setInitialLs = () => {
	const cache = {
		categories: [],
		items: {},
		cartitems: [],
		favorites: [],
		theme: "",
	};
	localStorage.setItem(APP_CACHE_NAME, JSON.stringify(cache));
};

const isInLs = (key, slug) => {
	const cache = localStorage.getItem(APP_CACHE_NAME);
	if (cache && key in JSON.parse(cache)) {
		const parsedCache = JSON.parse(cache);
		switch (key) {
			case "categories":
			case "favorites":
			case "cartitems":
				return parsedCache[key].length && parsedCache[key];
			case "items":
				return parsedCache[key][slug] && parsedCache[key][slug].length && parsedCache[key][slug];
			default:
				break;
		}
	}
};

const updateLs = (key, slug, payload) => {
	const cache = localStorage.getItem(APP_CACHE_NAME);
	if (!cache) {
		_setInitialLs();
		return;
	}
	let parsedCache = JSON.parse(cache);
	switch (key) {
		case "categories":
		case "favorites":
		case "cartitems":
			parsedCache = { ...parsedCache, [key]: payload };
			break;
		case "items":
			parsedCache[key] = { ...parsedCache[key], [slug]: payload };
			break;
		default:
			break;
	}
	localStorage.setItem(APP_CACHE_NAME, JSON.stringify(parsedCache));
};

export { isInLs, updateLs };

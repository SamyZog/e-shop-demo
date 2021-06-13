import { createContext, useContext, useState } from "react";

const cacheContext = createContext();
const { Provider: Cache } = cacheContext;

function CacheProvider(props) {
	const [cache, setCache] = useState({});

	const value = {
		cache,
		setCache,
	};

	return <Cache value={value}>{props.children}</Cache>;
}

const useCache = () => useContext(cacheContext);

export { useCache };
export default CacheProvider;

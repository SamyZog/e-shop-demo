import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import CacheProvider from "./context/CacheProvider";
import CartProvider from "./context/CartProvider";
import DataProvider from "./context/DataProvider";
import FavoriteProvider from "./context/FavoriteProvider";
import "./styles/main.scss";

ReactDOM.render(
	<React.StrictMode>
		<DataProvider>
			<CacheProvider>
				<CartProvider>
					<FavoriteProvider>
						<Router>
							<App />
						</Router>
					</FavoriteProvider>
				</CartProvider>
			</CacheProvider>
		</DataProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import CartProvider from "./context/CartProvider";
import DataProvider from "./context/DataProvider";
import FavoriteProvider from "./context/FavoriteProvider";
import "./styles/main.scss";
import { updateLs } from "./utils/localStorage";

updateLs();

ReactDOM.render(
	<React.StrictMode>
		<DataProvider>
			<CartProvider>
				<FavoriteProvider>
					<Router>
						<App />
					</Router>
				</FavoriteProvider>
			</CartProvider>
		</DataProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

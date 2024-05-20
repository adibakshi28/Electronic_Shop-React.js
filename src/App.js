import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";


import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/checkout">
						<Header />
						<Checkout />
						<Footer />
					</Route>
					<Route exact path="/product/:productid">
						<Header />
						<ProductPage />
						<Footer />
					</Route>
					<Route exact path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

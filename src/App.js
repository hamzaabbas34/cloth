import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductsL from "./components/home/Products/ProductsL";
import About from "./components/abouts/About";
import Winter from "./components/season/Winter/Winter";
import Summer from "./components/season/summer/Summer";
import Contact from "./components/Contact/Contact";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ViewCart from "./components/viewCart/ViewCart";
import Order from "./Order/Order";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<ProductsL />} />
				<Route path="/product/:id" element={<SingleProduct />} />
				<Route path="/about" element={<About />} />
				<Route path="/winter" element={<Winter />} />
				<Route path="/summer" element={<Summer />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<ViewCart />} />
				<Route path="/product/order/:id" element={<Order />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

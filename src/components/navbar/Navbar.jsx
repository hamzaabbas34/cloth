//
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useCart } from "../../context/Cart";
import mydata from "../../data.json";
import Cartleft from "./Cartleft";
import Search from "./Search";
import NavLg from "./NavLg";

export default function Navbar() {
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [menu, setMenu] = useState(false);
	const [cartopen, setCartOpen] = useState(false);
	const [searchbtn, setSearchBtn] = useState(false);
	const [search, setSearch] = useState("");
	const searchRef = useRef(null);

	const { cartItems } = useCart();

	// Memoize filtered data based on search input
	const filteredData = useMemo(() => {
		if (search.length > 3) {
			return mydata.filter(
				(item) =>
					item.heading &&
					item.heading.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			return []; // or return mydata if you want to show all data when search is empty
		}
	}, [search]);

	// Memoize length of filtered data
	const len = useMemo(() => filteredData.length, [filteredData]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY) {
				// Scrolling down
				setIsScrollingUp(false);
			} else {
				// Scrolling up
				setIsScrollingUp(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target) &&
				event.target !== document.documentElement &&
				event.target !== document.body
			) {
				setSearch("");
				setSearchBtn(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative ">
			<Search
				filteredData={filteredData}
				search={search}
				setSearch={setSearch}
				len={len}
				cartItems={cartItems}
				searchbtn={searchbtn}
				searchRef={searchRef}
				setSearchBtn={setSearchBtn}
			/>
			<NavLg
				menu={menu}
				setMenu={setMenu}
				cartItems={cartItems}
				setSearchBtn={setSearchBtn}
				searchbtn={searchbtn}
				isScrollingUp={isScrollingUp}
				setCartOpen={setCartOpen}
				cartopen={cartopen}
			/>
			{/* Cart Sidebar */}
			<Cartleft cartopen={cartopen} setCartOpen={setCartOpen} />
		</div>
	);
}

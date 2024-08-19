import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function NavLg({setMenu , menu , cartItems ,setSearchBtn ,searchbtn , isScrollingUp ,setCartOpen , cartopen }) {
	return (
		<nav
			className={`bg-white z-30 fixed top-0 w-full flex justify-between items-center px-4 py-8  lg:px-16 md:px-8 transition-transform duration-300 ease-in-out ${
				isScrollingUp ? "translate-y-0" : "-translate-y-full"
			}`}>
			<button
				className="transition-all duration-200 ease-in-out transform 2xl:hidden lg:hidden xl:hidden flex"
				onClick={() => setMenu(!menu)}>
				<Icon
					icon="heroicons-outline:menu-alt-3"
					width="2rem"
					height="2rem"
					style={{ color: "black" }}
				/>
			</button>
			<div>
				<Icon
					icon="emojione-monotone:womans-clothes"
					width="2rem"
					height="2rem"
					style={{ color: "black" }}
					className="ms-5"
				/>
			</div>
			<ul className="justify-center ms-10 lg:flex md:hidden 2xl:flex xl:flex items-center gap-8 font-Jost-Medium hidden grow">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<Link to="/winter">Winter Season</Link>
				</li>
				<li>
					<Link to="/summer">Summer Season</Link>
				</li>
				<li>
					<Link to="/contact">Contacts</Link>
				</li>
			</ul>
			<div className="flex items-center justify-center md:gap-1 lg:gap-4">
				<button
					className=""
					onClick={() => {
						setSearchBtn(!searchbtn);
					}}>
					<Icon
						icon="bitcoin-icons:search-filled"
						width="2rem"
						height="2rem"
						style={{ color: "black" }}
					/>
				</button>
				<button onClick={() => setCartOpen(!cartopen)} className="relative">
					<Icon
						icon="material-symbols-light:shopping-bag-outline"
						width="2.2rem"
						height="2.2rem"
						style={{ color: "black" }}
					/>
					{cartItems.length > 0 && (
						<div className="font-Jost-Regular text-[.7rem] absolute right-[-8px] top-[-1px] h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
							{cartItems.length}
						</div>
					)}
				</button>
			</div>

			<Menu setMenu={setMenu} menu={menu} />
		</nav>
	);
}

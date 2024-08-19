import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function Menu({ setMenu, menu }) {
	return (
		<aside
			className={`fixed left-0 top-0 w-[300px] h-screen bg-white shadow-md px-2 z-[10000] transition-transform duration-300 ease-in-out ${
				menu ? "translate-x-0" : "translate-x-[-300px]"
			}`}>
			<div className="w-100 text-end p-10">
				<button onClick={() => setMenu(!menu)}>
					<Icon
						icon="akar-icons:cross"
						width="2rem"
						height="2rem"
						style={{ color: "black" }}
					/>
				</button>
			</div>
			<ul className="flex justify-start items-start flex-col gap-8 font-Jost-Medium ps-10">
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
		</aside>
	);
}

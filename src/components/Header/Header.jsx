import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Header({ heading, link, linkname }) {
	return (
		<div className="w-100  mt-32 py-12 bg-lightgray  text-black text-center align-middle  font-Jost-Medium   flex justify-center items-center flex-col">
			<h2 className="text-4xl ">{heading}</h2>
			<p className="flex justify-center items-center gap-2 font-Jost-Regular py-3">
				<Link to="/">
					<span>Home</span>
				</Link>
				<Icon
					icon="iconamoon:arrow-right-2-duotone"
					width="1rem"
					height="1rem"
					style={{ color: "black" }}
				/>
				<Link to={`/${link}`}>
					<span>{linkname}</span>
				</Link>
			</p>
		</div>
	);
}

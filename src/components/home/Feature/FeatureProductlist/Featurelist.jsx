// import React from "react";
// import { Link } from "react-router-dom";
// import "./ft.css";
// import {useCart} from '../../../../context/Cart'
// export default function Featurelist({ data, count, show = "yes" }) {
// 	const { viewId, recentViewId } = useCart()
// 	return (
// 		<div data-aos="" className={`${count === 1 ? "lg:w-10/12" : ""}`}>
// 			<li className={`${count === 1 ? "md:block lg:flex gap-5" : "w-full"}`} >
// 				<Link
// 					to={`/product/${data.id}`}
// 					onClick={() => {
// 						setAddrr(data.heading);
// 					}}>
// 					<div
// 						className={`relative ${
// 							count === 1
// 								? "lg:w-[300px] lg:h-[400px] md:w-[300px] md:h-[400px] w-full"
// 								: "w-full aspect-[4/5]"
// 						}`}>
// 						<img
// 							src={data.img_url2}
// 							alt={data.heading}
// 							className="w-full h-full object-cover object-top img1 z-1 opacity-1"
// 						/>
// 						<img
// 							src={data.img_url1}
// 							alt={data.heading}
// 							className="myimg w-full h-full object-cover object-top"
// 						/>
// 					</div>
// 				</Link>
// 				<div>
// 					{show === "yes" && (
// 						<>
// 							<p className="font-Jost-Medium mt-3">{data.heading}</p>
// 							<p className="mt-1 font-Jost-Regular">
// 								Rs.{data.price} <span>Regular price</span>
// 								<span className="opacity-40"> Rs.{data.price_final}</span>
// 							</p>
// 						</>
// 					)}
// 					{count === 1 && (
// 						<>
// 							<p className="font-Jost-Regular py-4 text-textlight hidden xl:block lg:block">
// 								FABRIC: Soft Slub Khaddar Includes: Shirt Color: Tie dye Size:
// 								Chart Attached Fit: Regular Fit...
// 							</p>
// 							<button className="hidden xl:block lg:block px-5 py-2 hover:bg-black bg-inherit hover:text-white text-black border-2 border-black rounded-md font-Jost-Regular">
// 								Select option
// 							</button>
// 						</>
// 					)}
// 				</div>
// 			</li>
// 		</div>
// 	);
// }

import React from "react";
import { Link } from "react-router-dom";
import "./ft.css";
import { useCart } from "../../../../context/Cart";

export default function Featurelist({ data, count, show = "yes" }) {
	const { recentViewId, addToCart } = useCart();

	return (
		<div className={`${count === 1 ? "lg:w-10/12" : ""}`}>
			<li
				className={`${
					count === 1 ? " block  md:flex lg:flex gap-5" : "w-full"
				}`}>
				<Link
					to={`/product/${data.id}`}
					onClick={() => {
						recentViewId(data.id); // Send the ID when the product is clicked
					}}>
					<div
						className={`relative ${
							count === 1
								? "lg:w-[300px] lg:h-[400px] md:w-[300px] md:h-[400px] w-full"
								: "w-full aspect-[4/5]"
						}`}>
						<img
							src={data.img_url2}
							alt={data.heading}
							className="w-full h-full object-cover object-top img1 z-1 opacity-1"
						/>
						<img
							src={data.img_url1}
							alt={data.heading}
							className="myimg w-full h-full object-cover object-top"
						/>
					</div>
				</Link>
				<div>
					{show === "yes" && (
						<>
							<p className="font-Jost-Medium mt-3">{data.heading}</p>
							<p className="mt-1 font-Jost-Regular">
								Rs.{data.price} <span>Regular price</span>
								<span className="opacity-40"> Rs.{data.price_final}</span>
							</p>
						</>
					)}
					{count === 1 && (
						<>
							<p className="font-Jost-Regular py-4 text-textlight hidden md:block xl:block lg:block">
								FABRIC: Soft Slub Khaddar Includes: Shirt Color: Tie dye Size:
								Chart Attached Fit: Regular Fit...
							</p>
							<button
								className="hidden md:block xl:block lg:block px-5 py-2 hover:bg-black bg-inherit hover:text-white text-black border-2 border-black rounded-md font-Jost-Regular"
								onClick={() => addToCart(data.id)}>
								Select option
							</button>
						</>
					)}
				</div>
			</li>
		</div>
	);
}

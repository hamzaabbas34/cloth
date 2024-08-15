import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../Header/Header";
import { useCart } from "../../context/Cart";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function ViewCart() {
	const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
		useCart();

	return (
		<div>
			<Navbar />
			<Header link="cart" linkname="Your Shopping Cart" />
			{cartItems.length > 0 ? (
				<>
					<div className="flex flex-wrap justify-between lg:px-20 xl-28 2xl:px-56 md:px-10 px-4 font-Jost-Medium py-5">
						<div className="w-[30%]">Product</div>
						<div className="w-[20%]">Price</div>
						<div className="lg:w-[20%] hidden md:hidden lg:block xl:block">
							Quantity
						</div>
						<div className="w-[20%] hidden lg:block xl:block">Total Price</div>
					</div>
					<div className="lg:px-20 2xl:px-56 md:px-10 px-4">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="flex flex-wrap justify-between items-center xl-28 border-y-[1px] mb-10 border-black border-opacity-30 font-Jost-Medium py-5">
								<div className="xl:w-[30%] lg:w-[40%] md:w-[40%] w-[80%] border-2">
									<div className="font-Jost-Regular flex  gap-3">
										<div className="h-auto relative border-2 ">
											<div className="w-[100px]">
												<img
													src={item.img_url1}
													alt=""
													className="  w-fit aspect-[4/5] object-cover h-full"
												/>
											</div>
										</div>
										<div>
											<div className="flex justify-between  items-start  flex-col h-full">
												<h2 className="font-Jost-Medium text-[14px] sm:text-[16px]">
													{item.heading}
												</h2>
												<p className="text-[14px] md:text-[16px] lg:text-[16px] 2xl:text-[16px] ">
													Size: <span>{item.size}</span>
												</p>
												<button
													onClick={() => removeFromCart(item.id)}
													className="underline text-gray-500 text-[13px]">
													Remove
												</button>
											</div>
										</div>
										<div></div>
									</div>
								</div>
								<div className="w-[20%]">{item.price_final}</div>
								<div className="lg:w-[20%] lg:order-3 md:order-last w-full order-last">
									<div className="flex items-center gap-2 text-gray-400">
										<div className="flex justify-between items-center py-2 mt-2 bg-btnbg rounded-md">
											<button
												className="py-0 px-4 text-[1.2rem]"
												onClick={() => decrementQuantity(item.id)}>
												<Icon
													icon="fluent:subtract-20-filled"
													width="1rem"
													height="1rem"
													style={{ color: "black" }}
												/>
											</button>
											<p className="text-black font-Jost-Regular">
												{item.quantity}
											</p>
											<button
												className="py-0 px-4 leading-none text-[1.2rem] text-black"
												onClick={() => incrementQuantity(item.id)}>
												+
											</button>
										</div>
									</div>
								</div>
								<div className="w-[20%] hidden lg:block xl:block">
									{item.price_final * item.quantity}
								</div>
							</div>
						))}
					</div>
				</>
			) : (
				<div className="text-center py-10 font-Jost-Regular">
					Cart is still empty goto{" "}
					<span className=" underline text-blue-600 ">
						<Link to="/">Home</Link>
					</span>
				</div>
			)}
		</div>
	);
}

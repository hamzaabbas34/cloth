import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart";

export default function Cartleft({ setCartOpen, cartopen }) {
	const {
		cartItems,
		totalPrice,
		incrementQuantity,
		removeFromCart,
		decrementQuantity,
		order,
	} = useCart();

	useEffect(() => {
		console.log("Cart Items:", cartItems);
	}, [cartItems]);

	return (
		<aside
			className={`fixed right-0 top-0 w-[300px] sm:w-[400px] shadow-2xl bg-white h-screen px-2 z-[10000] transition-transform duration-300 ease-in-out ${
				cartopen
					? "translate-x-0"
					: "translate-x-[300px] sm:translate-x-[400px]"
			}`}>
			<div className="relative">
				<button
					onClick={() => setCartOpen(!cartopen)}
					className="absolute top-5 right-5">
					<Icon
						icon="akar-icons:cross"
						width="1.3rem"
						height="1.3rem"
						style={{ color: "black" }}
					/>
				</button>
			</div>
			<h2 className="py-4 text-2xl font-Jost-Medium mt-10 px-2">
				Shopping Cart
			</h2>
			{cartItems.length <= 0 ? (
				<p className="px-2 font-Jost-Regular">Your cart is currently empty.</p>
			) : (
				<div className="relative h-full">
					<div className="h-[70%] overflow-auto overflow-x-hidden">
						<div className="mt-5 w-fit border-black">
							<div className="h-fit">
								{cartItems.map((item) => (
									<div key={item.id} className="w-full flex gap-2 mb-2">
										<div className="w-[80px] h-36 overflow-hidden">
											<img
												src={item.img_url1}
												alt={item.heading}
												className="w-full h-full object-cover object-top"
											/>
										</div>
										<div className="w-[40%] flex-1 flex justify-between flex-col">
											<h2 className="text-[16px]">{item.heading}</h2>
											<p className="text-[14px]">
												Size : <span>{item.size}</span>
											</p>
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
												<button
													onClick={() => removeFromCart(item.id)}
													className="underline text-gray-500 text-[13px]">
													remove
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="absolute bottom-28 left-0 w-full bg-white z-20">
						<div className="flex justify-between items-center font-Jost-Medium">
							<h2 className="text-[1.2rem]">Total Price</h2>
							<div className="text-[1.2rem]">Rs: {totalPrice}</div>
						</div>
						<button className="text-[1.1rem] mt-3 rounded-md text-white bg-black font-Jost-Regular w-full py-3">
							<Link to={`/product/order/${order}`}>Check Out</Link>
						</button>
						<button className="text-[1.1rem] rounded-md font-Jost-Regular w-full py-2 underline">
							<Link to="/cart">View Cart</Link>
						</button>
					</div>
				</div>
			)}
		</aside>
	);
}

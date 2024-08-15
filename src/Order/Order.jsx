import React from "react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/Cart";
import { Link } from "react-router-dom";

export default function Order() {
	const { cartItems, totalPrice } = useCart();
	return (
		<div>
			<div className="border-b-[.5px] border-black border-opacity-30">
				<nav className="flex justify-between items-center  px-24 py-7">
					<button>
						<Icon
							icon="emojione-monotone:womans-clothes"
							width="2rem"
							height="2rem"
							style={{ color: "black" }}
							className="ms-5"
						/>
					</button>

					<button className="relative">
						<Link to="/cart">
							<Icon
								icon="material-symbols-light:shopping-bag-outline"
								width="2.2rem"
								height="2.2rem"
								className=""
								style={{ color: "black" }}
							/>
						</Link>
						{cartItems.length > 0 && (
							<div className="font-Jost-Regular text-[.7rem]  absolute right-[-8px] top-[-1px]  h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
								{cartItems.length}
							</div>
						)}
					</button>
				</nav>
			</div>

			{cartItems.length > 0 ? (
				<div className="grid 2xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1  pb-10">
					<div className="border-e-[.5px] border-black border-opacity-30  px-4 md:px-16 lg:px-20 2xl:ps-56 pe-10 pt-10 ">
						<h2 className="font-Jost-Medium text-2xl     ">Contact</h2>
						<input
							type="email"
							className="w-full border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
							placeholder="Enter your Email here ..."
						/>
						<div className="mb-5">
							<input type="checkbox" name="" id="" className=" " />
							<span className="ps-2">Email me with news and offers</span>
						</div>
						<h2 className="font-Jost-Medium text-2xl  my-3   ">Delivery</h2>
						<div className="relative ">
							<p className="absolute left-6 top-1  z-10 text-[12px] opacity-60 ">
								Country/Region
							</p>
							<select className="w-full border-2 mb-4 pt-4 py-1 rounded-md border-black px-4 font-Jost-Regular  text-lg">
								<option value="pakistan" disabled selected hidden>
									Select a country
								</option>
								<option value="pakistan">Pakistan</option>
								<option value="india">India</option>
								<option value="dubai">Dubai</option>
							</select>
						</div>
						<div className="w-full flex gap-5">
							<input
								type="email"
								className="w-1/2   border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
								placeholder="First name (options)"
							/>
							<input
								type="email"
								className="w-1/2 border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
								placeholder="Last name"
							/>
						</div>
						<input
							type="email"
							className="w-full border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
							placeholder="Address..."
						/>
						<input
							type="email"
							className="w-full border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
							placeholder="Apartment suite etc. (options)"
						/>
						<div className="w-full flex gap-5">
							<input
								type="email"
								className="w-1/2   border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
								placeholder="City"
							/>
							<input
								type="email"
								className="w-1/2 border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
								placeholder="Post code etc"
							/>
						</div>
						<input
							type="email"
							className="w-full border-2  my-4 px-2 rounded-md     border-black py-3 font-Jost-Regular"
							placeholder="Phone number"
						/>
						<div className="mb-5">
							<input type="checkbox" name="" id="" className=" " />
							<span className="ps-2">Save this information for next time</span>
						</div>
						<div className="mb-5">
							<input type="checkbox" name="" id="" className=" " />
							<span className="ps-2">Text me with news and offers</span>
						</div>
						<h3 className=" font-Jost-Medium py-3 ">Shipping Method</h3>
						<div className="w-full flex justify-between items-baseline font-Jost-Regular border-2 px-2 py-3 rounded-md bg-black text-white ">
							<p className="">Cash on Delivery</p>
							<p className="">Rs : 23423</p>
						</div>

						<h3 className=" font-Jost-Medium pt-4   text-2xl">Payment</h3>
						<p>All transactions are secure and encrypted.</p>
						<div className="w-full flex justify-between items-baseline font-Jost-Regular border-2 px-2 py-3 rounded-md bg-black text-white ">
							<p className="">Cash on Delivery (COD)</p>
						</div>
						<button className="w-full py-4  bg-black text-white font-Jost-Regular my-10">
							Complete Order{" "}
						</button>
					</div>
					<div className="flex flex-col  w-full bg-bgdark ps-4  pe-4 lg:pe-10 2xl:pe-56">
						{cartItems.map((item) => {
							return (
								<div className=" flex justify-between   h-fit  ">
									<div className="flex gap-2 font-Jost-Regular 2xl:w-1/2 lg:w-4/5  md:h-3/4  w-3/4">
										<div className="w-fit  h-20  px-1  border-2 my-1">
											<img
												src={item.img_url1}
												alt=""
												className=" w-[80px] h-full object-cover object-top  "
											/>
										</div>
										<div className="">
											<h2> {item.heading}</h2>
											<p>{item.size}</p>
										</div>
									</div>
									<div className="2xl:w-1/2 lg:w-1/2 xl:w-1/2 w-fit  text-end  font-Jost-Regular ">
										<h2>Rs {item.price_final}</h2>
									</div>
								</div>
							);
						})}
						<div className="flex justify-between items-center h-fit font-Jost-Regular mt-8 mb-1">
							<div className="">Subtotal</div>
							<div className="">Rs {totalPrice}</div>
						</div>
						<div className="flex justify-between items-center h-fit font-Jost-Regular mb-3">
							<div className="">Shipping Charge </div>
							<div className="">Rs 200</div>
						</div>
						<div className="flex justify-between items-center h-fit">
							<div className="font-Jost-Medium ">TotalPrice</div>
							<div className="">
								<span className="font-Jost-Regular">pkr </span>
								<span className="font-Jost-Medium text-2xl">
									Rs {totalPrice + 200}
								</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="font-Jost-Regular text-center py-6 text-[1.1rem]">
					Cart item still empty ➡
					<span>
						{" "}
						<span className="underline ">
							<Link to="/">Home</Link>
						</span>{" "}
					</span>
				</div>
			)}
		</div>
	);
}

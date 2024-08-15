import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cart";
export default function Navbar() {
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [menu, setMenu] = useState(false);
	const [cartopen, setCartOpen] = useState(false);
	const {
		cartItems,
		totalPrice,
		incrementQuantity,
		removeFromCart,
		decrementQuantity,
		handleGenertedOrderName,
		order,
	} = useCart();

	const scrollStyle = {
		scrollbarWidth: "thin",
	};

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

	return (
		<>
			<nav
				className={`bg-white z-30 fixed   top-0 w-full flex justify-between items-center px-8 py-8 lg:px-16 md:px-16  transition-transform duration-300 ease-in-out ${
					isScrollingUp ? "translate-y-0" : "-translate-y-full"
				}`}>
				<button onClick={() => setMenu(!menu)}>
					<Icon
						icon="heroicons-outline:menu-alt-3"
						width="2rem"
						height="2rem"
						style={{ color: "black" }}
						className="2xl:hidden lg:hidden xl:hidden flex  "
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
				<ul className=" justify-center ms-10 lg:flex md:hidden  2xl:flex xl:flex items-center  gap-8 font-Jost-Medium hidden grow">
					<li>
						<Link to="/">Home</Link>{" "}
					</li>
					<li>
						<Link to="/about">About Us</Link>{" "}
					</li>
					<li>
						<Link to="/winter">Winter Season</Link>{" "}
					</li>
					<li>
						<Link to="/summer">Summer Season</Link>{" "}
					</li>
					<li>
						<Link to="/contact">Contacts</Link>{" "}
					</li>
				</ul>
				<div className="flex items-center justify-center gap-4">
					<Icon
						icon="bitcoin-icons:search-filled"
						width="2rem"
						height="2rem"
						style={{ color: "black" }}
					/>
					<button onClick={() => setCartOpen(!cartopen)} className="relative  ">
						<Icon
							icon="material-symbols-light:shopping-bag-outline"
							width="2.2rem"
							height="2.2rem"
							className=""
							style={{ color: "black" }}
						/>
						{cartItems.length > 0 && (
							<div className="font-Jost-Regular text-[.7rem]  absolute right-[-8px] top-[-1px]  h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
								{cartItems.length}
							</div>
						)}
					</button>
				</div>

				{menu && (
					<asiderbar className="fixed left-0 top-0  bg-white h-screen w-[300px]">
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
						<ul className=" flex justify-start  items-start flex-col  gap-8 font-Jost-Medium ps-10 ">
							<li>
								<Link to="/">Home</Link>{" "}
							</li>
							<li>
								<Link to="/about">About Us</Link>{" "}
							</li>
							<li>
								<Link to="/winter">Winter Season</Link>{" "}
							</li>
							<li>
								<Link to="/summer">Summer Season</Link>{" "}
							</li>
							<li>
								<Link to="/contact">Contacts</Link>{" "}
							</li>
						</ul>
					</asiderbar>
				)}
			</nav>
			{cartopen && (
				<asiderbar className="fixed right-0 top-0  shadow-2xl bg-white h-screen  xl:w-[25%]  md:w-1/2 w-3/4 lg:w-[40%] px-2 z-[10000]">
					<div className=" relative">
						<button
							onClick={() => setCartOpen(!cartopen)}
							className="absolute top-5 right-5 ">
							<Icon
								icon="akar-icons:cross"
								width="1.3rem"
								height="1.3rem"
								style={{ color: "black" }}
							/>
						</button>
					</div>
					<h2 className=" py-4 text-2xl font-Jost-Medium mt-4 px-2 ">
						Shopping Cart{" "}
					</h2>
					{cartItems.length <= 0 ? (
						<p className=" px-2  font-Jost-Regular">
							Your cart is currently empty.{" "}
						</p>
					) : (
						<div className="relative h-full  ">
							<div className=" h-[70%] overflow-scroll  overflow-x-hidden ">
								<div
									className=" mt-5  w-fit   border-black "
									style={scrollStyle}>
									<div className=" h-fit 	   ">
										{cartItems.map((item) => (
											<div className="w-full flex gap-2   mb-2 ">
												<div key={item.id}>
													<img src={item.img_url1} alt="" className="w-28   " />
												</div>
												<div className=" w-[40%] flex justify-between  flex-col">
													<h2 className="text-[14px]">{item.heading}</h2>
													<p className="text-[14px] ">
														Size : <span>{item.size}</span>
													</p>
													<div className="flex items-center gap-2 text-gray-400">
														<div className="flex justify-between items-center py-2   mt-2 bg-btnbg rounded-md">
															<button
																className="py-0  px-4 text-[1.2rem] "
																onClick={() => decrementQuantity(item.id)}>
																<Icon
																	icon="fluent:subtract-20-filled"
																	width="1rem"
																	height="1rem"
																	style={{ color: "black" }}
																/>
															</button>
															<p className="text-black  font-Jost-Regular ">
																{item.quantity}
															</p>
															<button
																className="py-0 px-4   leading-none text-[1.2rem] text-black"
																onClick={() => incrementQuantity(item.id)}>
																+
															</button>
														</div>
														<button
															onClick={() => removeFromCart(item.id)}
															className="underline text-gray-500 ext-[13px] ">
															remove
														</button>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="absolute bottom-28 left-0   w-full  bg-white  z-20">
								<div className="flex justify-between items-center font-Jost-Medium">
									<h2 className=" text-[1.2rem] ">Total Prices </h2>
									<div className="text-[1.2rem] ">Rs :{totalPrice}</div>
								</div>
								<button
									onClick={() => handleGenertedOrderName()}
									className=" text-[1.1rem] mt-3 b-1 rounded-md text-white bg-black font-Jost-Regular w-full py-3 ">
									<Link to={`/product/order/${order}`}>Check Out</Link>
								</button>
								<button className=" text-[1.1rem] rounded-md font-Jost-Regular w-full py-2  b underline ">
									<Link to="/cart"> view Cart </Link>
								</button>
							</div>
						</div>
					)}
				</asiderbar>
			)}
		</>
	);
}

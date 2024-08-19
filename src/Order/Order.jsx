// import React, { useRef, useState } from "react";
// import { Icon } from "@iconify/react";
// import { useCart } from "../context/Cart";
// import { Link } from "react-router-dom";
// import emailjs from "emailjs-com";

// export default function Order() {
// 	const { cartItems, totalPrice } = useCart("");
// 	const [email, setEmail] = useState("");
// 	const [name, setName] = useState("");
// 	const [region, setRegion] = useState("");
// 	const [address, setAddress] = useState("");
// 	const [lastName, setLastName] = useState("");
// 	const [postCode, setPostCode] = useState("");
// 	const [city, setCity] = useState("");
// 	const [phoneNumber, setPhoneNumber] = useState();
// 	const [complete, setComplete] = useState(false);

// 	const form = useRef();

// 	const sendEmail = (e) => {
// 		e.preventDefault();
// 		emailjs
// 			.sendForm(
// 				"service_zy6qom4",
// 				"template_04da8ha",
// 				form.current,
// 				"ruVEIuNid1jN1xNwa"
// 			)
// 			.then(
// 				(result) => {
// 					console.log(result.text);
// 					setComplete(true);
// 				},
// 				(error) => {
// 					console.log(error.text);
// 					alert("Failed to send the message, please try again.");
// 				}
// 			);
// 	};

// 	setTimeout(() => {
// 		setComplete(false);
// 	}, 3000);
// 	return (
// 		<div>
// 			<div className="border-b-[.5px] border-black border-opacity-30">
// 				<nav className="flex justify-between items-center  px-24 py-7">
// 					<button>
// 						<Icon
// 							icon="emojione-monotone:womans-clothes"
// 							width="2rem"
// 							height="2rem"
// 							style={{ color: "black" }}
// 							className="ms-5"
// 						/>
// 					</button>

// 					<button className="relative">
// 						<Link to="/cart">
// 							<Icon
// 								icon="material-symbols-light:shopping-bag-outline"
// 								width="2.2rem"
// 								height="2.2rem"
// 								className=""
// 								style={{ color: "black" }}
// 							/>
// 						</Link>
// 						{cartItems.length > 0 && (
// 							<div className="font-Jost-Regular text-[.7rem]  absolute right-[-8px] top-[-1px]  h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
// 								{cartItems.length}
// 							</div>
// 						)}
// 					</button>
// 				</nav>
// 			</div>

// 			{cartItems.length > 0 ? (
// 				<div className="grid 2xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1  pb-10 ">
// 					<form
// 						useRef={form}
// 						onSubmit={sendEmail}
// 						className="border-e-[.5px] border-black border-opacity-30  px-8 md:px-16 lg:px-20 2xl:ps-56  pt-10 ">
// 						<h2 className="font-Jost-Medium text-2xl     ">Contact</h2>
// 						<input
// 							type="email"
// 							className="w-full border-2  my-4 px-2 rounded-md  focus:outline-black    border-black py-3 font-Jost-Regular"
// 							placeholder="Enter your Email here ..."
// 							value={email}
// 							onCanPlay={(e) => setEmail(e.target.value)}
// 						/>
// 						<div className="mb-5">
// 							<input type="checkbox" name="" id="" className=" " />
// 							<span className="ps-2">Email me with news and offers</span>
// 						</div>
// 						<h2 className="font-Jost-Medium text-2xl  my-3   ">Delivery</h2>
// 						<div className="relative ">
// 							<p className="absolute left-6 top-1  z-10 text-[12px] opacity-60 ">
// 								Country/Region
// 							</p>
// 							<select className="w-full border-2 mb-4 pt-4 py-1 rounded-md border-black px-4 font-Jost-Regular  text-lg">
// 								<option
// 									value="pakistan"
// 									onClick={(e) => setRegion(e.target.value)}
// 									disabled
// 									selected
// 									hidden>
// 									Select a country
// 								</option>
// 								<option value="pakistan">Pakistan</option>
// 								<option value="india">India</option>
// 								<option value="dubai">Dubai</option>
// 							</select>
// 						</div>
// 						<div className="w-full flex gap-5">
// 							<input
// 								type="text"
// 								className="w-1/2   border-2  my-4 px-2 rounded-md   focus:outline-black     border-black py-3 font-Jost-Regular"
// 								placeholder="First name (options)"
// 								value={name}
// 								onCanPlay={(e) => setName(e.target.value)}
// 							/>
// 							<input
// 								type="text"
// 								className="w-1/2 border-2  my-4 px-2 rounded-md    focus:outline-black  border-black py-3 font-Jost-Regular"
// 								placeholder="Last name"
// 								value={lastName}
// 								onCanPlay={(e) => setLastName(e.target.value)}
// 							/>
// 						</div>
// 						<input
// 							type="text"
// 							className="w-full border-2  my-4 px-2 rounded-md   focus:outline-black  border-black py-3 font-Jost-Regular"
// 							placeholder="Address..."
// 							value={address}
// 							onCanPlay={(e) => setAddress(e.target.value)}
// 						/>
// 						<input
// 							type="text"
// 							className="w-full border-2  my-4 px-2 rounded-md    focus:outline-black border-black py-3 font-Jost-Regular"
// 							placeholder="Apartment suite etc. (options)"
// 						/>
// 						<div className="w-full flex gap-5">
// 							<input
// 								type="email"
// 								className="w-1/2   border-2  my-4 px-2 rounded-md  focus:outline-black   border-black py-3 font-Jost-Regular"
// 								placeholder="City"
// 								value={city}
// 								onCanPlay={(e) => setCity(e.target.value)}
// 							/>
// 							<input
// 								type="email"
// 								className="w-1/2 border-2  my-4 px-2 rounded-md   focus:outline-black  border-black py-3 font-Jost-Regular"
// 								placeholder="Post code etc"
// 								value={postCode}
// 								onCanPlay={(e) => setPostCode(e.target.value)}
// 							/>
// 						</div>
// 						<input
// 							type="email"
// 							className="w-full border-2  my-4 px-2 rounded-md   focus:outline-black  border-black py-3 font-Jost-Regular"
// 							placeholder="Phone number"
// 							value={phoneNumber}
// 							onCanPlay={(e) => setPhoneNumber(e.target.value)}
// 						/>
// 						<div className="mb-5">
// 							<input
// 								type="checkbox"
// 								name=""
// 								id=""
// 								className=" focus:outline-black "
// 							/>
// 							<span className="ps-2">Save this information for next time</span>
// 						</div>
// 						<h3 className=" font-Jost-Medium py-3 ">Shipping Method</h3>
// 						<div className="w-full flex justify-between items-baseline font-Jost-Regular border-2 px-2 py-3 rounded-md bg-black text-white  border-none ">
// 							<p className="">Cash on Delivery</p>
// 							<p className="">Rs: {totalPrice}</p>
// 						</div>

// 						<h3 className=" font-Jost-Medium pt-4   text-2xl">Payment</h3>
// 						<p>All transactions are secure and encrypted.</p>
// 						<div className="w-full border-none mt-2 flex justify-between items-baseline font-Jost-Regular border-2 px-2 py-3 rounded-md bg-black text-white ">
// 							<p className="">Cash on Delivery (COD)</p>
// 						</div>
// 						<button className="w-full py-4  bg-black text-white font-Jost-Regular my-10">
// 							Complete Order{" "}
// 						</button>
// 						{complete && (
// 							<button className="w-full py-4  bg-gree  text-white font-Jost-Regular my-10">
// 								Successfull Complete Order
// 							</button>
// 						)}
// 					</form>
// 					<div className="flex flex-col  w-full bg-bgdark ps-4  pe-4 lg:pe-10 2xl:pe-56 pt-10">
// 						{cartItems.map((item) => {
// 							return (
// 								<div className=" flex justify-between   h-fit  ">
// 									<div className="flex gap-2 font-Jost-Regular 2xl:w-1/2 lg:w-4/5  md:h-3/4  w-3/4">
// 										<div className="w-[80px]  h-20  px-1  border-2 my-1 relative">
// 											<img
// 												src={item.img_url1}
// 												alt=""
// 												className="  w-full aspect-[3/1] h-full object-cover object-top   "
// 											/>
// 										</div>
// 										<div className="">
// 											<h2> {item.heading}</h2>
// 											<p>{item.size}</p>
// 										</div>
// 									</div>
// 									<div className="2xl:w-1/2 lg:w-1/2 xl:w-1/2 w-fit  text-end  font-Jost-Regular ">
// 										<h2>Rs {item.price_final}</h2>
// 									</div>
// 								</div>
// 							);
// 						})}
// 						<div className="flex justify-between items-center h-fit font-Jost-Regular mt-8 mb-1">
// 							<div className="">Subtotal</div>
// 							<div className="">Rs {totalPrice}</div>
// 						</div>
// 						<div className="flex justify-between items-center h-fit font-Jost-Regular mb-3">
// 							<div className="">Shipping Charge </div>
// 							<div className="">Rs 200</div>
// 						</div>
// 						<div className="flex justify-between items-center h-fit">
// 							<div className="font-Jost-Medium ">TotalPrice</div>
// 							<div className="">
// 								<span className="font-Jost-Regular">pkr </span>
// 								<span className="font-Jost-Medium text-2xl">
// 									Rs {totalPrice + 200}
// 								</span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				<div className="font-Jost-Regular text-center py-6 text-[1.1rem]">
// 					Cart item still empty ➡
// 					<span>
// 						<span className="underline ">
// 							<Link to="/">Home</Link>
// 						</span>
// 					</span>
// 				</div>
// 			)}
// 		</div>
// 	);
// }
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/Cart";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Order() {
	const { cartItems, totalPrice, order } = useCart();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [region, setRegion] = useState("");
	const [address, setAddress] = useState("");
	const [lastName, setLastName] = useState("");
	const [postCode, setPostCode] = useState("");
	const [city, setCity] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [apartno, setApartno] = useState("");
	const [complete, setComplete] = useState(false);

	console.log(name, lastName, region, address, postCode, city);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		const templateParams = {
			name: name,
			lastName: lastName,
			email: email,
			region: region,
			address: address,
			postCode: postCode,
			city: city,
			phoneNumber: phoneNumber,
			apartno: apartno,
			order: order,
		};

		emailjs
			.send(
				"service_zy6qom4", // Your service ID
				"template_04da8ha", // Your template ID
				templateParams,
				"ruVEIuNid1jN1xNwa" // Your user ID
			)
			.then(
				(result) => {
					console.log("Email successfully sent!", result.text);
					setComplete(true);
					setEmail("");
					setName("");
					setRegion("");
					setAddress("");
					setLastName("");
					setPostCode("");
					setCity("");
					setPhoneNumber("");
					setComplete("");
					setApartno("");
					//   resetForm();
					setTimeout(() => setComplete(false), 3000);
				},
				(error) => {
					console.log("Failed to send the email:", error.text);
					alert("Failed to send the message, please try again.");
				}
			);
	};

	return (
		<div>
			<div className="border-b-[.5px] border-black border-opacity-30">
				<nav className="flex justify-between items-center  px-4 lg:px-24 md:px-10 py-7">
					<button>
						<Icon
							icon="emojione-monotone:womans-clothes"
							width="2rem"
							height="2rem"
							style={{ color: "black" }}
							className="md:ms-0 lg:ms-5"
						/>
					</button>

					<button className="relative">
						<Link to="/cart">
							<Icon
								icon="material-symbols-light:shopping-bag-outline"
								width="2.2rem"
								height="2.2rem"
								style={{ color: "black" }}
							/>
						</Link>
						{cartItems.length > 0 && (
							<div className="font-Jost-Regular text-[.7rem] absolute right-[-8px] top-[-1px] h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
								{cartItems.length}
							</div>
						)}
					</button>
				</nav>
			</div>

			{cartItems.length > 0 ? (
				<div className="grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 pb-10">
					<form
						ref={form}
						onSubmit={sendEmail}
						className="border-e-[.5px] border-black border-opacity-30 px-8 md:px-16 lg:px-20 2xl:ps-56 pt-10">
						<h2 className="font-Jost-Medium text-2xl">Contact</h2>
						<input
							type="email"
							className="w-full border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
							placeholder="Enter your Email here ..."
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div className="mb-5">
							<input type="checkbox" className="" />
							<span className="ps-2">Email me with news and offers</span>
						</div>
						<h2 className="font-Jost-Medium text-2xl my-3">Delivery</h2>
						<div className="relative">
							<p className="absolute left-6 top-1 z-10 text-[12px] opacity-60">
								Country/Region
							</p>
							<select
								className="w-full border-2 mb-4 pt-4 py-1 rounded-md border-black px-4 font-Jost-Regular text-lg"
								value={region}
								onChange={(e) => setRegion(e.target.value)}>
								<option value="" disabled required>
									Select a country
								</option>
								<option value="pakistan">Pakistan</option>
								<option value="india">India</option>
								<option value="dubai">Dubai</option>
							</select>
						</div>
						<div className="w-full flex gap-5">
							<input
								type="text"
								className="w-1/2 border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
								placeholder="First name (optional)"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
							<input
								type="text"
								className="w-1/2 border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
								placeholder="Last name"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
						</div>
						<input
							type="text"
							className="w-full border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
							placeholder="Address..."
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
						<input
							type="text"
							className="w-full border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
							placeholder="Apartment suite etc. (optional)"
							value={apartno}
							onChange={(e) => setApartno(e.target.value)}
						/>
						<div className="w-full flex gap-5">
							<input
								type="text"
								className="w-1/2 border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
								placeholder="City"
								name="city"
								value={city}
								required
								onChange={(e) => setCity(e.target.value)}
							/>
							<input
								type="text"
								className="w-1/2 border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
								placeholder="Post code etc."
								value={postCode}
								name="postCode"
								onChange={(e) => setPostCode(e.target.value)}
							/>
						</div>
						<input
							type="text"
							className="w-full border-2 my-4 px-2 rounded-md focus:outline-black border-black py-3 font-Jost-Regular"
							placeholder="Phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
						<div className="mb-5">
							<input type="checkbox" className="focus:outline-black" />
							<span className="ps-2">Save this information for next time</span>
						</div>
						<h3 className="font-Jost-Medium py-3">Shipping Method</h3>
						<div className="w-full flex justify-between items-baseline font-Jost-Regular border-2 px-2 py-3 rounded-md bg-black text-white">
							<p>Cash on Delivery</p>
							<p>Rs: {totalPrice + 200}</p>
						</div>

						<h3 className="font-Jost-Medium pt-4 text-2xl">Payment</h3>
						<p>All transactions are secure and encrypted.</p>
						<div className="w-full mt-2 flex justify-between items-baseline font-Jost-Regular border-2 px-2 py-3 rounded-md bg-black text-white">
							<p>Cash on Delivery (COD)</p>
						</div>
						{/* <button
							
							className="w-full py-4 bg-black text-white font-Jost-Regular my-10">
							Complete Order
						</button> */}
						{!complete && (
							<button
								type="submit"
								className="w-full py-4 bg-blue-500 text-white font-Jost-Regular my-10 text-center rounded-md">
								Place Order
							</button>
						)}

						{complete && (
							<div className="w-full py-4 bg-green-500 text-white font-Jost-Regular my-10 text-center border-none rounded-md4">
								Order Completed Successfully!
							</div>
						)}
					</form>
					<div className="flex flex-col w-full bg-bgdark ps-4 pe-4 lg:pe-10 2xl:pe-56 py-5">
						<h2 className="text-3xl font-Jost-Medium">My Bag</h2>
						<div className="my-5 w-full flex flex-col gap-5">
							{cartItems.map((item) => (
								<div key={item.id} className="w-full flex gap-4">
									<img
										src={item.img_url1}
										alt={item.heading}
										className="w-20 h-20 object-cover object-top"
									/>
									<div className="flex-1">
										<p className="font-Jost-Medium text-lg">{item.heading}</p>
										<p className="font-Jost-Regular text-gray-500">
											Qty: {item.quantity}
										</p>
										<p className="font-Jost-Medium">
											Rs: {item.price * item.quantity}
										</p>
									</div>
								</div>
							))}
						</div>
						<div className="mt-10 border-t-2 pt-4">
							<div className="flex justify-between font-Jost-Medium">
								<p>Subtotal</p>
								<p>Rs: {totalPrice}</p>
							</div>
							<div className="flex justify-between font-Jost-Medium">
								<p>Shipping</p>
								<p>Rs: 200</p>
							</div>
							<div className="flex justify-between font-Jost-Bold mt-4 text-lg">
								<p>Total</p>
								<p>Rs: {totalPrice + 200}</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="text-center py-10 font-Jost-Medium">
					<p>Your bag is empty.</p>
					<Link to="/shop" className="text-blue-500 underline">
						Continue Shopping
					</Link>
				</div>
			)}
		</div>
	);
}

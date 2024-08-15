import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Footer() {
	useEffect(() => {
		AOS.init({
			duration: 500, // Duration of the animation in milliseconds
			easing: "ease-in-out", // Easing function
			once: true, // Whether animation should happen only once - while scrolling down
		});
	}, []);
	return (
		<div className="w-100 bg-black overflow-x-hidden">
			<div className="w-100 md:px-10 px-6 lg:px-16 grid lg:grid-cols-4 md:grid-cols-2 gap-5 grid-cols-1 border-b  ">
				<div
					className=" flex justify-center items-start text-white flex-col lg:px-10 md:px-4  md:py-2 lg:py-6"
					data-aos="fade-left">
					<h2 className="text-3xl font-Jost-Medium  my-4">
						Let's get in Touch{" "}
					</h2>
					<p className=" font-Jost-Regular ">
						Sign up for our newsletter and get news about latest products and
						discounts
					</p>

					<input
						type="text"
						placeholder="Email ....."
						className=" text-white px-3 w-[100%] outline-none border-2 bg-inherit text-[16px] py-2 rounded-lg  my-5 border-1 border-white"
					/>
				</div>
				<div
					data-aos="fade-left"
					className="  text-white font-Jost-Regular md:px-5 lg:px-5 flex flex-col gap-2 py-6 md:py-10 lg:py-14">
					<h2 className="font-Jost-Medium mb-2 ">Store links</h2>
					<p>
						<Link to="/">Home</Link>
					</p>
					<p>
						<Link to="/product">Product</Link>
					</p>
					<p>
						<Link to="/about">About Us</Link>
					</p>
					<p>
						<Link to="/contact</p>">Contact Us</Link>
					</p>
				</div>
				<div
					data-aos="fade-left"
					className=" text-white font-Jost-Regular md:px-5 lg:px-5 flex flex-col gap-2 py-6 md:py-10 lg:py-14">
					<h2 className="font-Jost-Medium mb-2 ">Other Brands</h2>
					<p>Almirah </p>
					<p>Khaadi</p>
					<p>Sana Safinaz</p>
					<p>Sapphire</p>
				</div>
				<div
					data-aos="fade-left"
					className=" text-white font-Jost-Regular md:px-5 lg:px-5 flex flex-col gap-2 py-6 md:py-10 lg:py-14">
					<h2 className="font-Jost-Medium mb-2 ">Contact Us </h2>
					<p>📧 sales@umzay.com</p>
					<p>📱 +92 309 426 4121 </p>
				</div>
			</div>

			{/* <div className="text-white">copyRight</div> */}
		</div>
	);
}

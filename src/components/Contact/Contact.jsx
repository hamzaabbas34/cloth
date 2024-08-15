import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Icon } from "@iconify/react";

export default function Contact() {
	const [susMge, setsusMge] = useState(false);
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [Msg, setMsg] = useState("");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_2omnaam",
				"template_f0smkn5",
				form.current,
				"ruVEIuNid1jN1xNwa"
			)
			.then(
				(result) => {
					console.log(result.text);
					setsusMge(true);
				},
				(error) => {
					console.log(error.text);
					alert("Failed to send the message, please try again.");
				}
			);
	};

	setTimeout(() => {
		setsusMge(false);
	}, 3000);

	return (
		<div>
			<Navbar />
			<Header heading="Contact Us " linkname="contact" link="contact" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 lg:px-20 xl:px-20 2xl:px-56 ">
				<form ref={form} onSubmit={sendEmail} className="mt-4">
					<h2 className="font-Jost-Medium text-2xl mt-4 ">
						We would love to hear from you.
					</h2>
					<p className=" font-Jost-Regular opacity-45 mt-1 mb-2">
						If you’ve got great products you’re making or looking to work with
						us, then drop us a line.
					</p>
					<div className="w-full font-Jost-Regular flex gap-4 mt-4">
						<input
							type="text"
							name="name"
							className="w-1/2 border-[1px] border-black font-Jost-Regular py-3 px-2 rounded-md focus:outline-black"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<input
							type="email"
							name="email"
							className="w-1/2 border-[1px] border-black font-Jost-Regular py-3 px-2 rounded-md focus:outline-black"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="w-full mt-4 mb-2">
						<textarea
							name="message"
							rows="10"
							className="w-full border-[1px] border-black font-Jost-Regular py-3 px-2 rounded-md focus:outline-black"
							placeholder="Message"
							value={Msg}
							onChange={(e) => setMsg(e.target.value)}
							required></textarea>
					</div>
					<div className="relative w-fit mb-4 group">
						<div className="w-48 h-11 bg-black z-0 rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"></div>
						<button
							type="submit"
							className="px-10 py-3 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white font-Jost-Regular transition-transform duration-300 ease-in-out">
							Submit Now
						</button>
					</div>
					{susMge && (
						<div className="bg-green-600 text-white py-3 px-2 rounded-md mb-5 ">
							Successfully Sent Your Message
						</div>
					)}
				</form>

				<div className="font-Jost-Regular 2xl:px-28 lg:px-20 md:px-16 px-4 py-20 ">
					<div className="">
						<h2 className="font-Jost-Medium mb-3">Sales</h2>
						<p className="opacity-50">sales@umzay.com</p>
						<p>+92 309 426 4121</p>
					</div>
					<div className="my-5">
						<h2 className="font-Jost-Medium mb-3">Complaints</h2>
						<p className="opacity-50">complaints@umzay.com</p>
						<h3>+92 309 426 4121</h3>
					</div>
					<div className="">
						<h2 className="font-Jost-Medium mb-3">Wholesales</h2>
						<p className="opacity-50">wholesales@umzay.com</p>
						<p>+92 309 426 4121</p>
					</div>
					<div className="my-5">
						<h2 className="font-Jost-Medium mb-3">Social Media</h2>
						<div className="flex gap-2">
							<Icon
								icon="hugeicons:instagram"
								width="1.5rem"
								height="1.5rem"
								style={{ color: "black" }}
							/>
							<Icon
								icon="ri:facebook-fill"
								width="1.5rem"
								height="1.5rem"
								style={{ color: "black" }}
							/>
							<Icon
								icon="uil:whatsapp"
								width="1.5rem"
								height="1.5rem"
								style={{ color: "black" }}
							/>
							<Icon
								icon="hugeicons:tiktok"
								width="1.5rem"
								height="1.5rem"
								style={{ color: "black" }}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

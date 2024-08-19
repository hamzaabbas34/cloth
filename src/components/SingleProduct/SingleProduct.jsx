import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";
import { useParams, Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./swiper1.css";
import Featurelist from "../home/Feature/FeatureProductlist/Featurelist";
import { useCart } from "../../context/Cart";

export default function SingleProduct() {
	const { myarr, addToCart, order } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [show, setShow] = useState(1);
	const [size, setSize] = useState("S");

	function handleCreateOrderName(id) {
		addToCart(id, quantity, size);
	}
	const { id } = useParams();

	const new_data = data.filter((item) => item.id === parseInt(id));
	const swiperRef = useRef(null);
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top when the component mounts
	}, []);

	if (new_data.length === 0) {
		return <div>Product not found</div>;
	}

	const product = new_data[0]; // Access the first element in the filtered array

	const handleThumbnailClick = (index) => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideTo(index); // Change Swiper slide
		}
	};
	const handleQuantityChange = (operation) => {
		setQuantity((prevQuantity) => {
			if (operation === "increment") {
				return prevQuantity + 1;
			} else if (operation === "decrement") {
				// Ensure the quantity doesn't go below 1 or 0, based on your requirement
				return Math.max(prevQuantity - 1, 1);
			}
			return prevQuantity; // Default return if operation is neither "increment" nor "decrement"
		});
	};

	return (
		<>
			<Navbar />
			<Header2
				heading={product.heading}
				season={product.season}
				id={parseInt(id)}
			/>
			<div
				className="2xl:px-56 md:px-8 lg:px-20 px-8 overflow-hidden"
				data-aos="fade-left">
				<div className="product-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
					<div className="flex  gap-2 lg:flex myhead  overflow-hidden ">
						<div className=" flex lg:flex-col   w-full  sm:w-full lg:w-1/6 xl:h-auto  h-fit  gap-2 myhead1 ">
							<div
								className=" border-2 border-black border-opacity-35 w-[80px] p-2  h-[100px] mydev"
								onClick={() => handleThumbnailClick(0)}>
								<img
									src={product.img_url1}
									alt={product.heading}
									className="w-full h-full object-cover object-top"
								/>
							</div>
							<div
								className=" border-2 border-black border-opacity-35 w-[80px] p-2 h-[100px] mydev"
								onClick={() => handleThumbnailClick(1)}>
								<img
									src={product.img_url2}
									alt={product.heading}
									className="w-full h-full object-cover object-top"
								/>
							</div>
							<div
								className=" border-2 border-black border-opacity-35 w-[80px] p-2 h-[100px]  mydev "
								onClick={() => handleThumbnailClick(2)}>
								<img
									src={product.img_url1}
									alt={product.heading}
									className="w-full h-full object-cover object-top"
								/>
							</div>
							<div
								className=" border-2 border-black border-opacity-35 w-[80px] p-2  h-[100px] mydev"
								onClick={() => handleThumbnailClick(3)}>
								<img
									src={product.img_url2}
									alt={product.heading}
									className="w-full h-full object-cover object-top"
								/>
							</div>
						</div>
						<div className=" lg:w-4/5  xl:w-4/5 md:w-full  w-[100%]   myhead2 overflow-hidden">
							<Swiper
								spaceBetween={10}
								slidesPerView={1}
								pagination={{ clickable: true }}
								navigation={true}
								modules={[Pagination, Navigation]}
								style={{ width: "100%", height: "100%" }}
								ref={swiperRef} // Set ref to Swiper instance
							>
								<SwiperSlide>
									<img
										src={product.img_url1}
										alt={product.heading}
										className="aspect-[4/5] w-[100%] lg:h-[100%]  xl:h-[100%] object-cover object-top overflow-hidden md:h-[100%] "
									/>
								</SwiperSlide>
								<SwiperSlide>
									<img
										src={product.img_url2}
										alt={product.heading}
										className="aspect-[4/5] w-[100%] lg:h-[100%]  xl:h-[100%] object-cover object-top overflow-hidden md:h-[100%] "
									/>
								</SwiperSlide>
								<SwiperSlide>
									<img
										src={product.img_url1}
										alt={product.heading}
										className="aspect-[4/5] w-[100%] lg:h-[100%]  xl:h-[100%] object-cover object-top overflow-hidden md:h-[100%] "
									/>
								</SwiperSlide>
								<SwiperSlide>
									<img
										src={product.img_url2}
										alt={product.heading}
										className="aspect-[4/5] w-[100%] lg:h-[100%]  xl:h-[100%] object-cover object-top overflow-hidden md:h-[100%] "
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div>
						<div className="w-100 flex justify-between items-center relative">
							<h2 className="text-[1.8rem] font-Jost-Regular me-20">
								{product.heading}
							</h2>
							<div className="absolute top-0 right-0 w-12 h-12 rounded-full border-2 border-black flex justify-center items-center">
								<Icon icon="ph:star" width="2rem" height="2rem" />
							</div>
						</div>
						<h2 className="text-[1.6rem] font-Jost-Regular font-[300] opacity-65">
							Rs.{product.price_final}
						</h2>
						<h2 className="font-Jost-Medium mt-10">
							Size :<span className="font-Jost-Regular"> {size}</span>
						</h2>
						<div className="mb-10 mt-5 ">
							<button
								className={` px-5 py-3 border-2 rounded-md border-black me-2  m2  ${
									size === "S" ? "bg-black text-white" : ""
								}`}
								onClick={() => setSize("S")}>
								S
							</button>
							<button
								className={` px-5 py-3 border-2 rounded-md border-black  mu  ${
									size === "M" ? "bg-black text-white" : ""
								}`}
								onClick={() => setSize("M")}>
								M
							</button>
						</div>

						<div className="w-100 flex flex-col xl:flex-row lg:flex-row md:flex-row gap-4 font-Jost-Regular my-5">
							<div className="lg:w-1/4 md:w-1/4 xl:w-1/4 w-full grid grid-cols-3 border-2 rounded-md place-items-center">
								<button
									className="py-2 text-[1.2rem]"
									onClick={() => handleQuantityChange("increment")}>
									+
								</button>
								<p>{quantity}</p>
								<button
									className="py-2 leading-none text-[1.2rem]"
									onClick={() => handleQuantityChange("decrement")}>
									<Icon
										icon="fluent:subtract-20-filled"
										width="1rem"
										height="2rem"
										style={{ color: "black" }}
									/>
								</button>
							</div>
							<button
								onClick={() => addToCart(product.id, quantity, size)}
								className="xl:w-10/12 md:w-10/12 w-full lg:w-10/12 h-fit leading-none py-[17px] rounded-md bg-black text-white">
								Add to Cart
							</button>
						</div>
						<Link to={`/product/order/${order.length > 0 ? order : "1"}`}>
							<button
								onClick={() => {
									handleCreateOrderName(product.id);
								}}
								className="w-[100%] py-[12px] rounded-md bg-black text-white font-Jost-Regular mu">
								Buy it now
							</button>
						</Link>
					</div>
				</div>

				<div className="   font-Jost-Medium text-[1.2rem] flex justify-start  md:justify-center  lg:justify-center lg:items-center  xl:justify-center xl:items-center gap-5 border-b-2 border-b-black my-10 border-opacity-35 lg:flex-row md:flex-row flex-col">
					<div
						onClick={() => setShow(1)}
						className="flex  justify-between items-center  md:w-fit lg:w-fit   w-100  md:border-none lg:border-none border-b border-black">
						<button>Product description</button>
						<button className=" block md:hidden xl:hidden lg:hidden 2xl:hidden   ">
							<Icon
								icon="iconamoon:arrow-down-2-duotone"
								width="2rem"
								height="2rem"
								style={{ color: "black" }}
							/>
						</button>
					</div>
					<div className=" ">
						{show === 1 && (
							<div className=" block md:hidden xl:hidden lg:hidden 2xl:hidden">
								{accordion()}
							</div>
						)}
					</div>
					<div
						onClick={() => setShow(2)}
						className="flex justify-between items-center  md:w-fit lg:w-fit   w-100  ">
						<button>Shipping & Return</button>
						<button className=" block md:hidden xl:hidden lg:hidden 2xl:hidden   ">
							<Icon
								icon="iconamoon:arrow-down-2-duotone"
								width="2rem"
								height="2rem"
								style={{ color: "black" }}
							/>
						</button>
					</div>
					<div className="">
						{show === 2 && (
							<div className=" block md:hidden xl:hidden lg:hidden 2xl:hidden">
								{accordion1()}
							</div>
						)}
					</div>
				</div>
				{show === 1 && (
					<div className=" hidden  md:block lg:block ">{accordion()}</div>
				)}
				{show === 2 && (
					<div className="hidden  md:block lg:block ">{accordion1()}</div>
				)}

				<div className="mt-16" data-aos="fade-left">
					<h2 className="text-4xl font-Jost-Regular mb-10 mt-">
						You Might Also Like
					</h2>
				</div>
				<div data-aos="fade-top ">
					<Swiper
						spaceBetween={10}
						slidesPerView={4}
						pagination={{ clickable: true }}
						navigation={true}
						autoplay={true}
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 10,
							},
						}}
						modules={[Pagination, Navigation]}>
						<SwiperSlide>
							<Featurelist data={data[9]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[10]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[1]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[15]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[4]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[6]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[7]} show="none" />
						</SwiperSlide>
						<SwiperSlide>
							<Featurelist data={data[14]} show="none" />
						</SwiperSlide>
					</Swiper>

					<div className="mt-16">
						<h2 className="text-4xl font-Jost-Regular mb-10 mt-">
							Recently Viewed Products
						</h2>
					</div>
				</div>
				<ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-20 mb-16  overflow-x-hidden ">
					{data
						.filter((item) => myarr.includes(item.id))
						.map((item) => (
							<Featurelist key={item.id} data={item} />
						))}
				</ul>
			</div>

			<Footer />
		</>
	);
}

function Header2({ season, heading, id }) {
	return (
		<div className=" mt-24 py-10 flex justify-center items-center text-center overflow-hidden ">
			<div className="flex items-center flex-wrap text-center">
				<div className="font-Jost-Regular text-center w-full sm:w-auto md:w-auto lg:w-auto ">
					<Link to="/">Home</Link>
				</div>
				<div className="flex justify-center rotate-90  sm:rotate-0 md:rotate-0 lg:rotate-0  text-center w-full sm:w-auto md:w-auto lg:w-auto ">
					<Icon
						icon="iconamoon:arrow-right-2-duotone"
						width="1rem"
						height="1rem"
						style={{ color: "black" }}
						className="mt-[1px]"
					/>
				</div>
				<div className="font-Jost-Regular w-full sm:w-auto md:w-auto lg:w-auto ">
					<Link to={`/${season}`}>{season} Collection</Link>
				</div>
				<div className="flex justify-center   w-full sm:w-auto md:w-auto lg:w-auto  rotate-90  sm:rotate-0 md:rotate-0 lg:rotate-0">
					<Icon
						icon="iconamoon:arrow-right-2-duotone"
						width="1rem"
						height="1rem"
						style={{ color: "black" }}
						className="mt-[1px]"
					/>
				</div>
				<div className="w-full sm:w-auto md:w-auto lg:w-auto">
					<Link to={`/product/${id}`}>{heading}</Link>
				</div>
			</div>
		</div>
	);
}
function accordion() {
	return (
		<div className="font-Jost-Regular text-[1.1rem] text-black text-opacity-50 flex flex-col gap-2 mb-10">
			<p>FABRIC: Soft Slub Khaddar</p>
			<p>Includes: Shirt</p>
			<p>Color: Multi Color</p>
			<p>Size: Chart Attached</p>
			<p>Fit: Regular Fit Comfortable Slightly Loose Fit</p>
			<p>Work Technique: Printed</p>
			<p>
				Disclaimer: The color of the outfit may vary Due to photographic
				lighting Sources
			</p>
			<p>The Model is wear (FREE SIZE)</p>
		</div>
	);
}

function accordion1() {
	return (
		<div className="font-Jost-Regular text-[1.1rem] text-black text-opacity-50">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sapiente
			adipisci minima. Possimus commodi, perferendis ratione asperiores
			molestiae error quidem voluptatibus. Similique sequi atque officia
			accusamus quas, expedita impedit non, ducimus aperiam quidem unde a
			suscipit veniam dolorem corrupti sed. Eum ratione possimus non nesciunt
			tempore doloribus repellendus culpa reiciendis.
		</div>
	);
}

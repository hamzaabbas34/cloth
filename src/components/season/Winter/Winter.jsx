import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Header from "../../Header/Header";
import data from "../../../data.json";
import Footer from "../../Footer/Footer";
import Featurelist from "../../home/Feature/FeatureProductlist/Featurelist";

export default function Winter() {
	const [visibleCount, setVisibleCount] = useState(10); // Number of items initially visible
	const [count, setCount] = useState(5); // State for button clicks
	console.log(count);
	const handleShowMore = () => {
		setVisibleCount((prevCount) => prevCount + 10); // Increase the visible count by 10
	};

	const getButtonClass = (value) =>
		count === value ? "bg-black" : "bg-gray-100";
	const getSpanClass = (value) => (count === value ? "bg-white" : "bg-black");

	return (
		<>
			<Navbar />
			<Header heading="Winter Collections" linkname="winter" link="winter" />
			<div className="hidden md:flex lg:flex  justify-start items-center px-8 pt-10 mb-[-30px] gap-3">
				<button onClick={() => setCount(5)}>
					<div
						className={`w-10 h-10 flex justify-center items-center gap-[2px] rounded-sm ${getButtonClass(
							5
						)}`}>
						<span className={`w-[1.5px] h-3 ${getSpanClass(5)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(5)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(5)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(5)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(5)}`}></span>
					</div>
				</button>
				<button onClick={() => setCount(4)}>
					<div
						className={`w-10 h-10 flex justify-center items-center gap-[2px] rounded-sm ${getButtonClass(
							4
						)}`}>
						<span className={`w-[1.5px] h-3 ${getSpanClass(4)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(4)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(4)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(4)}`}></span>
					</div>
				</button>
				<button onClick={() => setCount(3)}>
					<div
						className={`w-10 h-10 flex justify-center items-center gap-[2px] rounded-sm ${getButtonClass(
							3
						)}`}>
						<span className={`w-[1.5px] h-3 ${getSpanClass(3)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(3)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(3)}`}></span>
					</div>
				</button>
				<button onClick={() => setCount(1)}>
					<div
						className={`w-10 h-10 flex justify-center items-center gap-[2px] rounded-sm rotate-90  ${getButtonClass(
							1
						)}`}>
						<span className={`w-[1.5px] h-3 ${getSpanClass(1)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(1)}`}></span>
						<span className={`w-[1.5px] h-3 ${getSpanClass(1)}`}></span>
					</div>
				</button>
			</div>
			<ul
				className={`grid grid-cols-1 sm:grid-cols-2 ${
					count === 5 ? "md:grid-cols-3" : " "
				} ${count === 4 ? "md:grid-cols-3" : " "}  ${
					count === 3 ? "md:grid-cols-3  " : " "
				}  ${count === 5 ? "lg:grid-cols-5" : " "} ${
					count === 4 ? "lg:grid-cols-4" : " "
				}  ${count === 3 ? "lg:grid-cols-3  " : " "}   ${
					count === 1 ? "lg:grid-cols-1 md:grid-cols-1  " : " "
				} gap-4 mt-20 mb-16 ps-8 pe-4 lg:ps-16 lg:pe-10 md:ps-16 md:pe-10 overflow-x-hidden`}>
				{data
					.filter((item) => item.season === "winter")
					.slice(0, visibleCount)
					.map((item) => (
						<Featurelist key={item.id} data={item} count={count} />
					))}
			</ul>
			{visibleCount < data.length && (
				<div className="text-center my-8">
					<button
						onClick={handleShowMore}
						className="px-6 py-2 bg-black text-white rounded">
						Show More
					</button>
				</div>
			)}
			<Footer />
		</>
	);
}

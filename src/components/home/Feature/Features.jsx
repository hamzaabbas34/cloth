import React, { useEffect, useState } from "react";
import AOS from "aos";
import data from "../../../data.json";
import "aos/dist/aos.css";
import Featurelist from "./FeatureProductlist/Featurelist";

export default function Features() {
	const [visibleCount, setVisibleCount] = useState(10); // Number of items initially visible

	useEffect(() => {
		AOS.init({
			duration: 500, // Duration of the animation in milliseconds
			easing: "ease-in-out", // Easing function
			once: true, // Whether animation should happen only once - while scrolling down
		});
	}, []);

	const handleShowMore = () => {
		setVisibleCount((prevCount) => prevCount + 10); // Increase the visible count by 10
	};

	return (
		<div className="overflow-x-hidden ">
			<div
				className="text-center font-Jost-Medium mb-10 overflow-hidden"
				data-aos="fade-left">
				<h1 className="text-4xl">Featured Products</h1>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-20 mb-16 ps-8 pe-4 lg:ps-16 lg:pe-10 md:ps-16 md:pe-10 overflow-x-hidden ">
				{data.slice(0, visibleCount).map((item) => (
					<Featurelist key={item.id} data={item} />
				))}
			</ul>
			{visibleCount < data.length && (
				<div className="text-center mt-8">
					<button
						onClick={handleShowMore}
						className="px-6 py-2 bg-black text-white rounded">
						Show More
					</button>
				</div>
			)}
		</div>
	);
}

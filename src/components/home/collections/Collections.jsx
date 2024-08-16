import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Collections() {
	useEffect(() => {
		AOS.init({
			duration: 500, // Duration of the animation in milliseconds
			easing: "ease-in-out", // Easing function
			once: true, // Whether animation should happen only once - while scrolling down
		});
	}, []);

	return (
		<div className="mt-20 mb-20">
			<div className="text-center font-Jost-Medium text-4xl">
				<h3>Collections</h3>
			</div>
			<div className="grid md:grid-cols-2 px-4 md:px-8 lg:px-16 gap-9 mt-20">
				<Link to="/summer">
					<div
						className="aspect-[4/5] md:aspect-[4/5] xl:aspect-[3/3] 2xl:aspect-[3/3] sm:aspect-[2/1] relative"
						data-aos="fade-right">
						<div className="absolute inset-0 bg-black bg-opacity-45 z-10  flex justify-center items-center font-Jost-Medium">
							<h2 className="text-3xl text-white mt-56  tracking-wide text-opacity-60  2xl:text-6xl xl:text-5xl lg:text-4xl  ">
								Summer Collection
							</h2>
						</div>
						<img
							src="https://i.pinimg.com/564x/fa/8e/29/fa8e29e12a71da6267281ac8b35ea876.jpg"
							alt=""
							className="w-[100%] h-[100%] object-cover object-top"
						/>
					</div>
				</Link>
				<Link to="/winter">
					<div
						className="aspect-[4/5] md:aspect-[4/5] sm:aspect-[2/1] xl:aspect-[3/3] 2xl:aspect-[3/3] relative overflow-hidden"
						data-aos="fade-left">
						<div className="absolute inset-0 bg-black bg-opacity-45 z-10 flex justify-center items-center font-Jost-Medium">
							<h2 className="  2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl text-white mt-56  tracking-wide text-opacity-60">
								Winter Collection
							</h2>
						</div>
						<img
							src="https://i.pinimg.com/564x/66/14/5d/66145df8b917c872d16c2cbecbc14bb0.jpg"
							alt=""
							className="w-[100%] h-[100%] object-cover object-top"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
}

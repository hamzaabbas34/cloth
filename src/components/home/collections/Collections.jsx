import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
			<div className="grid md:grid-cols-2 px-16 gap-9 mt-20">
				<div
					className="aspect-[4/5] md:aspect-[4/5] xl:aspect-[3/3] 2xl:aspect-[3/3] sm:aspect-[2/1]"
					data-aos="fade-up" // AOS attribute
				>
					<img
						src="https://i.pinimg.com/564x/fa/8e/29/fa8e29e12a71da6267281ac8b35ea876.jpg"
						alt=""
						className="w-[100%] h-[100%] object-cover object-top aspect-[1/1]"
					/>
				</div>
				<div
					className="aspect-[4/5] md:aspect-[4/5] sm:aspect-[2/1] xl:aspect-[3/3] 2xl:aspect-[3/3] overflow-hidden"
					data-aos="fade-up" // AOS attribute
				>
					<img
						src="https://i.pinimg.com/564x/66/14/5d/66145df8b917c872d16c2cbecbc14bb0.jpg"
						alt=""
						className=" w-[100%] h-[100%] object-cover object-top aspect-[1/1]"
					/>
				</div>
			</div>
		</div>
	);
}

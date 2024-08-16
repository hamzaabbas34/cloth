import React, { useState, useEffect } from "react";
// import data from "../../data.json";
import Navbar from "../navbar/Navbar";
import "./Home.css"; // Ensure you create and import the CSS file for styles
import Collections from "./collections/Collections";
import Features from "./Feature/Features";
import Shapingd from "./shaping/ Shapingd";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const images1 = [
	"https://i.pinimg.com/564x/8d/3f/6f/8d3f6f9223b9d728e3738697a5dc2c63.jpg", // Replace with your image paths
	"https://i.pinimg.com/564x/de/12/3f/de123f9d2a5b32f0837a9833fbaf4d02.jpg",
	"https://i.pinimg.com/564x/db/d7/a3/dbd7a31e26ef366b6b0e1d8ed4c6df6e.jpg",
];
const images2 = [
	"https://i.pinimg.com/564x/de/12/3f/de123f9d2a5b32f0837a9833fbaf4d02.jpg", // Replace with your image paths
	"https://i.pinimg.com/564x/db/d7/a3/dbd7a31e26ef366b6b0e1d8ed4c6df6e.jpg",
	"https://i.pinimg.com/564x/8d/3f/6f/8d3f6f9223b9d728e3738697a5dc2c63.jpg",
];
const images3 = [
	"https://i.pinimg.com/564x/db/d7/a3/dbd7a31e26ef366b6b0e1d8ed4c6df6e.jpg", // Replace with your image paths
	"https://i.pinimg.com/564x/8d/3f/6f/8d3f6f9223b9d728e3738697a5dc2c63.jpg",
	"https://i.pinimg.com/564x/de/12/3f/de123f9d2a5b32f0837a9833fbaf4d02.jpg",
];

const text1 = ["Summer", "Winter"]; // Texts corresponding to images

export default function Home() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);

			setTimeout(() => {
				setCurrentImageIndex((prevIndex) =>
					prevIndex === images1.length - 1 ? 0 : prevIndex + 1
				);
				setFade(true);
			}, 300); // This timeout should match the transition duration in CSS
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		preloadImages(images1);
		preloadImages(images2);
		preloadImages(images3);
	}, []);

	const preloadImages = (images) => {
		images.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	};

	return (
		<div className="relative overflow-hidden">
			<Navbar />
			<div className="image-container mt-24">
				<div className="text-overlay">
					<div
						className={`overlay-inside font-Jost-Regular ${
							fade ? "opacity-100" : "opacity-0"
						}`}>
						<Link to={text1[currentImageIndex]?.toLowerCase() || ""}>
							<div className={`text-container  tron ${fade && " troff"}`}>
								<p>Arrive</p>
								<h2>{text1[currentImageIndex]}</h2>
								<h2>Collections</h2>
								<button>Shop</button>
							</div>
						</Link>
					</div>
				</div>
				<div className="image-set  im1">
					<img
						src={images1[currentImageIndex]}
						alt="Slideshow"
						className={`image ${fade ? "fade-in" : "fade-out"}`}
					/>
				</div>
				<div className="image-set m2 ">
					<img
						src={images2[currentImageIndex]}
						alt="Slideshow"
						className={`image ${fade ? "fade-in" : "fade-out"}`}
					/>
				</div>
				<div className="image-set  m3">
					<img
						src={images3[currentImageIndex]}
						alt="Slideshow"
						className={`image ${fade ? "fade-in" : "fade-out"}`}
					/>
				</div>
			</div>
			<Collections />
			<Features />
			<Shapingd />
			<Footer />
		</div>
	);
}

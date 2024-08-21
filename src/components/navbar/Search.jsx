// import React from "react";
// import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom";
// import Featurelist from "../home/Feature/FeatureProductlist/Featurelist";

// export default function Search({
// 	len,
// 	setSearch,
// 	search,
// 	cartItems,
// 	filteredData,
// 	searchbtn,
// 	searchRef,
// }) {
// 	return (
// 		<>
// 			{searchbtn && (
// 				<div
// 					ref={searchRef}
// 					className={`fixed top-0 left-0 flex flex-col justify-between items-center z-[10000] w-full ${
// 						len > 5 ? "h-screen" : "max-h-fit"
// 					} overflow-y-auto shadow-lg`}>
// 					<div
// 						className={`flex flex-col shadow-lg justify-between items-center w-full ${
// 							len > 5 ? "h-[80vh] bg-emerald-400" : "h-fit"
// 						} bg-white lg:px-16 md:px-10 px-4 lg:py-12 md:py-12 pb-5 myscrol overflow-y-auto`}>
// 						<div className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full">
// 							<div className="relative w-full lg:w-auto md:w-auto">
// 								<Icon
// 									icon="emojione-monotone:womans-clothes"
// 									width="2rem"
// 									height="2rem"
// 									style={{ color: "black" }}
// 									className="ms-5 lg:block md:block hidden"
// 								/>
// 								<div className="flex justify-between items-center lg:hidden md:hidden w-full mt-2 mb-6">
// 									<div className="font-Jost-Medium my-2">Search Store</div>
// 									<button onClick={() => setSearch("")}>
// 										<Icon
// 											icon="akar-icons:cross"
// 											width="2rem"
// 											height="2rem"
// 											style={{ color: "black" }}
// 										/>
// 									</button>
// 								</div>
// 							</div>

// 							<div className="w-full flex justify-center relative">
// 								<input
// 									type="text"
// 									className="lg:w-1/2 md:w-3/4 sm:w-full w-full px-3 py-3 focus:outline-black border-2 border-black border-opacity-30 rounded-md font-Jost-Regular"
// 									placeholder="Search here ....."
// 									value={search} // Make sure the input value is controlled by the `search` state
// 									onChange={(e) => setSearch(e.target.value)}
// 								/>
// 								<button className="absolute top-[10px] lg:right-[26%] md:right-[18%] sm:right-[2%] right-[2%] z-10">
// 									<Icon
// 										icon="bitcoin-icons:search-filled"
// 										width="2rem"
// 										height="2rem"
// 										style={{ color: "black" }}
// 									/>
// 								</button>
// 								{search.length > 3 && (
// 									<button
// 										className="absolute top-[18px] lg:right-[30%] xl:right-[29%] md:right-[25%] sm:right-[5%] right-[10%] z-10"
// 										onClick={() => setSearch("")} // Clear the search input when clicked
// 									>
// 										<Icon
// 											icon="akar-icons:cross"
// 											width="1rem"
// 											height="1rem"
// 											style={{ color: "black" }}
// 										/>
// 									</button>
// 								)}
// 							</div>

// 							<button className="relative lg:block md:block hidden">
// 								<Link to="/cart">
// 									<Icon
// 										icon="material-symbols-light:shopping-bag-outline"
// 										width="2.2rem"
// 										height="2.2rem"
// 										style={{ color: "black" }}
// 									/>
// 								</Link>
// 								{cartItems.length > 0 && (
// 									<div className="font-Jost-Regular text-[.7rem] absolute right-[-8px] top-[-1px] h-5 w-5 flex justify-center items-center rounded-full bg-red-500 text-white">
// 										{cartItems.length}
// 									</div>
// 								)}
// 							</button>
// 						</div>
// 						<div className="w-full mt-5">
// 							{search ? (
// 								<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-20 mb-16 px-4 md:px-8 lg:px-16">
// 									{filteredData.map((item) =>
// 										item && item.heading ? (
// 											<li key={item.id} className="flex justify-center">
// 												<Featurelist data={item} />
// 											</li>
// 										) : null
// 									)}
// 								</ul>
// 							) : (
// 								<div className="text-center mt-5">
// 									<p>No results found.</p>
// 								</div>
// 							)}
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// }
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Featurelist from "../home/Feature/FeatureProductlist/Featurelist";

export default function Search({
	len,
	setSearch,
	search,
	cartItems,
	filteredData,
	searchbtn,
	searchRef,
	setSearchBtn,
}) {
	return (
		<>
			<div
				ref={searchRef}
				className={`fixed top-0 left-0 flex flex-col justify-between items-center z-[10000] w-full transition-transform duration-500  ease-in-ou  ${
					len > 5 ? "h-screen" : "max-h-fit"
				}   t   ${
					searchbtn
						? "translate-y-[0px] transition-all"
						: "translate-y-[-180px]"
				}   overflow-y-auto shadow-lg`}>
				<div
					className={`flex flex-col shadow-lg justify-between items-center w-full ${
						len > 5 ? "h-screen bg-emerald-400" : "h-fit"
					} bg-white lg:px-16 md:px-10 px-4 lg:py-12 md:py-12 pb-5 myscrol overflow-y-auto`}>
					<div className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full">
						<div className="relative w-full lg:w-auto md:w-auto">
							<Icon
								icon="emojione-monotone:womans-clothes"
								width="2rem"
								height="2rem"
								style={{ color: "black" }}
								className="ms-5 lg:block md:block hidden"
							/>
							<div className="flex justify-between   items-center lg:hidden md:hidden w-full mt-2 mb-6">
								<div className="font-Jost-Medium my-2">Search Store</div>
								<button onClick={() => setSearchBtn(false)}>
									<Icon
										icon="akar-icons:cross"
										width="1rem"
										height="1rem"
										style={{ color: "black" }}
									/>
								</button>
							</div>
						</div>

						<div className="w-full flex justify-center relative">
							<input
								type="text"
								className="lg:w-1/2 md:w-3/4 sm:w-full w-full px-3 py-3 focus:outline-black border-2 border-black border-opacity-30 rounded-md font-Jost-Regular"
								placeholder="Search here ....."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<button className="absolute top-[10px] lg:right-[26%] md:right-[15%] sm:right-[2%] right-[2%] z-10">
								<Icon
									icon="bitcoin-icons:search-filled"
									width="2rem"
									height="2rem"
									style={{ color: "black" }}
								/>
							</button>
							{search.length > 3 && (
								<button
									className="absolute top-[18px] lg:right-[30%] xl:right-[29%] md:right-[20%] sm:right-[8%] right-[10%] z-10"
									onClick={() => setSearch("")}>
									<Icon
										icon="akar-icons:cross"
										width="1rem"
										height="1rem"
										style={{ color: "black" }}
									/>
								</button>
							)}
						</div>

						<button className="relative lg:block md:block hidden">
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
					</div>
					<div className="w-full mt-5">
						{search.length > 0 ? (
							filteredData.length > 0 ? (
								<ul
									data-aos="fade-right"
									className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-20 mb-16 px-4 md:px-8 lg:px-16">
									{filteredData.map((item) =>
										item && item.heading ? (
											<li key={item.id} className="flex justify-center">
												<Featurelist data={item} />
											</li>
										) : null
									)}
								</ul>
							) : (
								<div className="text-center mt-5">
									<p>No results found.</p>
								</div>
							)
						) : null}
					</div>
				</div>
			</div>
		</>
	);
}

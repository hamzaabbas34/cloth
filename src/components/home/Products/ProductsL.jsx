import React from "react";
import data from "../../../data.json";
import ProductItem from "./ProductItem"; // Updated to PascalCase

const ProductList = () => {
	const productsPerPage = 5;

	return (
		<section
			className="facest-filters-section"
			data-section-type="collection-template"
			data-section-id="template--17015539400936__main"
			data-filters-type="storefront_filters"
			data-filters-position="leftColumn"
			data-enable-filters="false"
			data-enable-sorting="false"
			data-show-col-switchers="true"
			data-pagination-type="paginate"
			data-product-count={productsPerPage}
			data-initial-column="4"
			data-view="collection">
			<ProductItem products={data} productsPerPage={productsPerPage} />{" "}
			{/* Updated here */}
		</section>
	);
};

export default ProductList;
ہن
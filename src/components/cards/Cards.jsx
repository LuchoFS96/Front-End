import Card from "./Card";

const Cards = ({ handleAddToCart, products, shop }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mobile:mt-12 md:mt-5 mobile:px-auto mobile:ml-4 md:mx-auto">
			{products &&
				products?.map((product, index) => {
					if (product.stock > 0) {
						return (
							<div key={index} className="">
								<Card
									handleAddToCart={handleAddToCart}
									product={product}
									shop={shop}
								/>
							</div>
						);
					}

					return null;
				})}
		</div>
	);
};

export default Cards;

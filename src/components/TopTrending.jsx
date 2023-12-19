import React, { useState, useEffect } from "react";
import Carousel from "better-react-carousel";
import Card from "./Card";
import PDs from "./PDs";

const TopTrending = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const api = 'https://dummyjson.com/products';

  useEffect(() => {
    // Fetch data from the API
    fetch(api)
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex-col w-full justify-center items-center mt-5 py-3 bg-white rounded-3xl">
      <h1
        className="text-md sm:text-3xl pb-3"
        style={{ paddingLeft: "43%", fontFamily: "Crimson Text,serif" }}
      >
        PRODUCTS
      </h1>

      <div className="w-full">
        <Carousel
          cols={
            window.innerWidth > 1580
              ? 5
              : window.innerWidth > 1300
              ? 4
              : window.innerWidth > 1032
              ? 3
              : 2
          }
          rows={1}
          gap={window.innerWidth < 750 ? 15 : 20}
          loop
        >
          {products.map((item, i) => (
            <Carousel.Item key={i}>
              <div onClick={() => handleCardClick(item)}>
                <Card item={item} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Render ProductDetail component when a product is selected */}
      {selectedProduct && (
        <PDs product={selectedProduct} />
      )}
    </div>
  );
};

export default TopTrending;

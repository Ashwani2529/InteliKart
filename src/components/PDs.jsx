import React from 'react'

const PDs = ({product}) => {
    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        thumbnail,
        brand,
        category,
        images,
      } = product;
      
    
  return (
    <div style={{ minHeight: "80vh", maxHeight: "85vh" }}>
        <div className="flex w-1/3 float-left p-1">
          <div className="mx-3 w-1/6 my-1">
            <img
              className="w-20 h-16 block mb-2 hover:border-blue-600 hover:border-2 transition-transform ease-out duration-500 transform hover:scale-110"
              src={images[0]}
              alt=""
            />
            <img
              className="w-20 h-16 block mb-2 hover:border-blue-600 hover:border-2 transition-transform ease-out duration-500 transform hover:scale-110"
src={images[1]}              alt=""
            />
            <img
              className="w-20 h-16 block mb-2 hover:border-blue-600 hover:border-2 transition-transform ease-out duration-500 transform hover:scale-110"
              src={images[2]}                alt=""
            />
            
          </div>

          <img
            className="w-5/6"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="block float-right w-3/5 p-2">
          <div className="block">
           
            <p className="text-gray-600 text-sm">
              Home<i class="mx-1 bi bi-chevron-right"></i>Product
              <i class="mx-1 bi bi-chevron-right"></i>{category}
            </p>
            <h2 className="mt-2">Product: <span className=' text-xl'>{title}</span></h2>
            <span className="text-md font-semibold flex my-2">
              MRP Rs.{price} (Inclusive of all taxes) {" "}

            </span>
            <span className="text-base">
             Discount:- {discountPercentage}%

            </span><br/>
            <span className='text-lg my-2'>Description: {description}</span>
          </div>

          <div className="block my-2"><span className="flex">
             In Stock:- 
              {stock}{" "}

            </span>
              </div>
          <div className="flex mx-2 w-1/2 my-3">
            <button className="btn btn-warning">Add to Cart</button>
            <button className="mx-2 btn btn-primary">Buy Now</button>
          </div>
          
          <div className="flex justify-between my-5 mr-5">
            <div className="block">
              <p className="flex text-gray-500">
                <img
                  className="w-6 h-6 mr-2 "
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
                  alt=""
                />
                Deliver to
              </p>
              <input
                placeholder="Enter delivery pincode"
                className="my-2 border-b outline-none w-40 border-black"
              ></input>
              <span className="cursor-pointer mx-1 text-sm border-black border-1 p-2 bg-blue-400">Check</span>
            </div>
          

          </div>
          <div className="flex justify-between">
            {/* <div className="my-1 block">
              <p>
                <span className="flex">
                  Delivery by 15 Sep, Friday
                </span>
              </p>
              <p className="text-blue-700 my-2 cursor-pointer">View Details</p>
            </div> */}
            <div className="flex">
              <p className="text-gray-500">Seller </p>
              <div className="mx-2 block">
                <p className="flex">
                  {brand}{" "}
                  <span className="text-white bg-blue-400 flex items-center justify-center h-6 w-12 rounded-2xl p-1 mx-2">
                    {rating}<i className="mx-1 text-xs bi bi-star-fill"></i>
                  </span>
                </p>
                <li className="flex my-2">
                  10 Days Return Policy{" "}
                  <span className="cursor-pointer mx-1 rounded-full bg-gray-100 w-4 h-4 p-2 text-sm border-black border-1 flex items-center justify-center">
                    ?
                  </span>
                </li>
              </div>
            </div></div>
        </div>
      </div>

  )
}

export default PDs
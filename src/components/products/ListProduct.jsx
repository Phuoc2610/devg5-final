import React, { useState } from 'react';
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/gaming.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/smartwatch2-removebg-preview.png";
import Image5 from "../../assets/category/speaker.png";
import Image6 from "../../assets/category/vr.png";
import Image7 from "../../assets/category/watch.png";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 2,
    img: Image2,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 3,
    img: Image3,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 4,
    img: Image4,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 5,
    img: Image5,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 6,
    img: Image6,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 7,
    img: Image7,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 8,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 9,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 10,
    img: Image2,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 11,
    img: Image3,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 12,
    img: Image4,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 13,
    img: Image5,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 14,
    img: Image6,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 15,
    img: Image7,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 16,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 17,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 18,
    img: Image2,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 19,
    img: Image3,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 20,
    img: Image4,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 21,
    img: Image5,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 22,
    img: Image6,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 23,
    img: Image7,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 24,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 25,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 26,
    img: Image2,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 27,
    img: Image3,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 28,
    img: Image4,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 29,
    img: Image5,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 30,
    img: Image6,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 31,
    img: Image7,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
  {
    id: 32,
    img: Image1,
    title: "Boat Headphone",
    discountPrice: "150$",
    storage: "128GB",
    price: "120$",
    color: "bg-black"
  },
];

const ListProduct = () => {
  const itemsPerPage = 8;
  const [products, setProducts] = useState(ProductsData.slice(0, itemsPerPage));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreProducts = () => {
    const currentLength = products.length;
    if (currentLength >= ProductsData.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const nextProducts = ProductsData.slice(currentLength, currentLength + itemsPerPage);
      setProducts((prevProducts) => [...prevProducts, ...nextProducts]);
    }, 1500);
  };

  return (
    <div className="w-[90%] mx-auto max-md:w-full">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={
          <Loading/>
        }
        endMessage={
          <></>
        }
        style={{ overflow: 'unset' }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
          {products.map((data) => (
            <div
              data-aos="fade-up"
              className="px-4 md:px-12 xl:px-14 py-3 rounded-3xl grid place-items-center border-2 border-[#00000040] dark:border-[#ffffff40]"
              key={data.id}
            >
              <Link to="/product">
                <div className="relative">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[110px] w-[110px] md:h-[130px] md:w-[130px] object-cover rounded-md bg-transparent"
                  />
                </div>
              </Link>
              <h2 className="font-semibold text-lg">{data.title}</h2>
              <div className="flex items-center py-1">
                <h2 className="px-2">Color: </h2>
                <div className={`h-4 w-4 ${data.color} rounded-full`}></div>
              </div>
              <div className="border-solid border-[1px] border-black dark:border-[#ffffff70] px-2 rounded-md">
                {data.storage}
              </div>
              <div className="flex justify-around w-full py-1">
                <h2 className="font-bold">{data.price}</h2>
                <h2 className="font-normal line-through">{data.discountPrice}</h2>
              </div>
              <button className="btn-add my-1 dark:text-white">Add to cart</button>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListProduct;


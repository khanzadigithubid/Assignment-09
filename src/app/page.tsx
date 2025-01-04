'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setList(res))
      .catch(err => console.error("Error fetching data:", err));
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {list.map((item) => {
          const { image, id, title} = item;

          return (
            <Link href={`details/${id}`} key={id}>
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <img src={image} alt={title} className="h-40 object-contain mb-4" />
                <h3 className="text-center text-gray-700 text-sm">{title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
'use client';
import Categories from "../components/SideBar";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
}

const Page = () => {
  const [list, setList] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterProductsByCategory();
  }, [selectedCategory, list]);

  function getData() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setList(res))
      .catch((err) => console.error("Error fetching data:", err));
  }

  function filterProductsByCategory() {
    if (!selectedCategory) {
      setFilteredProducts(list);
    } else {
      const filtered = list.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">

      <Categories onCategorySelect={setSelectedCategory} />

      <div className="flex-1 py-8 px-4 md:px-8">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          {selectedCategory ? `${selectedCategory} Products` : "All Products"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((item) => {
            const { id, image, title } = item;

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
    </div>
  );
};

export default Page;

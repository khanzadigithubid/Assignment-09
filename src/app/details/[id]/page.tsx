'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetail = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data);
                    setLoading(false);
                })
                .catch((err) => console.error("Error fetching product:", err));
        }
    }, [id]);

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 mx-auto animate-spin"></div>
                <p className="mt-4 text-2xl font-semibold text-gray-700">Loading...</p>
            </div>
        );
    }

    if (!product) {
        return <div className="text-center py-8 text-lg text-gray-700">Product not found</div>;
    }

    const { image, title, price, description, category } = product;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
            <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8 items-center gap-8">
                <img src={image} alt={title} className="w-64 h-64 object-contain" />
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                    <p className="text-sm text-gray-600 mt-4 mb-6">{description}</p>
                    <p className="text-lg font-bold text-blue-500">${price}</p>
                    <span className="inline-block mt-2 text-sm font-bold text-gray-800">
                        Category: {category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

"use client";
import React, { useEffect, useState } from "react";
import api from "../../lib/api";
import Link from "next/link";
import { useParams } from "next/navigation";

const SubcategoryPage = () => {
  const params = useParams();
  const subcategoryId = params.id;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/products?subcategoryId=${subcategoryId}`).then(res => setProducts(res.data));
  }, [subcategoryId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p._id} className="border p-4 rounded hover:bg-gray-100">
            <h2 className="font-bold">{p.name}</h2>
            <p>Price: ₹{p.price}</p>
            <p>Vendor: {p.vendorId?.name}</p>
            <p>Variants: {p.variants.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;

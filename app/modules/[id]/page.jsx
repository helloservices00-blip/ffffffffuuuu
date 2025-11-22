"use client";
import React, { useEffect, useState } from "react";
import api from "../../lib/api";
import Link from "next/link";

const ModulePage = ({ params }) => {
  const { id } = params;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get(`/categories?moduleId=${id}`).then(res => setCategories(res.data));
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map(c => (
          <Link key={c._id} href={`/products/${c._id}`}>
            <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">{c.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModulePage;

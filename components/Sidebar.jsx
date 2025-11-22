import React from "react";
import Link from "next/link";

const Sidebar = () => (
  <div className="w-64 bg-gray-100 h-screen p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <ul>
      <li className="mb-2"><Link href="/dashboard">Dashboard</Link></li>
      <li className="mb-2"><Link href="/modules">Modules</Link></li>
      <li className="mb-2"><Link href="/categories">Categories</Link></li>
      <li className="mb-2"><Link href="/subcategories">Subcategories</Link></li>
      <li className="mb-2"><Link href="/vendors">Vendors</Link></li>
      <li className="mb-2"><Link href="/products">Products</Link></li>
    </ul>
  </div>
);

export default Sidebar;

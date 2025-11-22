import React, { useEffect, useState } from "react";
import api from "../../lib/api";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [modules, setModules] = useState([]);
  const [categories, setCategories] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const modulesRes = await api.get("/modules");
      setModules(modulesRes.data);

      const categoriesRes = await api.get("/categories");
      setCategories(categoriesRes.data);

      const vendorsRes = await api.get("/vendors");
      setVendors(vendorsRes.data);

      const productsRes = await api.get("/products/vendor/ALL"); // Optional: fetch all products
      setProducts(productsRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-200 p-4 rounded">Modules: {modules.length}</div>
          <div className="bg-green-200 p-4 rounded">Categories: {categories.length}</div>
          <div className="bg-yellow-200 p-4 rounded">Vendors: {vendors.length}</div>
          <div className="bg-red-200 p-4 rounded">Products: {products.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

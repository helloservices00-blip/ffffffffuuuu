"use client";
import React, { useEffect, useState } from "react";
import api from "../../lib/api";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Modules = () => {
  const [modules, setModules] = useState([]);
  const [name, setName] = useState("");

  const fetchModules = async () => {
    const res = await api.get("/modules");
    setModules(res.data);
  };

  const addModule = async () => {
    if (!name) return alert("Enter module name");
    await api.post("/modules", { name });
    setName("");
    fetchModules();
  };

  const deleteModule = async (id) => {
    if (confirm("Delete module?")) {
      await api.delete(`/modules/${id}`);
      fetchModules();
    }
  };

  useEffect(() => { fetchModules(); }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Modules</h1>
        <div className="mb-4">
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
                 className="border p-2 mr-2" placeholder="Module Name" />
          <button onClick={addModule} className="bg-blue-500 text-white p-2 rounded">Add Module</button>
        </div>
        <ul>
          {modules.map(m => (
            <li key={m._id} className="mb-2 flex justify-between items-center">
              {m.name}
              <button onClick={() => deleteModule(m._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modules;

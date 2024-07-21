import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import supabase from "../config/supabaseClient";

export default function Add() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [x, setX] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .insert([{ name, img, youtube, instagram, x, description }])
      .select();
    if (error) {
      console.log(error);
      alert(error);
    }
    if (data) {
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-800 w-full h-screen pt-10">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Add a Creator</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL:
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="Enter image URL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="youtube"
                className="block text-sm font-medium text-gray-700"
              >
                YouTube URL:
              </label>
              <input
                type="url"
                id="youtube"
                name="youtube"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                placeholder="Enter YouTube URL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="instagram"
                className="block text-sm font-medium text-gray-700"
              >
                Instagram URL:
              </label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Enter Instagram URL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="x"
                className="block text-sm font-medium text-gray-700"
              >
                X URL:
              </label>
              <input
                type="url"
                id="x"
                name="x"
                value={x}
                onChange={(e) => setX(e.target.value)}
                placeholder="Enter X (Twitter) URL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                maxLength={61}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

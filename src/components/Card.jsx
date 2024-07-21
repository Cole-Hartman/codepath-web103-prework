import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../config/supabaseClient";
import youtubeIcon from "../assets/youtube.svg";
import instagramIcon from "../assets/instagram.svg";
import xIcon from "../assets/x.svg";

export default function Card({
  name,
  img,
  youtube,
  instagram,
  x,
  description,
  id,
  onDelete,
}) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id)
      .select();
    if (error) {
      console.log(id);
      console.log("Error deleting card");
    }
    if (data) {
      onDelete(id);
    }
  };

  return (
    <>
      <div
        className="bg-black m-2 rounded-lg flex flex-col justify-center items-left font-mono bg-custom-gradient text-white overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="name"
          className="bg-black px-2 my-1 rounded-xl bg-opacity-50 text-lg"
        >
          {name}
        </div>
        <div
          id="icons"
          className="bg-black px-2 py-1 my-1 rounded-xl bg-opacity-50"
        >
          {youtube && (
            <button type="submit" id="youtube">
              <a href={youtube} rel="noreferrer" target="_blank">
                <img
                  src={youtubeIcon}
                  alt="youtube icon"
                  className="h-10 pt-1 px-1"
                />
              </a>
            </button>
          )}

          {instagram && (
            <button type="submit" id="instagram">
              <a href={instagram} rel="noreferrer" target="_blank">
                <img
                  src={instagramIcon}
                  alt="instagram icon"
                  className="h-9 px-1"
                />
              </a>
            </button>
          )}
          {x && (
            <button type="submit" id="x">
              <a href={x} rel="noreferrer" target="_blank">
                <img src={xIcon} alt="x icon" className="h-9 px-1" />
              </a>
            </button>
          )}
        </div>
        <div
          id="description"
          className="bg-black px-2 my-1 rounded-xl bg-opacity-50"
        >
          {description}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="border border-black rounded-xl px-4 py-2 bg-black mx-3 hover:border-gray-700 hover:bg-gray-700 hover:shadow-lg"
          >
            <Link to={`/view/${id}`}>VIEW</Link>
          </button>
          <button
            type="submit"
            className="border border-black rounded-xl px-4 py-2 bg-black mx-3 hover:border-gray-700 hover:bg-gray-700 hover:shadow-lg"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

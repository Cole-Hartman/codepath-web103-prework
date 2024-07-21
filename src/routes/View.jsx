import supabase from "../config/supabaseClient";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Pencil from "../assets/pencil.svg";
import youtubeIcon from "../assets/youtube.svg";
import instagramIcon from "../assets/instagram.svg";
import xIcon from "../assets/x.svg";

export default function View() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [x, setX] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.log("Error fetching creator in view.");
      }
      if (data) {
        setName(data.name);
        setImg(data.img);
        setYoutube(data.youtube);
        setInstagram(data.instagram);
        setX(data.x);
        setDescription(data.description);
      }
    };
    fetchCreator();
  }, [id]);

  return (
    <>
      <Header />
      <section className="w-full h-screen bg-gray-800 flex justify-center pt-10 text-3xl text-white gap-10">
        <div className="flex gap-10 mr-52">
          <div className="">
            {img && (
              <img
                src={img}
                alt="creator"
                className="h-2/6 border-2 shadow-xl border-black rounded-lg"
              />
            )}
          </div>
          <div>
            <div className="">{name && <h1>{name}</h1>}</div>

            <div
              id="icons"
              className="px-2 py-3 gap-5 my-1 rounded-xl bg-opacity-50 flex"
            >
              {youtube && (
                <a href={youtube} rel="noreferrer" target="_blank">
                  <img
                    src={youtubeIcon}
                    alt="youtube icon"
                    className="h-10 pt-1 px-1"
                  />
                </a>
              )}
              {instagram && (
                <a href={instagram} rel="noreferrer" target="_blank">
                  <img
                    src={instagramIcon}
                    alt="instagram icon"
                    className="h-9 px-1"
                  />
                </a>
              )}
              {x && (
                <a href={x} rel="noreferrer" target="_blank">
                  <img src={xIcon} alt="x icon" className="h-9 px-1" />
                </a>
              )}
            </div>

            {description && <div>{description}</div>}
          </div>

          <div className="">
            <Link to={`/edit/${id}`}>
              <img src={Pencil} alt="edit icon" className="h-10 pl-20" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

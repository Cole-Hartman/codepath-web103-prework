import supabase from "../config/supabaseClient";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Pencil from "../assets/pencil.svg";

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
        <div className="border border-red-500 flex">
          <div className="">
            <img src={img} alt="creator" className="h-2/6" />
          </div>
          <div className="">
            <div>{name && <div>{name}</div>}</div>
          </div>
          <div className="">
            <Link to={`/edit/${id}`}>
              <img src={Pencil} alt="edit icon" className="h-10" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

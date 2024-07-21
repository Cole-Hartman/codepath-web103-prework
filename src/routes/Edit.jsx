import supabase from "../config/supabaseClient";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Edit() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [x, setX] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = supabase
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
  });

  return (
    <>
      <Header />
      <div>{id}</div>
      <div>EDIT</div>
    </>
  );
}

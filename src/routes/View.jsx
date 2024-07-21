import supabase from "../config/supabaseClient";
import { useParams } from "react-router-dom";

export default function View() {
  const { id } = useParams();

  return (
    <>
      <div>{id}</div>
    </>
  );
}

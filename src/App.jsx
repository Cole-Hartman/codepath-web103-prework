import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import supabase from "./config/supabaseClient";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [creators, setCreators] = useState(null);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select();

      if (error) {
        setFetchError("Could not fetch creator data");
        console.log(error);
        setCreators(null);
      }
      if (data) {
        setCreators(data);
        setFetchError(null);
      }
    };

    fetchCreators();
  }, []);

  const handleDelete = (id) => {
    setCreators((prevCreators) => {
      return prevCreators.filter((creator) => creator.id !== id);
    });
  };

  return (
    <>
      <Header />
      <div className="bg-gray-800 h-screen sm:flex flex-col items-center font-mono hidden sm:block overflow-hidden">
        <section
          id="cards grid"
          className="h-screen w-full grid grid-cols-3 grid-rows-3"
        >
          {fetchError && <p>{fetchError}</p>}
          {creators?.length > 0 ? (
            creators?.map((creator) => (
              <Card
                key={creator.id}
                name={creator.name}
                img={creator.img}
                youtube={creator.youtube}
                instagram={creator.instagram}
                x={creator.x}
                description={creator.description}
                id={creator.id}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="flex justify-center items-center row-span-2 col-span-3 text-3xl text-white">
              <h1>No Creators</h1>
            </div>
          )}
        </section>
      </div>
      <h1 className="block bg-gray-800 h-screen sm:hidden text-3xl font-bold text-center pt-52">
        Mobile Not Supported
      </h1>
    </>
  );
}

export default App;

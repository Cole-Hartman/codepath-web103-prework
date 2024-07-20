import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Add from "./routes/Add";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-gray-800 h-screen flex flex-col items-center font-mono hidden sm:block overflow-hidden">
        <div className="bg-black text-white text-3xl px-5 py-2 h-1/6 w-full flex flex-col  justify-center items-center">
          <h1 id="heading" className="my-3">
            CREATORVERSE
          </h1>
          <button
            type="button"
            className="border border-gray-800 bg-gray-800 px-3 py-1 mb-2 rounded-xl hover:bg-gray-700 hover:border-gray-700 hover:shadow-lg text-white"
          >
            <Link to={"add"}>ADD A CREATOR</Link>
          </button>
        </div>
        <section
          id="cards grid"
          className="h-screen w-full grid grid-cols-3 grid-rows-3"
        >
          {/* <Add /> */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
      <h1 className="block sm:hidden text-3xl font-bold text-center pt-52">
        Mobile Not Supported
      </h1>
    </>
  );
}

export default App;

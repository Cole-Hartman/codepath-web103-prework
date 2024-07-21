import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black text-white text-3xl px-5 py-2 h-1/6 w-full flex-col  justify-center items-center hidden sm:block sm:flex">
      <h1 id="heading" className="my-3">
        CREATORVERSE
      </h1>
      <div className="flex gap-5">
        <button
          type="button"
          className="border border-gray-800 bg-gray-800 px-3 py-1 mb-2 rounded-xl hover:bg-gray-700 hover:border-gray-700 hover:shadow-lg text-white"
        >
          <Link to={"/"}>VIEW CREATORS</Link>
        </button>
        <button
          type="button"
          className="border border-gray-800 bg-gray-800 px-3 py-1 mb-2 rounded-xl hover:bg-gray-700 hover:border-gray-700 hover:shadow-lg text-white"
        >
          <Link to={"/add"}>ADD A CREATOR</Link>
        </button>
      </div>
    </div>
  );
}

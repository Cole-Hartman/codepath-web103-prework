import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";

export default function Card() {
  return (
    <>
      <div
        className="bg-cbrown-3 m-2 rounded-lg flex flex-col justify-center items-left font-mono bg-custom-gradient text-white overflow-hidden"
        style={{
          backgroundImage:
            "url(https://media.cnn.com/api/v1/images/stellar/prod/gsfc-20171208-archive-e001982-orig.jpg?c=original)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="name"
          className="bg-black px-2 my-1 rounded-xl bg-opacity-50 text-lg"
        >
          COLE HARTMAN
        </div>
        <div
          id="icons"
          className="bg-black px-2 py-1 my-1 rounded-xl bg-opacity-50"
        >
          <button type="submit" id="youtube">
            <img src={youtube} alt="youtube icon" className="h-10 pt-1 px-1" />
          </button>
          <button type="submit" id="instagram">
            <img src={instagram} alt="instagram icon" className="h-9 px-1" />
          </button>
          <button type="submit" id="x">
            <img src={x} alt="x icon" className="h-9 px-1" />
          </button>
        </div>
        <div
          id="description"
          className="bg-black px-2 my-1 rounded-xl bg-opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="border border-black rounded-xl px-4 py-2 bg-black mx-3 hover:border-gray-700 hover:bg-gray-700 hover:shadow-lg"
          >
            INFO
          </button>
          <button
            type="submit"
            className="border border-black rounded-xl px-4 py-2 bg-black mx-3 hover:border-gray-700 hover:bg-gray-700 hover:shadow-lg"
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}

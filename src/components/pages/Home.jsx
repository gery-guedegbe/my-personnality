import React from "react";
import { useNavigate } from "react-router-dom";
import Shapes from "../Shapes";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test");
  };
  return (
    <div className="dashed-grid-paper bg-cover bg-center h-screen">
      <div className="h-screen flex flex-col gap-6 items-center justify-center text-center py-10">
        <h1 className="font-redHat text-2xl md:text-3xl lg:text-5xl font-semibold mt-20 ">
          &lt;&lt;C'est une expérience incroyable que d'être enfin
          compris.&gt;&gt;
        </h1>
        <div className=" px-8 md:px-48 text-base  md:text-lg">
          Obtenez une description prodigieusement précise de vous-même, de vos
          motivations et de ce qui vous anime.
        </div>

        <button
          onClick={handleClick}
          className="violetGradient z-50 h-12 w-56 cursor-pointer select-none rounded-lg border-b-2 border-white bg-principal transition-all duration-150 [box-shadow:0px_2px_4px_0_#322f28] active:translate-y-2 active:border-b-0 active:[box-shadow:0px_0px_0px_0_#322f28, 0_0px_0_0_#4b463c]"
        >
          <span className="flex h-full flex-col items-center justify-center text-white text-lg font-medium">
            Passez le test{" "}
          </span>
        </button>

        {/* <button
          onClick={handleClick}
          className="z-50 nav-button hover:drop-shadow-lg flex items-center justify-center rounded-full border border-[#0c550c] bg-[#f6cae4] bg-gradient-to-tr from-[ #dd64dd] to-[#d12ed1]/70 px-7 py-2.5 text-base font-bold text-slate-800 ring-pink-200 ring-offset-2 ring-offset-slate-700 drop-shadow-[0px_1px_2px_rgb(0,0,0,0.3)] active:ring-1"
        >
          <span>Passez le test</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="ml-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Home;

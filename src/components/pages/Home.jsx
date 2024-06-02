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
          Obtenez en 10 minutes seulement une description de qui vous êtes et
          des raisons qui sous-tendent vos agissements.
        </div>

        <button
          onClick={handleClick}
          className="violetGradient z-50 h-12 w-56 cursor-pointer select-none rounded-lg border-b-2 border-white bg-principal transition-all duration-150 [box-shadow:0px_2px_4px_0_#322f28] active:translate-y-2 active:border-b-0 active:[box-shadow:0px_0px_0px_0_#322f28, 0_0px_0_0_#4b463c]"
        >
          <span className="flex h-full flex-col items-center justify-center text-white text-lg font-medium">
            Passez le test{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useContext, useEffect } from "react";
import { PersonalityContext } from "../../../Context/PersonalityContext";
import PercentageData from "../../PercentageData";
import ShareResult from "./ShareResult";

const Result = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleShare = () => {
    setIsOpen(!isOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  const {
    personalityType,
    percentages,
    personalityInfo,
    setPersonalityType,
    setPersonalityInfo,
    setPercentages,
  } = useContext(PersonalityContext);

  useEffect(() => {
    const storedPersonalityType = localStorage.getItem("personalityType");
    const storedPersonalityInfo = localStorage.getItem("personalityInfo");
    const storedPercentages = localStorage.getItem("percentages");

    if (storedPersonalityType) {
      setPersonalityType(storedPersonalityType);
    }
    if (storedPersonalityInfo) {
      setPersonalityInfo(JSON.parse(storedPersonalityInfo));
    }
    if (storedPercentages) {
      setPercentages(JSON.parse(storedPercentages));
    }

    console.log(storedPersonalityType, storedPercentages);
  }, [setPersonalityType, setPersonalityInfo, setPercentages]);

  if (!personalityInfo) {
    return <div>Loading...</div>;
  }

  console.log(personalityInfo);

  return (
    <div className="bg-white px-6 md:px-10 py-20 flex flex-col gap-8 items-center ">
      <div className="text-xl md:text-2xl lg:text-4xl font-bold mt-10">
        Votre type de personnalité
      </div>
      <div className=" flex flex-col gap-6 items-center justify-center text-center">
        <div className="text-4xl lg:text-5xl">({personalityType})</div>
        <div className="w-full">
          <PercentageData percentages={percentages} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 ">
        <div className="space-y-6">
          {personalityInfo.questions.map((q, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-2xl font-semibold">
                {q.question}
              </div>
              <p>{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex gap-2 items-center text-principal font-medium">
        <a
          href="https://www.metamorphoses.be/fr/ressources/mbti/tout-savoir-sur-le-mbti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-b hover:border-b-principal"
        >
          Intégralité des 16 profils de personnalité
        </a>
        <span className="text-lg">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
      </div>
      <div className="relative w-full">
        <div className="fixed bottom-16 right-10 md:bottom-16 md:right-20 flex flex-col-reverse gap-4 items-center">
          <button
            onClick={toggleShare}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl cursor-pointer text-white bg-principal hover: shadow transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ion-icon
              name="share-social-outline"
              className={`${isOpen ? "rotate-[-360deg]" : "rotate-[360deg]"}`}
              style={{ transition: "transform 0.5s" }}
            ></ion-icon>
          </button>
          <div
            className={`social-btn flex flex-col gap-3 items-center justify-center transition-opacity duration-500 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <ShareResult />
            <button
              onClick={copyToClipboard}
              className="w-11 h-11 bg-gray-600 text-white text-xl rounded-full flex items-center justify-center"
            >
              <ion-icon
                name={isCopied ? "checkmark-outline" : "copy-outline"}
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

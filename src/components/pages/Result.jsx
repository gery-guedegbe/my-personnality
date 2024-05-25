import React, { useContext, useEffect } from "react";
import { PersonalityContext } from "../../Context/PersonalityContext";
import PercentageData from "../PercentageData";

const Result = () => {
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
    </div>
  );
};

export default Result;

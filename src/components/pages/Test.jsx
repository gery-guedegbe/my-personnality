import React, { useState, useEffect, useContext, useRef } from "react";
import ScrollDown from "../ScrollDown";
import { useNavigate } from "react-router-dom";
import { questions } from "../../Data/Questions";
import {
  initialScores,
  updateScores,
  determinePersonalityType,
} from "../../Fonctions/analysis";
import { PersonalityContext } from "../../Context/PersonalityContext";

const Choices = [
  { width: "w-16", height: "h-16", point: 2 },
  { width: "w-12", height: "h-12", point: 1 },
  { width: "w-8", height: "h-8", point: 0 },
  { width: "w-12", height: "h-12", point: -1 },
  { width: "w-16", height: "h-16", point: -2 },
];

const Cards = [
  {
    content:
      "Découvrez comment votre type de personnalité influence de nombreux aspects de votre vie.",
  },
  {
    content:
      "Soyez vous-même et répondez en toute sincérité pour découvrir votre type de personnalité.",
  },
  {
    content:
      " Essayez de répondre intuitivement sans trop réfléchir à chaque question.",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Test = () => {
  const { setPersonalityType, setPersonalityInfo, setPercentages } =
    useContext(PersonalityContext);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [scores, setScores] = useState(initialScores);
  const [userChoices, setUserChoices] = useState(
    Array(questions.length).fill(null)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const resultButtonRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questions]));
  }, []);

  useEffect(() => {
    if (userChoices[currentQuestionIndex] !== null) {
      const selectedChoice = userChoices[currentQuestionIndex];
      setSelectedButton(selectedChoice);
    } else {
      setSelectedButton(null);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (
      currentQuestionIndex === shuffledQuestions.length - 1 &&
      userChoices.every((choice) => choice !== null)
    ) {
      resultButtonRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentQuestionIndex, userChoices, shuffledQuestions.length]);

  const handleClick = (index, point) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const dimension = currentQuestion.dimension;

    const previousChoice = userChoices[currentQuestionIndex];

    if (previousChoice !== null) {
      const previousPoint = Choices[previousChoice].point;
      const updatedScores = updateScores(scores, dimension, -previousPoint);
      setScores(updateScores(updatedScores, dimension, point));
    } else {
      const updatedScores = updateScores(scores, dimension, point);
      setScores(updatedScores);
    }

    const updatedUserChoices = [...userChoices];
    updatedUserChoices[currentQuestionIndex] = index;
    setUserChoices(updatedUserChoices);

    setSelectedButton(index);
  };

  const handleNext = () => {
    if (selectedButton === null) {
      return;
    }
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progressWidth =
    ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleShowResult = () => {
    const { personalityType, percentages, personalityInfo } =
      determinePersonalityType(scores);
    setPersonalityType(personalityType);
    setPercentages(percentages);
    setPersonalityInfo(personalityInfo);

    localStorage.setItem("personalityType", personalityType);
    localStorage.setItem("personalityInfo", JSON.stringify(personalityInfo));
    localStorage.setItem("percentages", JSON.stringify(percentages));

    navigate("/result");
  };

  return (
    <div className="w-full bg-white md:py-20 py-20 flex flex-col gap-16 items-center justify-center text-center">
      <div className="grid grid-row-2 gap-0 md:gap-10">
        <div className="text-xl md:text-2xl lg:text-4xl font-bold mt-10">
          Test de Personnalité Gratuit
        </div>
        <div className="grid md:grid-cols-3 gap-6 p-16 md:p-10">
          {Cards.map((card, index) => (
            <div
              key={index}
              className="border-2 border-black bg-lightOrange text-sm font-medium md:text-lg px-2 py-16 rounded-xl shadow-[5px_5px_0px_0px_rgba(244,40,244)]"
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-2 md:mt-16">
        <ScrollDown />
      </div>
      <div className="w-full h-full dashed-grid-paper bg-cover bg-center flex flex-col gap-6 items-center text-center">
        <div className="w-full bg-gray-200 h-2 md:h-3 dark:bg-gray-700">
          <div
            className="bg-principal h-full"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <div className="w-full relative md:px-20 p-6 md:text-2xl text-lg font-medium">
          {currentQuestion.question || currentQuestion.phrase}
        </div>
        <div className="w-full px-4 flex flex-col gap-6 items-center justify-center">
          <div className="grid md:grid-cols-3 items-center ">
            <div className="max-md:hidden md:block text-2xl">D’accord</div>
            <div className=" flex gap-4 items-center justify-center">
              {Choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index, choice.point)}
                  className={`${choice.width} ${
                    choice.height
                  } flex items-center justify-center text-white text-xl font-medium rounded-full border border-black shadow cursor-pointer ${
                    selectedButton === index
                      ? "bg-principal border-principal"
                      : ""
                  }`}
                >
                  {selectedButton === index && (
                    <ion-icon name="checkmark-outline"></ion-icon>
                  )}
                </button>
              ))}
            </div>
            <div className="w-full max-md:hidden md:block text-2xl">
              Pas d’accord
            </div>
          </div>
          <div className="flex gap-32 items-center justify-between md:hidden">
            <div className="text-xl">D’accord</div>
            <div className="w-full text-xl">Pas d’accord</div>
          </div>
        </div>
        <div className="px-4 mt-4 md:px-0 flex items-center justify-between gap-40 md:gap-96">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="select-none p-4 border border-black text-lg rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] leading-normal transition duration-150 ease-in-out"
          >
            Précédent
          </button>
          {currentQuestionIndex < shuffledQuestions.length - 1 ? (
            <button
              onClick={handleNext}
              className="select-none p-4 border border-principal text-white text-lg font-medium rounded-xl bg-principal hover:bg-boldPrincipal shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] leading-normal transition duration-150 ease-in-out"
            >
              Suivant
            </button>
          ) : (
            <button
              ref={resultButtonRef}
              onClick={handleShowResult}
              className="select-none p-4 border border-principal text-white text-lg font-medium rounded-xl bg-principal hover:bg-boldPrincipal shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] leading-normal transition duration-150 ease-in-out"
            >
              Voir le résultat
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;

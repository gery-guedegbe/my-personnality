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

let Cards = [
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
  const [selectedOption, setSelectedOption] = useState("");
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
      setSelectedOption(selectedChoice);
    } else {
      setSelectedButton(null);
      setSelectedOption("");
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

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = (index, dimension, point) => {
    const previousChoice = userChoices[currentQuestionIndex];

    if (previousChoice !== null) {
      const previousOption =
        previousChoice === "btn-option-1"
          ? currentQuestion.option1
          : currentQuestion.option2;
      const previousDimension = previousOption.dimension;
      const updatedScores = updateScores(scores, previousDimension, -1);
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
  const option1 = currentQuestion.option1.text;
  const option2 = currentQuestion.option2.text;

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
      <div className=" w-full h-full dashed-grid-paper bg-cover bg-center flex flex-col gap-6 items-center text-center">
        <div className="w-full bg-gray-200 h-1.5 md:h-2 dark:bg-gray-700">
          <div
            className="bg-lightBlack h-1.5 md:h-2"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <div className="w-full relative md:px-20 p-6 md:text-2xl text-lg font-medium ">
          {currentQuestion.question || currentQuestion.phrase}
        </div>
        <div className="w-full px-4 md:max-xl:px-6 md:px-40">
          <ul className="flex flex-col gap-8 items-center ">
            <li>
              <input
                type="radio"
                id="btn-option-1"
                name="btn"
                value="btn-option-1"
                className="hidden peer"
                checked={selectedOption === "btn-option-1"}
                onChange={handleOptionChange}
                required
              />
              <label
                htmlFor="btn-option-1"
                className={`select-none flex gap-4 items-center justify-between w-full p-4 text-gray-900 bg-transparent border border-gray-500 rounded-lg cursor-pointer ${
                  selectedOption === "btn-option-1"
                    ? "border-black text-black shadow-lg"
                    : ""
                } peer-checked:bg-lightOrange hover:bg-lightOrange`}
                onClick={() =>
                  handleClick(
                    "btn-option-1",
                    currentQuestion.option1.dimension,
                    1
                  )
                }
              >
                <div className="w-full text-base md:text-lg ">{option1}</div>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg ${
                    selectedOption === "btn-option-1"
                      ? "text-white bg-principal"
                      : "text-black "
                  }`}
                >
                  <i className="mdi mdi-check"></i>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="btn-option-2"
                name="btn"
                value="btn-option-2"
                className="hidden peer"
                checked={selectedOption === "btn-option-2"}
                onChange={handleOptionChange}
                required
              />
              <label
                htmlFor="btn-option-2"
                className={`select-none flex gap-4 items-center justify-between w-full p-4 text-gray-900 bg-transparent border border-gray-500 rounded-lg cursor-pointer ${
                  selectedOption === "btn-option-2"
                    ? "border-black text-black  shadow-lg"
                    : ""
                } peer-checked:bg-lightOrange hover:bg-lightOrange`}
                onClick={() =>
                  handleClick(
                    "btn-option-2",
                    currentQuestion.option2.dimension,
                    1
                  )
                }
              >
                <div className="w-full text-base md:text-lg">{option2}</div>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-lg ${
                    selectedOption === "btn-option-2"
                      ? "text-white bg-principal"
                      : "text-black"
                  }`}
                >
                  <i className="mdi mdi-check"></i>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-4 md:px-0 flex items-center justify-between gap-40 md:gap-96">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="select-none p-4 border border-black text-lg rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] leading-normal transition duration-150 ease-in-out"
          >
            Précédent
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === shuffledQuestions.length - 1}
            className="select-none p-4 border border-principal text-white text-lg font-medium rounded-xl bg-principal hover:bg-boldPrincipal shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] leading-normal transition duration-150 ease-in-out"
          >
            Suivant
          </button>
        </div>
      </div>
      {currentQuestionIndex === shuffledQuestions.length - 1 &&
        userChoices.every((choice) => choice !== null) && (
          <div className="w-full flex flex-col items-center ">
            <button
              ref={resultButtonRef}
              onClick={handleShowResult}
              className="select-none mb-10 p-4 border border-principal text-white text-lg font-medium rounded-xl bg-principal hover:bg-boldPrincipal shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] leading-normal transition duration-150 ease-in-out"
            >
              Voir le résultat
            </button>
          </div>
        )}
    </div>
  );
};

export default Test;

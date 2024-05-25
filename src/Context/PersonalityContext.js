import React, { createContext, useState, useEffect } from "react";

export const PersonalityContext = createContext();

export const PersonalityProvider = ({ children }) => {
  const [personalityType, setPersonalityType] = useState("");
  const [personalityInfo, setPersonalityInfo] = useState(null);
  const [percentages, setPercentages] = useState({
    Extraversion: 0,
    Introversion: 0,
    Sensation: 0,
    Intuition: 0,
    Pensée: 0,
    Sentiment: 0,
    Jugement: 0,
    Perception: 0,
  });

  return (
    <PersonalityContext.Provider
      value={{
        personalityType,
        setPersonalityType,
        percentages,
        setPercentages,
        personalityInfo,
        setPersonalityInfo,
      }}
    >
      {children}
    </PersonalityContext.Provider>
  );
};

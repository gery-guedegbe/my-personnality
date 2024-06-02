import { personalityData } from "../Data/personalityData";

export const initialScores = {
  Extraversion: 0,
  Introversion: 0,
  Sensation: 0,
  Intuition: 0,
  Pensée: 0,
  Sentiment: 0,
  Jugement: 0,
  Perception: 0,
};

export const updateScores = (scores, dimension, point) => {
  const updatedScores = { ...scores };
  if (updatedScores[dimension] !== undefined) {
    updatedScores[dimension] += point;
  }
  return updatedScores;
};

export const determinePersonalityType = (scores) => {
  const total = Object.values(scores).reduce((acc, score) => acc + score, 0);
  const percentages = {
    Extraversion: (scores.Extraversion / total) * 100,
    Introversion: (scores.Introversion / total) * 100,
    Sensation: (scores.Sensation / total) * 100,
    Intuition: (scores.Intuition / total) * 100,
    Pensée: (scores.Pensée / total) * 100,
    Sentiment: (scores.Sentiment / total) * 100,
    Jugement: (scores.Jugement / total) * 100,
    Perception: (scores.Perception / total) * 100,
  };

  const EorI = scores.Extraversion > scores.Introversion ? "E" : "I";
  const SorN = scores.Sensation > scores.Intuition ? "S" : "N";
  const TorF = scores.Pensée > scores.Sentiment ? "T" : "F";
  const JorP = scores.Jugement > scores.Perception ? "J" : "P";

  const personalityType = `${EorI}${SorN}${TorF}${JorP}`;

  const personalityInfo = personalityData.find(
    (p) => p.type === personalityType
  );

  return { personalityType, percentages, personalityInfo };
};

// // Vérifier s'il y a égalité entre deux paires de dimensions
// const equalDimensions = Object.keys(percentages).filter(
//   (dimension) => percentages[dimension] === 50
// );

// // S'il y a égalité entre deux paires de dimensions
// if (equalDimensions.length === 2) {
//   // Trouver la question supplémentaire correspondante
//   const extraQuestion = extraQuestions.find(
//     (question) => question.dimension === equalDimensions.join("/")
//   );

//   if (extraQuestion) {
//     // Mettre à jour les scores avec la réponse à la question supplémentaire
//     const dimension = extraQuestion.dimension.split("/");
//     dimension.forEach((dim) => {
//       setScores(updateScores(scores, dim, 1));
//     });
//   }
// }

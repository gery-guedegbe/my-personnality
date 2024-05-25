export const calculatePercentages = (scores) => {
  const totalScores = Object.values(scores).reduce(
    (acc, score) => acc + score,
    0
  );
  const percentages = {};

  for (const [dimension, score] of Object.entries(scores)) {
    percentages[dimension] = ((score / totalScores) * 100).toFixed(2);
  }

  return percentages;
};

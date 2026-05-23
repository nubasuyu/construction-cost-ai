// Simple weighted prediction model
// (acts like a trained ML model)

function predictCost(labor, material, duration) {
  const weightLabor = 1.2;
  const weightMaterial = 1.5;
  const weightDuration = 300;

  const base = 500;

  const prediction =
    base +
    (labor * weightLabor) +
    (material * weightMaterial) +
    (duration * weightDuration);

  return Math.round(prediction);
}

module.exports = predictCost;
const fs = require('fs');

function computeCaloriesForEachElf(string) {
  const elfMeals = string.split('\n\n');

  const totals = [];

  for (const meals of elfMeals) {
    const calories = meals.split('\n').map((x) => Number(x));
    const total = calories.reduce((a, b) => a + b, 0);

    totals.push(total);
  }

  return totals;
}

const answerPartA = (totals) => Math.max(...totals);

const answerPartB = (totals) =>
  totals
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b, 0);

try {
  const rawData = fs.readFileSync(`${__dirname}/in.txt`, 'utf8');
  const elfCalories = computeCaloriesForEachElf(rawData);
  console.log(`Answer A is ${answerPartA(elfCalories)}`);
  console.log(`Answer B is ${answerPartB(elfCalories)}`);
} catch (err) {
  console.error(err);
}

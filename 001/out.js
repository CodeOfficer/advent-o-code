const fs = require('fs');

function compute(string) {
  const elfMeals = string.split('\n\n');

  const totals = [];

  for (const meals of elfMeals) {
    const calories = meals.split('\n').map((x) => Number(x));
    const total = calories.reduce((a, b) => a + b, 0);

    totals.push(total);
  }

  return Math.max(...totals);
}

try {
  const data = fs.readFileSync(`${__dirname}/in.txt`, 'utf8');
  const num = compute(data);
  console.log(`The answer is ${num}`);
} catch (err) {
  console.error(err);
}

const fs = require('fs');

// NOTE:
// rock > scissors
// scissors > paper
// paper > rock
// Rock: A || X
// Paper: B || Y
// Scissors: C || Z
// lost: 0
// draw: 3
// win: 6

const t = {
  A: 'Rock',
  X: 'Rock',

  B: 'Paper',
  Y: 'Paper',

  C: 'Scissors',
  Z: 'Scissors',
};

const scoreShape = (shape) => ({ X: 1, Y: 2, Z: 3 }[shape]);
const scoreOutcome = (outcome) => ({ loss: 0, draw: 3, win: 6 }[outcome]);
const scoreRound = (theirs, mine) => scoreShape(mine) + scoreOutcome(computeOutcome(theirs, mine));
const computeTotals = (string) => string.split('\n').reduce((sum, round) => sum + scoreRound(...round.split(' ')), 0);

function computeOutcome(theirs, mine) {
  const drawConditions = ['AX', 'BY', 'CZ'];
  const loseConditions = ['AZ', 'BX', 'CB'];
  const round = theirs + mine;

  return drawConditions.includes(round) ? 'draw' : loseConditions.includes(round) ? 'loss' : 'win';
}

try {
  const rawData = fs.readFileSync(`${__dirname}/in.txt`, 'utf8');
  const sampleData = fs.readFileSync(`${__dirname}/in2.txt`, 'utf8');
  console.log(`Answer A is ${computeTotals(rawData)}`);
  console.log(`Sample Answer A is ${computeTotals(sampleData)}`);
} catch (err) {
  console.error(err);
}

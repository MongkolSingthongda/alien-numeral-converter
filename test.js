const alienToInteger = require('./index');

const testCases = [
  { input: "AAA", expected: 3 },
  { input: "LBAAA", expected: 58 },
  { input: "RCRZCAB", expected: 1994 }
];

testCases.forEach(({ input, expected }) => {
  const result = alienToInteger(input);
  console.log(`Input: ${input} | Got: ${result} | ${result === expected ? '✅' : '❌'}`);
});

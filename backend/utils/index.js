// const CHARATERS = [
//   "Cat card 😼",
//   "Defuse card 🙅‍♂️",
//   "Shuffle card 🔀",
//   "Exploding kitten card 💣",
// ];

// const generateRandomCards = () => {
//   const randomDeck = [];
//   for (let i = 0; i < 5; i++) {
//     // const index = Math.random() * 4;
//     const index = 0; // temp
//     randomDeck.push(CHARATERS[Math.floor(index)]);
//   }
//   return randomDeck;
// };

// module.exports = {
//   generateRandomCards,
// };


const CHARATERS = [
  "Cat card 😼",
  "Defuse card 🙅‍♂️",
  "Shuffle card 🔀",
  "Exploding kitten card 💣",
];

const generateRandomCards = () => {
  const randomDeck = [];
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * CHARATERS.length); // Random index between 0 and 3
    randomDeck.push(CHARATERS[index]);
  }
  return randomDeck;
};

module.exports = {
  generateRandomCards,
};


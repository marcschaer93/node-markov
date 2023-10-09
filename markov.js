// /** Textual markov chain generator */

// class MarkovMachine {

//   /** build markov machine; read in text.*/

//   constructor(text) {
//     let words = text.split(/[ \r\n]+/);
//     this.words = words.filter(c => c !== "");
//     this.makeChains();
//   }

//   /** set markov chains:
//    *
//    *  for text of "the cat in the hat", chains will be
//    *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

//   makeChains() {
//     // TODO
//   }

//   /** return random text from chains */

//   makeText(numWords = 100) {
//     // TODO
//   }
// }

class MarkovMachine {
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  makeChains() {
    const chains = {};

    for (let i = 0; i < this.words.length - 1; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1];

      if (!chains[word]) {
        chains[word] = [];
      }

      chains[word].push(nextWord);
    }

    // Handle the last word (no next word)
    const lastWord = this.words[this.words.length - 1];
    chains[lastWord] = [null];

    this.chains = chains;
  }

  makeText(numWords = 100) {
    const words = [];

    // Start with a random word from the source text
    let currentWord = randomChoice(this.words);

    while (words.length < numWords && currentWord !== null) {
      words.push(currentWord);
      currentWord = randomChoice(this.chains[currentWord]);
    }

    return words.join(" ");
  }
}

// Helper function to choose a random element from an array
function randomChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

module.exports = MarkovMachine;

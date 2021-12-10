const { sentences } = require("./sentences/sentences");
const { phrases, nouns, collections } = require("./hammerspace");

const getRandomCollection = () => {
  if (collections) {
    const collectionsCount = collections.length;
    const randomInt = randomIntInRange(0, collectionsCount - 1);
    return collections[randomInt];
  }
};

const getRandomPhrase = () => {
  if (phrases) {
    const phrasesCount = phrases.length;
    const randomInt = randomIntInRange(0, phrasesCount - 1);
    return phrases[randomInt];
  }
};

const getRandomNoun = (plural) => {
  if (nouns) {
    const isPlural = plural !== undefined ? plural : randomIntInRange(1, 2) > 1;

    const nounsCount = nouns.length;
    const randomInt = randomIntInRange(0, nounsCount - 1);
    let phrase = isPlural ? nouns[randomInt].plural : nouns[randomInt].singular;
    if (isPlural && randomIntInRange(1, 10) === 1) {
      phrase = `${getRandomCollection()} ${phrase}`;
    }
    return phrase;
  }
};

const getRandomSentence = () => {
  if (sentences) {
    const sentencesCount = sentences.length;
    const randomInt = randomIntInRange(0, sentencesCount - 1);
    return sentences[randomInt];
  }
};

const randomIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getQuote = () => {
  let sentence = getRandomSentence();

  while (sentence?.includes("{p}")) {
    sentence = sentence.replace(/{p}/, getRandomPhrase());
  }

  while (sentence?.includes("{n}")) {
    sentence = sentence.replace(/{n}/, getRandomNoun());
  }

  return sentence;
};

module.exports = { getQuote };

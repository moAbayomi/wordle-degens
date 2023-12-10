import words from "../assets/words.txt";
export const wordsDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordsSet = async () => {
  let wordsSet;
  let todayWord;
  await fetch(words)
    .then((response) => response.text())
    .then((result) => {
      const wordsArr = result.split("\n");
      todayWord = wordsArr[Math.floor(Math.random() * wordsArr.length) + 1];
      wordsSet = new Set(wordsArr);
    });

  return { wordsSet, todayWord };
};

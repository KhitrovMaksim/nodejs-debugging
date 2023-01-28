"use strict";

const progressBarLine = (percentageOfCompletion) => {
  const line = "";
  const numberOfSymbols = Math.round(percentageOfCompletion / 2);
  return (
    line.padStart(numberOfSymbols, "#") +
    line.padStart(50 - numberOfSymbols, ".")
  );
};

module.exports = progressBarLine;

"use strict";

const progressBarLine = require("./progressBarLine");

const progressBar = (percentageOfCompletion, bytesRead, fileSize) => {
  process.stdout.write(progressBarLine(percentageOfCompletion));
  process.stdout.cursorTo(49);
  process.stdout.write(
    `\t${percentageOfCompletion}% | ${bytesRead}/${fileSize}`
  );
  process.stdout.cursorTo(0);
};

module.exports = progressBar;

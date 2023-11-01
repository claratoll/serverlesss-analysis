const { sendResponse } = require('../../responses/index');

exports.handler = async (event, context) => {
  const wordCounts = {};

  const body = JSON.parse(event.body);

  const words = body.message
    .toLowerCase()
    .replace(/[^\w\såäöÅÄÖ]/g, '')
    .split(/\s+/);

  words.forEach((word) => {
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });

  const wordList = Object.entries(wordCounts).map(([word, count]) => ({
    word,
    count,
  }));

  if (wordList.length !== 0) {
    return sendResponse(200, { 'list of words': wordList });
  } else {
    return sendResponse(400, { message: 'wrong data in body' });
  }
};

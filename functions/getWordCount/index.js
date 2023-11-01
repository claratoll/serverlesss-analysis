const { sendResponse } = require('../../responses/index');

exports.handler = async (event, context) => {
  let words = 0;
  const body = JSON.parse(event.body);
  ///word-count: En endpoint som tar emot en textsträng
  //och returnerar antalet ord i texten.

  words = body.message.trim().split(/\s+/).length;

  if (words !== 0) {
    return sendResponse(200, { words });
  } else {
    return sendResponse(400, { message: 'wrong data in body' });
  }
};

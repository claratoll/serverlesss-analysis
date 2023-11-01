const { sendResponse } = require('../../responses/index');

exports.handler = async (event, context) => {
  //word-count: En endpoint som tar emot en textsträng och returnerar antalet ord i texten.

  return sendResponse(200, { message: 'return summary' });
};

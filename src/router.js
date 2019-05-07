const handlers = require('./handlers');

const router = (request, response) => {
  if (request.url === '/') {
    handlers.handlerHome(request, response);
  } else if (request.url.indexOf('/public/') !== -1) {
    handlers.handlerPublic(request, response, request.url);
  } else {
    handlers.hanlerImage(request, response);
  }
};
module.exports = router;

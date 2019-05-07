const path = require('path');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// const request = require('request');
// require('dotenv')config();

const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1> Sorry, there is Error </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlerPublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extenstionTypes = {
    html : 'text/html',
    js : 'application/javascript',
    css : 'text/css',
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(500, {'Content-Type' : 'text/html'});
      response.end('<h1> Sorry , I can not find the file </h1>');
    } else {
      response.writeHead(200, {'Content-Type' : extenstionTypes[extension]});
      response.end(file);
    }
  });
};

const hanlerImage = (request, response) => {
  const parseUrl = url.parse(request.url);
  const parseQuery = querystring.parse(parseUrl.query);
  const dataUrl = `https://api.nasa.gov/planetary/apod?api_key=${
    parseQuery.q
  }&apiKey=  bTjWBAR85tqIPaZgQeQOJGFbxeNdZoIR4DWgG9Ld`;

}

module.exports = {
  handlerHome,
  handlerPublic,
};

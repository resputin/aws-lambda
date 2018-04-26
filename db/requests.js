'use strict';

let requests = [
  {
    user: '845076f7-3fca-4bb1-a1d2-45b9b7488ae5',
    title: 'Help',
    content: 'I need food',
    id: '845076f7-3fca-4bb1-a1d2-45b7b7488ae5'
  }
];


function getRequests() {
  return requests;
}

function getRequest(id) {
  return requests.find(request => request.id === id);
}

module.exports = {
  getRequest,
  getRequests
};
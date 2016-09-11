import Vue from 'vue';

import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const starshipCache = Object.create(null);
const starship = new EventEmitter();
const starshipBaseUrl = 'starships/';
export default starship;

starship.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    if (starshipCache[id]) {
      resolve(starshipCache[id]);
    }
    const starshipToGet = `${starshipBaseUrl}${id}/`;
    Vue.http.get(starshipToGet).then(response => {
      const starshipData = starshipCache[id] = response.data;
      resolve(starshipData);
    }, reject);
  });
};

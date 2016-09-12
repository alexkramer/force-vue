import Vue from 'vue';

import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const planetCache = Object.create(null);
const planet = new EventEmitter();
const planetBaseUrl = 'planets/';
export default planet;

planet.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    if (planetCache[id]) {
      resolve(planetCache[id]);
    }
    const planetToGet = `${planetBaseUrl}${id}/`;
    Vue.http.get(planetToGet).then(response => {
      const planetData = planetCache[id] = response.data;
      resolve(planetData);
    }, reject);
  });
};

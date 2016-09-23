import Vue from 'vue';

import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';
import { ApiCache } from './api-cache.js';

const planetCache = new ApiCache();
const planet = new EventEmitter();
const planetBaseUrl = 'planets/';
export default planet;

planet.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    const planetToGet = `${planetBaseUrl}${id}/`;

    if (planetCache.get(planetToGet)) {
      resolve(planetCache.get(planetToGet));
    }
    Vue.http.get(planetToGet).then(response => {
      const planetData = response.data;
      planetCache.put(planetToGet, planetData);
      resolve(planetData);
    }, reject);
  });
};

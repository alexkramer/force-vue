import Vue from 'vue';

import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';
import ApiCache from './api-cache';

const starshipCache = new ApiCache(null);
const starship = new EventEmitter();
const starshipBaseUrl = 'starships/';
export default starship;

starship.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    const starshipToGet = `${starshipBaseUrl}${id}/`;

    if (starshipCache.get(starshipToGet)) {
      resolve(starshipCache.get(starshipToGet));
    }
    Vue.http.get(starshipToGet).then(response => {
      const starshipData = response.data;
      starshipCache.put(starshipToGet, starshipData);
      resolve(starshipData);
    }, reject);
  });
};

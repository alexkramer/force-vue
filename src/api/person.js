import Vue from 'vue';
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';
import ApiCache from './api-cache';

const personCache = new ApiCache(null);
const pictureCache = Object.create(null);
const person = new EventEmitter();
const personBaseUrl = 'people/';
export default person;

person.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    const personToGet = `${personBaseUrl}${id}/`;

    if (personCache.get(personToGet)) {
      resolve(personCache.get(personToGet));
    }
    Vue.http.get(personToGet).then(response => {
      const personData = response.data;
      personCache.put(personToGet, personData);
      resolve(personData);
    }, reject);
  });
};

person.getPicture = searchWord => {
  if (!searchWord) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    if (pictureCache[searchWord]) {
      resolve(pictureCache[searchWord]);
    }
    const param = {
      q: searchWord,
      q_type: 'jpg',
    };
    Vue.http.headers.common.Authorization = '';
    Vue.http.get(process.env.IMAGE_HOST, param, {
      headers: {
        Authorization: process.env.IMGUR_CLIENT_ID,
      },
    }).then(response => {
      let imgUrl = null;
      if (typeof response.data === 'undefined' || typeof response.data.data[0] === 'undefined') {
        imgUrl = null;
      } else if (typeof response.data.data[0].cover !== 'undefined') {
        imgUrl = 'http://i.imgur.com/'.concat(response.data.data[0].cover, 'm.jpg');
      } else if (typeof response.data.data[0].link !== 'undefined') {
        imgUrl = response.data.data[0].link.replace(/\.jpg$/, 'm.jpg');
      }
      resolve(imgUrl);
    }, reject);
  });
};

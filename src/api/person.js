import Vue from 'vue';
Vue.use(require('vue-resource'));
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const personCache = Object.create(null);
const pictureCache = Object.create(null);
const person = new EventEmitter();
const personBaseUrl = 'http://swapi.co/api/people/';
const imgurBaseUrl = 'https://api.imgur.com/3/gallery/search/';
export default person;

person.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    if (personCache[id]) {
      resolve(personCache[id]);
    }
    const personToGet = `${personBaseUrl}${id}/`;
    Vue.http.get(personToGet).then(response => {
      const personData = personCache[id] = response.data;
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
    Vue.http.headers.common.Authorization = 'Client-ID e261b9fcc41f315';
    Vue.http.get(imgurBaseUrl, param).then(response => {
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

import Vue from 'vue';
Vue.use(require('vue-resource'));
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const personCache = Object.create(null);
const person = new EventEmitter();
const personBaseUrl = 'http://swapi.co/api/people/';
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

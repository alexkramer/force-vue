import { ApiCache } from 'src/api/api-cache';

describe('ApiCache', () => {
  describe('put()', () => {
    it('writes the key/value to storage using setItem(key, value)', () => {
      const testKey = 'never gonna give you up',
        testValue = 'never gonna let you down';

      const mockLocalStorage = {
        setItem: sinon.spy(),
      };

      const apiCache = new ApiCache(mockLocalStorage);
      apiCache.put(testKey, testValue);

      assert(mockLocalStorage.setItem.calledWith(testKey, sinon.match(testValue)));
    });
  });

  describe('get()', () => {
    it('retrieves the key/value from storage using getItem(key)', () => {
      const testKey = 'here comes the rain again',
        testValue = {
          value: 'falling on my head like a memory',
          expires: new Date(),
        };

      testValue.expires.setDate(testValue.expires.getDate() + 1);

      const mockLocalStorage = {
        getItem: (key) => null,
      };

      const mock = sinon.mock(mockLocalStorage);
      mock.expects('getItem').once().returns(JSON.stringify(testValue));

      const apiCache = new ApiCache(mockLocalStorage);

      assert.equal(apiCache.get(testKey), testValue.value);
    });

    it('returns null if the value is expired', () => {
      const testKey = 'Karma Karma Karma Karma Karma',
        testValue = {
          value: 'Chameleon',
          expires: new Date(1982, 1, 11),
        };

      const mockLocalStorage = {
        getItem: (key) => null,
      };

      const mock = sinon.mock(mockLocalStorage);
      mock.expects('getItem').once().returns(JSON.stringify(testValue));

      const apiCache = new ApiCache(mockLocalStorage);

      assert.isNull(apiCache.get(testKey));
    })
  });
});

const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body><div data-app id="app"></div></body></html>');
const { window } = jsdom;

function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

global.localStorage = (() => {
  var store = {}

  return {
    ...store,
    getItem: (key) => store[key],
    setItem: (key, value) => { store[key] = value },
    removeItem: (key) => { delete store[key] }
  }
})()

copyProps(window, global);

const app = document.createElement('div')
app.setAttribute('data-app', true)
document.body.appendChild(app)

window.CONFIG = {
  apiUrl: 'https://mockedApi.com/'
}

jest.setTimeout(30000)

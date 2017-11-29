import { transform } from './helpers';

// App
const result = document.querySelector('#result');

transform(function(data) {
  result.innerHTML = JSON.stringify(data, null, "\t")
});

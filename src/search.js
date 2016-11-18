import ajax from './ajax.js';
import results from './results.js';

var search = function() {
  //cache DOM
  var el = document.getElementById('search-value');
  var btn = document.getElementById('search-button');
  var rdm = document.getElementById('random-button');

  //binding events
  btn.addEventListener('click', function(e){
    e.preventDefault();
    searchWiki();
  });
  rdm.addEventListener('click', randomWiki);

  //event handlers
  function randomWiki() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  };
  function searchWiki() {
    var input = document.getElementById('search-value');
    ajax('GET', "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages||extracts||info&generator=search&piprop=thumbnail&pilimit=10&pithumbsize=200&exsentences=3&exlimit=10&exintro=1&explaintext=1&gsrlimit=10&gsrnamespace=0&inprop=url&gsrsearch=" + input.value, results);
    input.value = '';
  }
};

module.exports = search;

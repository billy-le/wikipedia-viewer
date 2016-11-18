var results = function(data) {
  //CACHE DOM
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';

  //DISPLAY RESULTS
  var itemList, extract, imgUrl;
  var resultsObj = data.query.pages;
  for (var item in resultsObj) {
    itemList = '<li>' + resultsObj[item].title + '</li>';
    extract = '<p>' + resultsObj[item].extract + '</p>';
    if(resultsObj[item].hasOwnProperty('thumbnail')) {
      imgUrl = '<img src="' + resultsObj[item].thumbnail.source + '">';
    }
    else {
      imgUrl = '';
    };

    searchResults.innerHTML += itemList + ' ' + extract + imgUrl;
  };
}

module.exports = results;

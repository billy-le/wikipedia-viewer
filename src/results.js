var results = function(data) {
  //cache DOM
  var searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';

  //create elements from data
  var item, extract, imgUrl,
      itemList = '',
      json = data.query.pages;
  for (var key in json) {
    item = '<li class="hidden"><h4><a href="' + json[key].fullurl + '">' + json[key].title + '</a></h4>';
    extract = '<p>' + json[key].extract + '</p>';
    if(json[key].hasOwnProperty('thumbnail')) {
      imgUrl = '<img src="' + json[key].thumbnail.source + '">';
    }
    else {
      imgUrl = '';
    };
    itemList = item + extract + imgUrl + '</li>';
    searchResults.innerHTML += itemList;
  };
}

module.exports = results;

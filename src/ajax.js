var ajax = function(method, url, callback) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }

  xhr.open(method, url, true)
  xhr.send();
}
module.exports = ajax;

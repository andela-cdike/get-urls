'use strict';
const urlRegex = require('url-regex');
const normalizeUrl = require('normalize-url');

module.exports = function (str, opts) {
  var urls = str.match(urlRegex());
  var ret = urls ? urls.map(
    function (url) {
      return normalizeUrl(url.trim().replace(/\.+$/, ''), opts);
    }) : [];
  return new Set(ret);
};

/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/core/misc/polyfills/element.matches.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/core/misc/polyfills/element.matches.js. */
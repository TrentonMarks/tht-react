/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/core/misc/drupalSettingsLoader.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/core/misc/drupalSettingsLoader.js. */
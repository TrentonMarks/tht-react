/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/webform/js/webform.element.options.js. */
/**
 * @file
 * JavaScript behaviors for options elements.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Attach handlers to options buttons element.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformOptionsButtons = {
    attach: function (context) {
      // Place <input> inside of <label> before the label.
      $(context).find('label.webform-options-display-buttons-label > input[type="checkbox"], label.webform-options-display-buttons-label > input[type="radio"]').each(function () {
        var $input = $(this);
        var $label = $input.parent();
        $input.detach().insertBefore($label);
      });
    }
  };


})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/webform/js/webform.element.options.js. */
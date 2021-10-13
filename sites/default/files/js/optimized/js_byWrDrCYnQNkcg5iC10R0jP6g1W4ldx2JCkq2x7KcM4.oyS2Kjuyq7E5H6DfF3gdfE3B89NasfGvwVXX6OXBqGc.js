/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/webform/js/webform.admin.dropbutton.js. */
/**
 * @file
 * Dropbutton feature.
 */

(function ($, Drupal) {

  'use strict';

  // Make sure that dropButton behavior exists.
  if (!Drupal.behaviors.dropButton) {
    return;
  }

  /**
   * Wrap Drupal's dropbutton behavior so that the dropbutton widget is only visible after it is initialized.
   */
  var dropButton = Drupal.behaviors.dropButton;
  Drupal.behaviors.dropButton = {
    attach: function (context, settings) {
      dropButton.attach(context, settings);
      $(context).find('.webform-dropbutton .dropbutton-wrapper').once('webform-dropbutton').css('visibility', 'visible');
    }
  };

})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/webform/js/webform.admin.dropbutton.js. */
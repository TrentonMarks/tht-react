/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/webform/js/webform.admin.tabledrag.js. */
/**
 * @file
 * Dropbutton feature.
 */

(function ($, Drupal) {

  'use strict';

  // Make sure that dropButton behavior exists.
  if (!Drupal.behaviors.tableDrag) {
    return;
  }

  $(function () {
    $('head').append('<style type="text/css">.webform-tabledrag-hide {display: table-cell;}</style>');
  });

})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/webform/js/webform.admin.tabledrag.js. */
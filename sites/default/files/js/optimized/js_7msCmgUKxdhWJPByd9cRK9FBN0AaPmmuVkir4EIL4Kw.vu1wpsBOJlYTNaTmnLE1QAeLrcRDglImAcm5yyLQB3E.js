/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/colorbox/styles/default/colorbox_style.js. */
/**
 * @file
 * Colorbox Style JS.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/colorbox/styles/default/colorbox_style.js. */
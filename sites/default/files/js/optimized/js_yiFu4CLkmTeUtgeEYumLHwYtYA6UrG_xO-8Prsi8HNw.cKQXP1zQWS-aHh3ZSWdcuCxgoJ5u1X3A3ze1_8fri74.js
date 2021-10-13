/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/colorbox/js/colorbox.js. */
/**
 * @file
 * Colorbox JS.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.initColorbox = {
    attach: function (context, settings) {
      if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
        return;
      }

      if (settings.colorbox.mobiledetect && window.matchMedia) {
        // Disable Colorbox for small screens.
        var mq = window.matchMedia('(max-device-width: ' + settings.colorbox.mobiledevicewidth + ')');
        if (mq.matches) {
          $.colorbox.remove();
          return;
        }
      }

      settings.colorbox.rel = function () {
        return $(this).data('colorbox-gallery')
      };

      $('.colorbox', context)
        .once('init-colorbox')
        .colorbox(settings.colorbox);
    }
  };

})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/colorbox/js/colorbox.js. */
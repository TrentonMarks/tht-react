/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/custom/overseer/js/scripts.js. */
/**
 * @file
 * A JavaScript file for the module.
 */

(function (Drupal, $) {
  'use strict';

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.overseer = {
    attach: function (context, settings) {

      /* On the Service page, move the hero image above the page title */
      const $heroContainer = $('#page-hero .container'); // hero image container
      const $heroImage = $('.content .service__hero'); // hero image
      $(context).find($heroImage).once('servicePageHeroPlacement').each(() => {
        $heroContainer.append($heroImage); // append hero image to hero container
      });

    }
  }
})(Drupal, jQuery);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/custom/overseer/js/scripts.js. */
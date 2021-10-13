/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal, $) {
  'use strict';

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.TH_base2 = {
    attach: function (context, settings) {

      /* TESTIMONIALS PAGE: Testimonial expand/collapse functionality */
      if (document.location.pathname === '/testimonials') {
        const $fieldContent = $('.page-testimonials #main #content-area .block-th-base2-content .views-row .views-field-body .field-content');
        let fullStrings = [];
        let truncStrings = [];
        for (let i = 0; i < $fieldContent.length; i++) {
          $($fieldContent[i]).addClass(`content-${i}`);
          let originalStr = $fieldContent[i].innerText.slice().toString();
          let truncatedStr = $fieldContent[i].innerText.slice(0, 240).toString();
          fullStrings.push(originalStr);
          truncStrings.push(truncatedStr);
          $(context).find($($fieldContent[i])).once('toggleTestimonial').each(() => {
            let video = $(`.content-${i} iframe`);
            if (video.length === 0) { /* if not a video testimonial...*/
              let $trunc = $(`<p class="trunc-${i}">${truncatedStr}<button class="testimonial-read-more-btn read-more-${i}">...read more</button></p>`);
              let $orig = $(`<p class="orig-${i} hide">${originalStr}<button class="testimonial-read-less-btn read-less-${i}">...read less</button></p>`);
              $($fieldContent[i]).empty().append($trunc).append($orig);
              $(`.read-more-${i}`).on('click', () => {
                $trunc.addClass('hide');
                $orig.removeClass('hide');
              });
              $(`.read-less-${i}`).on('click', () => {
                $orig.addClass('hide');
                $trunc.removeClass('hide');
              });
            }
          });
        }
      }

    }
  };

})(Drupal, jQuery);

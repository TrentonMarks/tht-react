/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.color = {
    logoChanged: false,
    callback: function callback(context, settings, $form) {
      if (!this.logoChanged) {
        $('.color-preview .color-preview-logo img').attr('src', drupalSettings.color.logo);
        this.logoChanged = true;
      }

      if (drupalSettings.color.logo === null) {
        $('div').remove('.color-preview-logo');
      }

      /*** COLOR PALETTE ***/
      let $colorPalette = $form.find('.js-color-palette');
      let $primaryLight = $colorPalette.find('input[name="palette[primary_light]"]').val();
      let $primaryDark = $colorPalette.find('input[name="palette[primary_dark]"]').val();
      let $contrast = $colorPalette.find('input[name="palette[contrast]"]').val();
      let $neutral = $colorPalette.find('input[name="palette[neutral]"]').val();
      let $neutral40 = $colorPalette.find('input[name="palette[neutral_40]"]').val();
      let $neutral20 = $colorPalette.find('input[name="palette[neutral_20]"]').val();
      let $snippetBackground = $colorPalette.find('input[name="palette[snippet_bg]"]').val();
      let $snippetTitle = $colorPalette.find('input[name="palette[snippet_title]"]').val();
      let $snippetText = $colorPalette.find('input[name="palette[snippet_text]"]').val();

      /*** TOP TOP NAV ***/
      let $topTopNav = $form.find('.color-preview-top-top-nav');
      $topTopNav.css('backgroundColor', $primaryDark);
      $('.color-preview-top-top-nav ul li a').css('borderColor', $primaryLight);

      /*** HEADER ***/
      let $header = $form.find('.color-preview-header');
      $header.css('backgroundColor', $primaryLight);

      // let $headerMenuItems = $('.color-preview-header ul li');
      // for (let i = 0; i < $headerMenuItems.length; i++) {
      //   $($headerMenuItems[i]).hover(()=>{
      //     $($headerMenuItems[i]).css('backgroundColor', $neutral40);
      //     $($headerMenuItems[i]).css('opacity', '40%');
      //   }, ()=>{
      //     $($headerMenuItems[i]).css('backgroundColor', 'transparent');
      //     $($headerMenuItems[i]).css('opacity', '100%');
      //   });
      // }

      let styleItem1 = document.createElement('style');
      styleItem1.innerText = `.style-item-1::after { background-color: transparent }`;
      document.body.appendChild(styleItem1);

      let styleItem2 = document.createElement('style');
      styleItem2.innerText = `.style-item-2::after { background-color: transparent }`;
      document.body.appendChild(styleItem2);

      let styleItem3 = document.createElement('style');
      styleItem3.innerText = `.style-item-3::after { background-color: transparent }`;
      document.body.appendChild(styleItem3);

      let styleItem4 = document.createElement('style');
      styleItem4.innerText = `.style-item-4::after { background-color: transparent }`;
      document.body.appendChild(styleItem4);

      let styleItem5 = document.createElement('style');
      styleItem5.innerText = `.style-item-5::after { background-color: transparent }`;
      document.body.appendChild(styleItem5);

      let $menuItems = $('.color-preview-header ul li');
      for (let i = 0; i < $menuItems.length; i++) {
        $($menuItems[i]).hover(()=>{
          if (i === 0) {
            styleItem1.innerText = `.style-item-1::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 1) {
            styleItem2.innerText = `.style-item-2::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 2) {
            styleItem3.innerText = `.style-item-3::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 3) {
            styleItem4.innerText = `.style-item-4::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 4) {
            styleItem5.innerText = `.style-item-5::after { background-color: ${$neutral40}; opacity: 40%; }`;
          }
        }, ()=>{
          if (i === 0) {
            styleItem1.innerText = `.style-item-1::after { background-color: transparent }`;
          } else if (i === 1) {
            styleItem2.innerText = `.style-item-2::after { background-color: transparent; }`;
          } else if (i === 2) {
            styleItem3.innerText = `.style-item-3::after { background-color: transparent; }`;
          } else if (i === 3) {
            styleItem4.innerText = `.style-item-4::after { background-color: transparent; }`;
          } else if (i === 4) {
            styleItem5.innerText = `.style-item-5::after { background-color: transparent; }`;
          }
        });
      }

      /*** HERO ***/
      let $hero = $form.find('.color-preview-hero');
      $hero.css('backgroundColor', $neutral);

      let $leftBtn = $('.color-preview-hero-buttons a:first-of-type'); // left btn
      $leftBtn.css('borderColor', $contrast);
      $leftBtn.css('backgroundColor', $contrast);
      $leftBtn.hover(()=>{
        $leftBtn.css('borderColor', $neutral);
        $leftBtn.css('backgroundColor', $neutral);
      }, ()=>{
        $leftBtn.css('borderColor', $contrast);
        $leftBtn.css('backgroundColor', $contrast);
      }); // end left btn

      let $rightBtn = $('.color-preview-hero-buttons a:last-of-type'); // right btn
      $rightBtn.css('borderColor', $primaryDark);
      $rightBtn.css('color', $primaryDark);
      $rightBtn.hover(()=>{
        $rightBtn.css('borderColor', $neutral);
        $rightBtn.css('color', $neutral);
      }, ()=>{
        $rightBtn.css('borderColor', $primaryDark);
        $rightBtn.css('color', $primaryDark);
      }); // end right btn

      /*** CALLOUTS ***/
      let styleCallout1 = document.createElement('style');
      styleCallout1.innerText = `.callout-1::after { background-color: ${$neutral20}; opacity: 20%; }`;
      document.body.appendChild(styleCallout1);

      let styleCallout2 = document.createElement('style');
      styleCallout2.innerText = `.callout-2::after { background-color: ${$neutral20}; opacity: 20%; }`;
      document.body.appendChild(styleCallout2);

      let styleCallout3 = document.createElement('style');
      styleCallout3.innerText = `.callout-3::after { background-color: ${$neutral20}; opacity: 20%; }`;
      document.body.appendChild(styleCallout3);

      let styleCallout4 = document.createElement('style');
      styleCallout4.innerText = `.callout-4::after { background-color: ${$neutral20}; opacity: 20%; }`;
      document.body.appendChild(styleCallout4);

      let styleCallout5 = document.createElement('style');
      styleCallout5.innerText = `.callout-5::after { background-color: ${$neutral20}; opacity: 20%; }`;
      document.body.appendChild(styleCallout5);

      let $callouts = $('.color-preview-flex-column');
      for (let i = 0; i < $callouts.length; i++) {
        $($callouts[i]).hover(()=>{
          if (i === 0) {
            styleCallout1.innerText = `.callout-1::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 1) {
            styleCallout2.innerText = `.callout-2::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 2) {
            styleCallout3.innerText = `.callout-3::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 3) {
            styleCallout4.innerText = `.callout-4::after { background-color: ${$neutral40}; opacity: 40%; }`;
          } else if (i === 4) {
            styleCallout5.innerText = `.callout-5::after { background-color: ${$neutral40}; opacity: 40%; }`;
          }
        }, ()=>{
          if (i === 0) {
            styleCallout1.innerText = `.callout-1::after { background-color: ${$neutral20}; opacity: 20%; }`;
          } else if (i === 1) {
            styleCallout2.innerText = `.callout-2::after { background-color: ${$neutral20}; opacity: 20%; }`;
          } else if (i === 2) {
            styleCallout3.innerText = `.callout-3::after { background-color: ${$neutral20}; opacity: 20%; }`;
          } else if (i === 3) {
            styleCallout4.innerText = `.callout-4::after { background-color: ${$neutral20}; opacity: 20%; }`;
          } else if (i === 4) {
            styleCallout5.innerText = `.callout-5::after { background-color: ${$neutral20}; opacity: 20%; }`;
          }
        });
      }

      $('.color-preview-icon-wrapper').css('backgroundColor', $primaryLight);
      $('.color-preview-icon-wrapper .fa-phone').css('color', $primaryDark);
      $('.color-preview-icon-wrapper .fa-comments').css('color', $primaryDark);
      $('.color-preview-icon-wrapper .fa-chart-bar').css('color', $primaryDark);
      $('.color-preview-icon-wrapper .fa-certificate').css('color', $primaryDark);
      $('.color-preview-icon-wrapper .fa-smile').css('color', $primaryDark);
      $('.color-preview-flex-column p').css('color', $primaryDark);


      /*** SIDEBAR ***/
      let styleSidebar = document.createElement('style');
      styleSidebar.innerText = `.color-preview-sidebar::after { background-color: ${$neutral20} }`;
      document.body.appendChild(styleSidebar);

      let $sidebarBtn = $('.color-preview-sidebar-form > div:last-of-type');
      $('.color-preview-sidebar').css('borderTopColor', $primaryDark);
      $('.color-preview-sidebar').css('borderBottomColor', $primaryLight);
      $('.color-preview-sidebar-form > div:last-of-type').css('backgroundColor', $contrast);
      $sidebarBtn.hover(()=>{
        $sidebarBtn.css('backgroundColor', $neutral);
      }, ()=>{
        $sidebarBtn.css('backgroundColor', $contrast);
      });

      /*** SNIPPET ***/
      $('.color-preview-snippet > div').css('backgroundColor', $snippetBackground);
      $('.color-preview-snippet > div h3').css('color', $snippetTitle);
      $('.color-preview-snippet > div p').css('color', $snippetText);

      /*** TESTIMONIALS ***/
      let styleTestimonials = document.createElement('style');
      styleTestimonials.innerText = `.color-preview-testimonials::after { background-color: ${$neutral20} }`;
      document.body.appendChild(styleTestimonials);

      let $testimonialTitle = $('.color-preview-testimonials h3');
      $testimonialTitle.css('color', $primaryLight);
      $testimonialTitle.hover(() => {
      $testimonialTitle.css('color', $contrast);
      }, () => {
      $testimonialTitle.css('color', $primaryLight);
      });

      let $firstReadMore = $('.color-preview-testimonials-container > div:first-of-type .color-preview-read-more');
      $('.color-preview-testimonials-container > div:first-of-type').css('borderColor', $primaryLight);
      $firstReadMore.css('color', $primaryLight);
      $firstReadMore.hover(()=>{
      $firstReadMore.css('color', $contrast);
      }, ()=>{
      $firstReadMore.css('color', $primaryLight);
      });

      let $secondReadMore = $('.color-preview-testimonials-container > div:nth-of-type(2) .color-preview-read-more');
      $('.color-preview-testimonials-container > div:nth-of-type(2)').css('borderColor', $primaryLight);
      $secondReadMore.css('color', $primaryLight);
      $secondReadMore.hover(() => {
      $secondReadMore.css('color', $contrast);
      }, () => {
      $secondReadMore.css('color', $primaryLight);
      });

      let $thirdReadMore = $('.color-preview-testimonials-container > div:last-of-type .color-preview-read-more');
      $thirdReadMore.css('color', $primaryLight);
      $thirdReadMore.hover(() => {
      $thirdReadMore.css('color', $contrast);
      }, () => {
      $thirdReadMore.css('color', $primaryLight);
      });

      /*** FOOTER ***/
      $('.color-preview-footer').css('backgroundColor', $neutral);

    }
  };
})(jQuery, Drupal, drupalSettings);

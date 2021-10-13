/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/responsive_menu/js/views/ToolbarVisualView.js. */
/**
 * This overrides the toolbar module's updateToolbarHeight method.
 *
 * It is needed because the toolbar module's own method sets the padding-top
 * on the body whereas we need it set on the .mm-page element. This override
 * ensures that happens which results in the correct padding applied in the
 * correct place.
 */

(function ($, Drupal, drupalSettings, Backbone) {
  "use strict";
  Drupal.toolbar.ToolbarVisualView.prototype.updateToolbarHeight = function() {
    var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
    var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
    this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

    $('.mm-page').css({
      'padding-top': this.model.get('height')
    });

    this.triggerDisplace();
  }
})(jQuery, Drupal, drupalSettings, Backbone);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/responsive_menu/js/views/ToolbarVisualView.js. */
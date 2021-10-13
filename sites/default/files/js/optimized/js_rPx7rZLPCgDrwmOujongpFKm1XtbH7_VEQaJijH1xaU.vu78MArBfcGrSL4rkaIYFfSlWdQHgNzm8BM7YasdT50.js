/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/modules/admin_toolbar/js/admin_toolbar.hoverintent.js. */
(function ($) {
  $(document).ready(function () {
    $('.toolbar-tray-horizontal li.menu-item--expanded, .toolbar-tray-horizontal ul li.menu-item--expanded .menu-item').hoverIntent({
      over: function () {
        // At the current depth, we should delete all "hover-intent" classes.
        // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
        $(this).parent().find('li').removeClass('hover-intent');
        $(this).addClass('hover-intent');
      },
      out: function () {
        $(this).removeClass('hover-intent');
      },
      timeout: 250
    });
  });
})(jQuery);

/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/modules/admin_toolbar/js/admin_toolbar.hoverintent.js. */
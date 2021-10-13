/* Source and licensing information for the line(s) below can be found at http://tht-react.dd:8083/core/modules/views_ui/js/views_ui.listing.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.viewTableFilterByText = {
    attach: function attach(context, settings) {
      var $input = $('input.views-filter-text').once('views-filter-text');
      var $table = $($input.attr('data-table'));
      var $rows;

      function filterViewList(e) {
        var query = $(e.target).val().toLowerCase();

        function showViewRow(index, row) {
          var $row = $(row);
          var $sources = $row.find('[data-drupal-selector="views-table-filter-text-source"]');
          var textMatch = $sources.text().toLowerCase().indexOf(query) !== -1;
          $row.closest('tr').toggle(textMatch);
        }

        if (query.length >= 2) {
          $rows.each(showViewRow);
        } else {
          $rows.show();
        }
      }

      if ($table.length) {
        $rows = $table.find('tbody tr');
        $input.on('keyup', filterViewList);
      }
    }
  };
})(jQuery, Drupal);
/* Source and licensing information for the above line(s) can be found at http://tht-react.dd:8083/core/modules/views_ui/js/views_ui.listing.js. */
/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function() {
  // TODO: your code here!
  var $tbody = $('tbody');
  var $rows = $tbody.children();

  var getType = function(colIndex) {
    var val = $($rows[0].children[colIndex]).text();

    return isNaN(val) ? 'string' : 'number';
  };

  $('th').on('click', function(e) {
    var colIndex = $(this).index();
    var type = getType(colIndex);
    $rows = $rows.detach().sort(function(row1, row2) {
      var value1 = $(row1.children[colIndex]).text();
      var value2 = $(row2.children[colIndex]).text();

      if (type === 'string') return value1 > value2;
      if (type === 'number') return value1 - value2;
    });
  });

  $tbody.append($rows);
});

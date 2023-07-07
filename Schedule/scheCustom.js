$(document).ready(function () {
  if ($(window).width() >= 768) {
    var itemsPerPage = 8;
    var currentItem = 0;
    // Hide all menu items
    $(".navbar-nav li").hide();
    // Show the items for the current page
    var showItems = function () {
      var startIndex = currentItem;
      var endIndex = startIndex + itemsPerPage;
      $(".navbar-nav li").hide().slice(startIndex, endIndex).show();
    };
    // Show the items for the initial page
    showItems();
    // Show next item when the "Next" button is clicked
    $("#next").click(function () {
      var totalItems = $(".navbar-nav li").length;
      if (currentItem + itemsPerPage < totalItems) {
        currentItem++;
        showItems();
      }
    });
    // Show previous item when the "Previous" button is clicked
    $("#previous").click(function () {
      if (currentItem > 0) {
        currentItem--;
        showItems();
      }
    });
  }
});

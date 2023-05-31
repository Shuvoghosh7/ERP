$(document).ready(function () {
  var isLeftnavhidden = false;
  $(".side-menu-btn").click(function () {
    isLeftnavhidden = !isLeftnavhidden;
    if (isLeftnavhidden) {
      // make small left nav bar
      $(".client-left-div").hide();
      $(".client-container").css("grid-template-columns", "100%")
      
    } else {
      // reset left nav bar
      $(".client-left-div").show();
      $(".client-container").css("grid-template-columns", "35% 65%");
    
    }
  });

  $(".client-profile-button").click(function () {
    var modalId = $(this).data("id");
    $("#" + modalId).toggle();
  });

  $(".notification").click(function () {
    var modalId = $(this).data("notfication_id");
    $("#" + modalId).toggle();
  });

  $("#example").DataTable();

  //   billing info
  $("[data-toggle='overlay']").click(function () {
    var target = $(this).data("target");
    $("#" + target).fadeIn(500);
    $("#" + target + " .content-info").animate({ right: 0 }, 500);
  });

  $(".overlay-info .close-content").click(function () {
    var target = $(this).closest(".overlay-info").attr("id");
    $("#" + target).fadeOut(500);
    $("#" + target + " .content-info").animate({ right: -500 }, 500);
  });

  // ftp list
  $("[data-toggle='ftp-overlay']").click(function () {
    var target = $(this).data("target");
    $("#" + target).fadeIn(500);
    $("#" + target + " .content-info").animate({ right: 0 }, 500);
  });

  $(".overlay-info .ftp-close-content").click(function () {
    var target = $(this).closest(".overlay-info").attr("id");
    $("#" + target).fadeOut(500);
    $("#" + target + " .content-info").animate({ right: -500 }, 500);
  });
  // ftp list
  $("[data-toggle='ftp-add-new']").click(function () {
    var target = $(this).data("target");
    $("#" + target).fadeIn(500);
    $("#" + target + " .content-info").animate({ right: 0 }, 500);
  });

  $(".overlay-info .ftp-close-content").click(function () {
    var target = $(this).closest(".overlay-info").attr("id");
    $("#" + target).fadeOut(500);
    $("#" + target + " .content-info").animate({ right: -500 }, 500);
  });
  // upload file
  $("[data-upload='upload-file']").click(function () {
    var target = $(this).data("target");
    var contentInfo = $("#" + target + " .content-info");
    if (contentInfo.is(":animated")) {
      contentInfo.stop(true, true);
      contentInfo.css({ right: -500 });
    }
    $("#" + target).fadeIn(500);
    contentInfo.animate({ right: 0 }, 500);
  });

  $(".overlay-info .ftp-close-content").click(function () {
    var target = $(this).closest(".overlay-info").attr("id");
    $("#" + target).fadeOut(500);
    $("#" + target + " .content-info").animate({ right: -500 }, 500);
  });

  // ftp list modal
  $(".open-modal").click(function () {
    var target = $(this).data("target");
    $("#" + target).show();
  });

  $(".close-modal, .cancle").click(function () {
    $(this).closest(".modal").hide();
  });

  $(".files-details-icon").click(function () {
    $(".fiels-side-details").fadeIn(500);
    $(".upload_file_continer").css("grid-template-columns", "75% 23%");
    $(".files-image-folder").css("grid-template-columns", "repeat(3, 1fr)");

    if (window.matchMedia("(max-width: 768px)").matches) {
      $(".upload_file_continer").css("grid-template-columns", "100%");
      $(".files-image-folder").css("grid-template-columns", "repeat(1, 1fr)");
    }
  });

  $(".close-button").click(function () {
    $(".fiels-side-details").hide();
    $(".upload_file_continer").css("grid-template-columns", "100%");
    $(".files-image-folder").css("grid-template-columns", "repeat(5, 1fr)");

    if (window.matchMedia("(max-width: 768px)").matches) {
      $(".upload_file_continer").css("grid-template-columns", "100%");
      $(".files-image-folder").css("grid-template-columns", "repeat(1, 1fr)");
    }
  });

  $(".icon-table").click(function () {
    $(this).addClass("icon-togle-active");
    $(".icon-picture").removeClass("icon-togle-active");
    $("#uploadFileContainer")
      .removeClass("files-image-folder")
      .addClass("table-view");
    $("#uploadFileContainer .files-image-container").hide();
    $("#uploadFileContainer  table").remove();
    var table = $("<table></table>");
    table.attr({
      id: "table_data",
      class: "display responsive datatable",
    });
    var tableHead =
      "<thead>" +
      "<tr>" +
      "<th>SL</th>" +
      "<th>Name</th>" +
      "<th>Data Modified</th>" +
      "<th>Type</th>" +
      "<th>Size</th>" +
      "<th></th>" +
      "</tr>" +
      "</thead>";
    table.append(tableHead);

    $("#uploadFileContainer .files-image-container").each(function (index) {
      var imgSrc = $(this).find("img").attr("src");
      var name = $(this).find("p").text();
      var DataModified = $(this).find("h2").text();
      var Type = $(this).find("h3").text();
      var Size = $(this).find("h4").text();

      var row =
        "<tbody>" +
        "<tr>" +
        "<td>" +
        (index + 1) +
        "</td>" +
        '<td><img src="' +
        imgSrc +
        '" alt="Product" class="files-table-images"><span></span> ' +
        name +
        " </td>" +
        "<td>" +
        DataModified +
        "</td>" +
        "<td>" +
        Type +
        "</td>" +
        "<td>" +
        Size +
        "</td>" +
        '<td> <input type="checkbox" id="checkbox1" class="cheeck-box"></td>' +
        "</tr>" +
        " </tbody >";
      table.append(row);
    });

    $("#uploadFileContainer").append(table);
    // Initialize DataTables
    $("#table_data").DataTable({
      searching: false,
      paging: false,
      info: false,
    });

    $("#uploadFileContainer").css("overflow-x", "scroll");
  });

  $(".icon-picture").click(function () {
    $(this).addClass("icon-togle-active");
    $(".icon-table").removeClass("icon-togle-active");
    $("#uploadFileContainer")
      .removeClass("table-view")
      .addClass("files-image-folder");
    $("#uploadFileContainer .files-image-container").show();
    $("#uploadFileContainer table").remove();
  });

  $(".cheeck-box").on("click", function () {
    $(this)
      .closest(".files-image-container")
      .toggleClass("image-container-active");
  });
});

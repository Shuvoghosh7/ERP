$(document).ready(function () {
  /* var isLeftnavhidden = false;
  var leftNavWidth = $(".sidebar-content").outerWidth();
  $(".side-menu-btn").click(function () {
    isLeftnavhidden = !isLeftnavhidden;
    if (isLeftnavhidden) {
      // make small left nav bar
      $(".sidebar-content").animate({ left: -leftNavWidth }, 500, function () {
        $(this).hide().css("left", 0);
      }); 
      $("#main-content").addClass("left-nav-hidden");
     
      
    } else {
      // reset left nav bar
      $(".sidebar-content").css("left", -leftNavWidth).show().animate({ left: 0 }, 500);
     
      $("#main-content").removeClass("left-nav-hidden");
    }
    
  }); */

  $(".side-menu-btn2").click(function () {
    var leftNavWidth = $(".sidebar-content").outerWidth();
    // make small left nav bar
    $(".sidebar-content").animate({ left: -leftNavWidth }, 500, function () {
      $(this).hide().css("left", 0);
    });
    $("#main-content").addClass("left-nav-hidden");
  });
  $(".side-menu-btn").click(function () {
    var leftNavWidth = $(".sidebar-content").outerWidth();
    $(".sidebar-content")
      .css("left", -leftNavWidth)
      .show()
      .animate({ left: 0 }, 500);

    $("#main-content").removeClass("left-nav-hidden");
  });

  //Data Table
  $("#example").DataTable();

  // All Project show and hide table ans image foulder

  $(".icon-picture").click(function () {
    $(this).addClass("icon-togle-active");
    $(".icon-table").removeClass("icon-togle-active");
    $("#productContainer .image-container").show();
    $("#productContainer table").remove();
  });

  $(".cheeck-box").on("click", function () {
    $(this).closest(".image-container").toggleClass("image-container-active");
  });

  $(".project-details-icon").click(function () {
    $(".project-side-details").fadeIn(500);
    $(".all-project-container").css("grid-template-columns", "20% 60% 20%");
    $(".project-image-folder").css("grid-template-columns", "repeat(3, 1fr)");
  });

  $(".close-button").click(function () {
    $(".project-side-details").hide();
    $(".all-project-container").css("grid-template-columns", "20% 80%");
    $(".project-image-folder").css("grid-template-columns", "repeat(4, 1fr)");
  });
  $(".mywork-details-icon").click(function () {
    $(".mywork-side-details1").hide();
    $(".mywork-side-details2").show();
  });
  $(".mywork-close-button").click(function () {
    $(".mywork-side-details1").show();
    $(".mywork-side-details2").hide();
  });

  $(".close-button").click(function () {
    $(".project-side-details").hide();
    $(".project-view-content").css("grid-template-columns", "100%");
    $(".project-view-image-folder").css(
      "grid-template-columns",
      "repeat(5, 1fr)"
    );
  });

  // my work show date active
  $(".day").click(function () {
    $(".day").removeClass("active");
    $(this).addClass("active");
  });

  setInterval(function () {
    var currentDate = new Date();
    var formattedTime =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    $("#currentDate").text(formattedTime);
  });

  // my work moual start
  $(".openModal-instruction").click(function () {
    $(".modal-instruction").show();
  });
  $(".instruction-close-btn,.close-modual-btn").click(function () {
    $(".modal-instruction").hide();
  });
  $(".note-openModal").click(function () {
    $(".note-modal").show();
  });
  $(".note-close-btn,close-modual-btn, .note-modal").click(function () {
    $(".note-modal").hide();
  });
  // my work moual end

  //common  upload file module my work
  $(".modal-trigger").click(function () {
    $(".modal-overlay").fadeIn().hasClass("checkClass");
  });

  $(".modal-close").click(function () {
    $(".modal-overlay").fadeOut();
  });

  // live chat start
  $(".open_chat").click(function () {
    $(".chat_content").slideDown(600);
  });

  $(".chat-close-btn").click(function () {
    $(".chat_content").slideUp(600);
  });

  $(".chat-details").click(function () {
    $(".person-chat").show();
  });

  $(".close-chat-details-btn").click(function () {
    $(".person-chat").hide();
    $(".chat_content").hide();
  });
  $(".chat-back-btn").click(function () {
    $(".person-chat").hide();
  });

  //create Group
  $(".create-group").click(function () {
    $(".group-modal-overlay").fadeIn();
  });

  $(".group-modal-close").click(function () {
    $(".group-modal-overlay").fadeOut();
  });

  // live chat end

  // client_project_Deashboard sidebar nav menu start
  $(".dropdowns_menu").click(function () {
    $(this).find(".dropdowns_sub_menu").slideToggle("slow");
    $(this).find(".fa-caret-right").toggleClass("caret_icont");
  });
  // client_project_Deashboard sidebar nav menu start

  $(".project_zoom_icon").click(function () {
    $(".zoom_modal").show();
  });
  $(".zoom_close_icon").click(function () {
    $(".zoom_modal").hide();
  });

  // Schdule jquary code
  $(".input-schedule-data").click(function () {
    $(".individual-employee-schedule").slideToggle();
  });

  $(".add-more").click(function () {
    var newItem = $(".add-new-schedule-form").first().clone();
    newItem.find(".input-schedule-change-data").val(""); 
    newItem.insertBefore($(this)).css("margin-top", "10px");
    newItem.insertBefore($(this));
  });

  // Remove item when "Cancel" is clicked
  $(document).on("click", ".cancle", function () {
    $(this).closest(".add-new-schedule-form").remove(); 
  });

  // schedule_exchange_list side var 
  $("[data-toggle='schedule-ftp-overlay']").click(function () {
    var target = $(this).data("target");
    $("#" + target).fadeIn(500);
    $("#" + target + " .schedule-content-info").animate({ right: 0 }, 500);
  });

  $(".schedule-overlay-info .ftp-close-content").click(function () {
    var target = $(this).closest(".schedule-overlay-info").attr("id");
    $("#" + target).fadeOut(500);
    $("#" + target + " .schedule-content-info").animate({ right: -500 }, 500);
  });

  // shudele _exchange_approve side var 
  $("[data-toggle='sch-approve-ftp-overlay']").click(function () {
    var target = $(this).data("target");
    $("#" + target).fadeIn(500);
    $("#" + target + " .sch-approve-content-info").animate({ right: 0 }, 500);
  });

  $(".sch-approve-overlay-info .ftp-close-content").click(function () {
    var target = $(this).closest(".sch-approve-overlay-info").attr("id");
    $("#" + target).fadeOut(500);
    $("#" + target + " .sch-approve-content-info").animate({ right: -500 }, 500);
  });

});

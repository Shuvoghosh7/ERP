
$(document).ready(function () {
  //Data Table
  $('#example').DataTable();

  //  setup from 
  $('#show-content').click(function () {
    $('#overlay').fadeIn(500);
    $('#content').animate({ right: 0 }, 500);
  });
  $('#close-content').click(function () {
    $('#overlay').fadeOut(500);
    $('#content').animate({ right: -500 }, 500);
  });

  $(".hide-select-client").click(function () {
    $(".Slelect-Client").hide()
  })
  $(".show-select-client").click(function () {
    $(".Slelect-Client").show()
  })

  // All Project show and hide table ans image foulder
  $(".icon-table").click(function () {
    $(".project-image-folder").hide()
    $(".project-show-table").show()
  })
  $(".icon-picture").click(function () {
    $(".project-show-table").hide()
    $(".project-image-folder").show()
  })

  $(".project-details-icon").click(function () {
    $(".project-side-details").fadeIn(500);
    $(".all-project-container").css("grid-template-columns", "20% 60% 20%")
    $(".project-image-folder").css('grid-template-columns', 'repeat(3, 1fr)')
  })

  $(".close-button").click(function () {
    $(".project-side-details").hide();
    $(".all-project-container").css("grid-template-columns", "20% 80%")
    $(".project-image-folder").css('grid-template-columns', 'repeat(4, 1fr)')
  })

  // my work show date active 
  $('.day').click(function () {
    $('.day').removeClass('active');
    $(this).addClass('active');
    // var dayName = $(this).text();
    // var fullName = getFullDayName(dayName);
    // $('.day-name').text(`Month: ${fullName}`);
  });

  setInterval(function () {
    var currentDate = new Date();
    var formattedTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    $('#currentDate').text(formattedTime);
  })


  // my work moual 

  $("#openModal-instruction").click(function () {
    $("#modal-instruction").show();
  });

  // Close the modal when the close button or outside the modal content is clicked
  $(".instruction-close-btn,.close-modual-btn, #modal").click(function () {
    $("#modal-instruction").hide();
  });

  $("#note-openModal").click(function () {
    $("#note-modal").show();
  });

  // Close the modal when the close button or outside the modal content is clicked
  $(".note-close-btn,close-modual-btn, #note-modal").click(function () {
    $("#note-modal").hide();
  });


  //  upload file module my work 
  $('#modal-trigger').click(function () {
    $('#modal-overlay').fadeIn();
  });

  $('#modal-close').click(function () {
    $('#modal-overlay').fadeOut();
  });


  // live chat
  $('#open_chat').click(function () {
    $('#chat_content').slideDown(600);
  });

  $('.chat-close-btn').click(function () {
    $('#chat_content').slideUp(600);
  });

  $("#chat-details").click(function () {
    $(".person-chat").show();
  })

  $(".close-chat-details-btn").click(function () {
    $(".person-chat").hide();
    $('#chat_content').hide();
  })
  $(".chat-back-btn").click(function () {
    $(".person-chat").hide();
  })


  //create Group
  $(".create-group").click(function () {
    $('#group-modal-overlay').fadeIn();
  })

  $("#group-modal-close").click(function () {
    $('#group-modal-overlay').fadeOut();
  })


  // client_project_Details sidebar
  $("#report-link").click(function () {
    $(".client-sumarry").slideToggle("slow");
    // $(this).addClass("active_Link")
    // $("#report-link-text").css('color', '#0F7EC2')
   
  })
  $("#setup-link").click(function () {
    $(".setup-menu").slideToggle("slow");
    // $(this).addClass("active_Link")
    // $("#setup-link-text").css('color', '#0F7EC2')
  })
  


});

// function getFullDayName(dayName) {
//   var fullNames = {
//     'Mon': 'Monday',
//     'Tue': 'Tuesday',
//     'Wed': 'Wednesday',
//     'Thu': 'Thursday',
//     'Fri': 'Friday',
//     'Sat': 'Saturday',
//     'Sun': 'Sunday'
//   };
//   return fullNames[dayName];
// }


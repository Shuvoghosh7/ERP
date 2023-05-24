
$(document).ready(function () {
  //Data Table
  $('#example').DataTable();
  $('#table_data').DataTable({
    searching: false,
    paging: false,
    info: false
  });



  // All Project show and hide table ans image foulder
  $(".icon-table").click(function () {
    $(this).addClass("icon-togle-active")
    $(".icon-picture").removeClass("icon-togle-active")
    $('#productContainer').removeClass('project-image-folder').addClass('table-view');
    $('#productContainer .image-container').hide();
    $('#productContainer  table').remove();
    var table = $('<table></table>');
    table.attr({
      'id': 'table_data',
      'class': 'display datatable', // Add 'datatable' class
    });
    var tableHead = '<thead>' +
      '<tr>' +
      '<th>SL</th>' +
      '<th>Name</th>' +
      '<th>Data Modified</th>' +
      '<th>Type</th>' +
      '<th>Size</th>' +
      '<th></th>' +
      '</tr>' +
      '</thead>';
    table.append(tableHead);

    $('#productContainer .image-container').each(function (index) {
      var imgSrc = $(this).find('img').attr('src');
      var name = $(this).find('p').text();
      var DataModified = $(this).find('h2').text();
      var Type = $(this).find('h3').text();
      var Size = $(this).find('h4').text();

      var row = '<tbody>' + '<tr>' +
        '<td>' + (index + 1) + '</td>' +
        '<td><img src="' + imgSrc + '" alt="Product" class="project-table-images"><span></span> ' + name + ' </td>' +
        '<td>' + DataModified + '</td>' +
        '<td>' + Type + '</td>' +
        '<td>' + Size + '</td>' +
        '<td> <input type="checkbox" id="checkbox1" class="cheeck-box"></td>' +
        '</tr>' +
        ' </tbody >';
      table.append(row);
    });

    $('#productContainer').append(table);
    // Initialize DataTables
    $('#table_data').DataTable({
      searching: false,
      paging: false,
      info: false
    });
  });

 

  $('.icon-picture').click(function () {
    $(this).addClass("icon-togle-active")
    $(".icon-table").removeClass("icon-togle-active")
    $('#productContainer').removeClass('table-view').addClass('project-image-folder');
    $('#productContainer .image-container').show();
    $('#productContainer table').remove(); 
  });

  $('.cheeck-box').on('click', function () {
    $(this).closest('.image-container').toggleClass('image-container-active');
  });

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

  });

  setInterval(function () {
    var currentDate = new Date();
    var formattedTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    $('#currentDate').text(formattedTime);
  })


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
  $('.modal-trigger').click(function () {
    $('.modal-overlay').fadeIn().hasClass("checkClass");
  });

  $('.modal-close').click(function () {
    $('.modal-overlay').fadeOut();
  });







  // live chat start
  $('.open_chat').click(function () {
    $('.chat_content').slideDown(600);
  });

  $('.chat-close-btn').click(function () {
    $('.chat_content').slideUp(600);
  });

  $(".chat-details").click(function () {
    $(".person-chat").show();
  })

  $(".close-chat-details-btn").click(function () {
    $(".person-chat").hide();
    $('.chat_content').hide();
  })
  $(".chat-back-btn").click(function () {
    $(".person-chat").hide();
  })

  //create Group
  $(".create-group").click(function () {
    $('.group-modal-overlay').fadeIn();
  })

  $(".group-modal-close").click(function () {
    $('.group-modal-overlay').fadeOut();
  })

  // live chat end 


  // client_project_Deashboard sidebar nav menu start
  $(".dropdowns_menu").click(function () {
    $(this).find(".dropdowns_sub_menu").slideToggle("slow");
    $(this).find(".fa-caret-right").toggleClass("caret_icont");

  })
  // client_project_Deashboard sidebar nav menu start


  // client_project dashboard card dropdown start
  $(".clientD_btn").click(function () {
    $(this).find(".client_desboard_dropdown").toggle()
  })
  // client_project dashboard card dropdown end





});



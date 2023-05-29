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
            $(".client-container").css("grid-template-columns", "35% 65%")
        }
    });


    $('.client-profile-button').click(function () {
        var modalId = $(this).data('id');
        $('#' + modalId).toggle()
    });

    $('.notification').click(function () {
        var modalId = $(this).data('notfication_id');
        $('#' + modalId).toggle()
    });

  
    $('#example').DataTable();


    $("[data-toggle='overlay']").click(function() {
        var target = $(this).data("target");
        $('#' + target).fadeIn(500);
        $('#' + target + ' .content-info').animate({ right: 0 }, 500);
      });
      
      $('.overlay-info .close-content').click(function () {
        var target = $(this).closest('.overlay-info').attr('id');
        $('#' + target).fadeOut(500);
        $('#' + target + ' .content-info').animate({ right: -500 }, 500);
      });

   /* $(".dropdown-item").click(function(){
    $('.overlay-info').fadeIn(500);
    $('.content-info').animate({ right: 0 }, 500);
   })

   $('.close-content').click(function () {
    $('.overlay-info').fadeOut(500);
    $('.content-info').animate({ right: -500 }, 500);
  }); */



})
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

    //   billing info 
    $("[data-toggle='overlay']").click(function () {
        var target = $(this).data("target");
        $('#' + target).fadeIn(500);
        $('#' + target + ' .content-info').animate({ right: 0 }, 500);
    });

    $('.overlay-info .close-content').click(function () {
        var target = $(this).closest('.overlay-info').attr('id');
        $('#' + target).fadeOut(500);
        $('#' + target + ' .content-info').animate({ right: -500 }, 500);
    });

    // ftp list 
    $("[data-toggle='ftp-overlay']").click(function () {
        var target = $(this).data("target");
        $('#' + target).fadeIn(500);
        $('#' + target + ' .content-info').animate({ right: 0 }, 500);
    });

    $('.overlay-info .ftp-close-content').click(function () {
        var target = $(this).closest('.overlay-info').attr('id');
        $('#' + target).fadeOut(500);
        $('#' + target + ' .content-info').animate({ right: -500 }, 500);
    });
    // ftp list 
    $("[data-toggle='ftp-add-new']").click(function () {
        var target = $(this).data("target");
        $('#' + target).fadeIn(500);
        $('#' + target + ' .content-info').animate({ right: 0 }, 500);
    });

    $('.overlay-info .ftp-close-content').click(function () {
        var target = $(this).closest('.overlay-info').attr('id');
        $('#' + target).fadeOut(500);
        $('#' + target + ' .content-info').animate({ right: -500 }, 500);
    });



    $(".open-modal").click(function() {
        var target = $(this).data("target");
        $("#" + target).show();
      });
    
      $(".close-modal, .cancle").click(function() {
        $(this).closest(".modal").hide();
      });


})
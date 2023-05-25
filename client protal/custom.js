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

  




})
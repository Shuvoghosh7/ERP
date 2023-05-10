/* $(document).ready(function () {
    // $(".side-menu-btn").click(function () {
    //     $(".sidebar-content").show();
    // });
    // $('#show-content').click(function() {
    //     $('#overlay').show(500);
    //   });
    //   $('#close-content').click(function() {
    //     $('#content').animate({ right: '-100%' }, 500, function() {
    //       $('#overlay').fadeOut(500);
    //     });
    //   });

    $('#example').DataTable();

    $('#show-content').click(function () {
        $('#overlay').fadeIn(500);
    });
    $('#close-content').click(function () {
        $('#overlay').fadeOut(500);
    });


})
 */

// dom: 'lrtip',
// lengthChange: false,
//  info: false

// $(document).ready(function () {
//     $('#show-content').click(function () {
//         $('#overlay').fadeIn(500, function () {
//             $('#content').animate({ right: 0 }, 500);
//         });
//     });
//     $('#close-content').click(function () {
//         $('#content').animate({ right: '-100%' }, 500, function () {
//             $('#overlay').fadeOut(500);
//         });
//     });
// });

$(document).ready(function() {
  //Data Table
    $('#example').DataTable();

  //  setup from 
    $('#show-content').click(function() {
      $('#overlay').fadeIn(500);
      $('#content').animate({right: 0}, 500);
    });
    $('#close-content').click(function() {
      $('#overlay').fadeOut(500);
      $('#content').animate({right: -500}, 500);
    });

    $(".hide-select-client").click(function(){
      $(".Slelect-Client").hide()
    })
    $(".show-select-client").click(function(){
      $(".Slelect-Client").show()
    })

    // All Project show and hide table ans image foulder
    $(".icon-table").click(function(){
      $(".project-image-folder").hide()
      $(".project-show-table").show()
    })
    $(".icon-picture").click(function(){
      $(".project-show-table").hide()
      $(".project-image-folder").show()
    })


    
  });
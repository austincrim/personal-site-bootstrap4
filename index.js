$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $('#phone-link').on('focusin', function() {
      $('[data-toggle="tooltip"]').tooltip('show');
    });
    $('#phone-link').on('focusout', function() {
      $('[data-toggle="tooltip"]').tooltip('hide');
    });


  });

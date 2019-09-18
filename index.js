$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $("#phone-link").on("focusin", function() {
    $('[data-toggle="tooltip"]').tooltip("show");
  });

  $("#phone-link").on("focusout", function() {
    $('[data-toggle="tooltip"]').tooltip("hide");
  });

  $(".dark-mode-btn").on("click", function() {
      $(".dark-mode-btn").toggleClass("dark-mode");
      $(".white-section").toggleClass("dark-mode");

    }
  );
});

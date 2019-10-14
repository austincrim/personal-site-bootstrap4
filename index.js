$(function() {
  $(".dark-mode-btn").on("click", function() {
    $("*").toggleClass("dark-mode");
  });
  
  $(document).on("click", 'a[href^="#"]', function(e) {
    e.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        500,
        "swing"
      );
  });
});

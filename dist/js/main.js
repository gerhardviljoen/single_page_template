$("#btnReadMore").on("click", function() {
  const images = $("#section-b").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

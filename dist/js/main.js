$("#btnReadMore").on("click", function() {
  const images = $("#section-b").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

window.addEventListener("load", () => {
  console.log("reload");
  // window.scroll().scrollTop;
});

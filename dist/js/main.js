let contactForm = document.querySelector("#contactForm");
// let btnMessageUs = document.querySelector("#btnMessageUs");

// btnMessageUs.addEventListener("click", showMessageForm);

$("#btnReadMore").on("click", function() {
  const images = $("#section-b").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

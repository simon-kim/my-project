$(document).ready(function() {
  $(".hex").on("mouseenter", function() {
    $(this).addClass("highlight");
    $(this).find(".team").animate({"top": "-14px","opacity": "1"}, "fast");
  });
  $(".hex").on("mouseleave", function() {
    $(this).removeClass("highlight");
    $(this).find(".team").animate({"top": "0","opacity": "0"}, "fast");
  });
});

$('div').hover(
  function() {
    $(this).find("span.name").show();
  },
  function() {
    $(this).find("span.name").hide();
  }
);

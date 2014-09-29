$(".hex").hover(
  function() {
    $(this).find("span.name").show();
  },
  function() {
    $(this).find("span.name").hide();
  }
);

$(".hex").hover(
  function() {
    $(this).find("span.kda").animate({"top": "-14px","opacity": "1"}, "fast");
  },
  function() {
    $(this).find("span.kda").animate({"top": "0","opacity": "0"}, "fast");
  }
);

$(".container").hover(
  function() {
    $(this).find(".hex").animate({"opacity": "1"}, "fast");
  },
  function() {
    $(this).find(".hex").animate({"opacity": "0.3"}, "fast");
  }
);

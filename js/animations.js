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

$("div").hover(
  function() {
    $(this).find(".container").animate({"opacity": "1"}, "fast");
  },
  function() {
    $(this).find(".container").animate({"opacity": "0"}, "fast");
  }
);

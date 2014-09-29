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
    $(this).find("span.kda").show();
  },
  function() {
    $(this).find("span.kda").hide();
  }
);

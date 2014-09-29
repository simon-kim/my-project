var teamSSW = "Samsung White";
var teamSSB = "Samsung Blue";
var teamSHRC = "Star Horn Royal Club";

var adc = "AD Carry;
var supp = "Support";
var mid = "Mid Lane";
var top = "Top Lane";
var jung = "Jungler";

$(function() {
  var team, region, role;

$(".hex.ssw.adc").on("click mouseover", function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + adc;
  $("#notes").html(team + region + role);
  });
});

$(".hex.ssw.supp").on("click mouseover", function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + supp;
  $("#notes").html(team + region + role);
  });
});

$(".hex.ssw.mid").on("click mouseover", function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + mid;
  $("#notes").html(team + region + role);
  });
});

$(".hex.ssw.jung").on("click mouseover", function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + jung;
  $("#notes").html(team + region + role);
  });
});

$(".hex.ssw.top").on("click mouseover", function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + top;
  $("#notes").html(team + region + role);
  });
});

$(".hex.ssw.adc").on("click mouseover", function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + adc;
  $("#notes").html(team + region + role);
  });
});

$(".hex.ssb.jung").on("click mouseover", function() {
  team = "Team: " + teamSSB + "<br />";
  region = "Region: Korea" + "<br />;
  role = "Role: " + jung;
  $("#notes").html(team + region + role);
  });
});

$(".hex.shrc.adc").on("click mouseover", function() {
  team = "Team: " + teamSHRC + "<br />";
  region = "Region: China" + "<br />;
  role = "Role: " + adc;
  $("#notes").html(team + region + role);
  });
});

var teamSSW = "Samsung White";
var teamSSB = "Samsung Blue";
var teamSHRC = "Star Horn Royal Club";

var adc = "AD Carry";
var supp = "Support";
var mid = "Mid Lane";
var toplane = "Top Lane";
var jung = "Jungler";

$(function() {
  var team, region, role;

// need to reduce the code here. find a way to show the role without adding an additional class? we'll see.
$(".hex.ssw.adc").hover( 
  function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + adc;
  $("#notes").html(team + region + role);
  }),

$(".hex.ssw.supp").hover( 
  function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + supp;
  $("#notes").html(team + region + role);
  }),

$(".hex.ssw.mid").hover( function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + mid;
  $("#notes").html(team + region + role);
  }),

$(".hex.ssw.jung").hover( 
  function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + jung;
  $("#notes").html(team + region + role);
  }),

$(".hex.ssw.top").hover(
  function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + toplane;
  $("#notes").html(team + region + role);
  }),

$(".hex.ssw.adc").hover( 
  function() {
  team = "Team: " + teamSSW + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + adc;
  $("#notes").html(team + region + role);
  }),

$(".hex.ssb.jung").hover(
  function() {
  team = "Team: " + teamSSB + "<br />";
  region = "Region: Korea" + "<br />";
  role = "Role: " + jung;
  $("#notes").html(team + region + role);
  }),

$(".hex.shrc.adc").hover(
  function() {
  team = "Team: " + teamSHRC + "<br />";
  region = "Region: China" + "<br />";
  role = "Role: " + adc;
  $("#notes").html(team + region + role);
  });
});

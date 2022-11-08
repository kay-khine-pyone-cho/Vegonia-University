// Jquery Area

// Start navbar
$(document).ready(function () {
  $(".navbuttons").click(function () {
    $(this).toggleClass("crossx");
  });
});

// End navbar

// Javascript Area 25/Aug
// Start studetnt counter section
var getcountervalues = document.querySelectorAll(".countervalues");
console.log(getcountervalues);
getcountervalues.forEach(function (getcountervalue) {
  // console.log(getcountervalue);
  getcountervalue.textContent = 0;

  var updatecounter = function () {
    // console.log("i am working");
    var getcountertarget = +getcountervalue.getAttribute("data-target"); // + => change to number
    // console.log(typeof getcountertarget);
    const getcountercontent = +getcountervalue.textContent;
    // console.log(typeof getcountercontent);
    const incnumber = getcountertarget / 100;
    console.log(incnumber);
    if (getcountercontent < getcountertarget) {
      getcountervalue.textContent = incnumber + getcountercontent;
      setTimeout(updatecounter, 100);
    }
  };

  updatecounter();
});
// End student counter section

// Start rating section
// Start google code for chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Myanmar", 8],
    ["Thailand", 2],
    ["Singapore", 4],
    ["Indonesia", 2],
    ["Srilanka", 8],
  ]);

  var options = {
    title: "International Students",
    is3D: true,
    width: 400,
    height: 400,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}
// end google code for chart
// End rating section

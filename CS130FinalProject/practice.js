$(document).ready(function () {
    $(window).scroll(function () {
        drawLine($("#route"), document.getElementById("path"));
    });
  
    // init the line length
    drawLine($("#route"), document.getElementById("path"));
  
    //draw the line
    function drawLine(container, line) {
      var pathLength = line.getTotalLength(),
        maxScrollTop = ($(document).height() - $(window).height()),
        percentDone = $(window).scrollTop() / (maxScrollTop),
        length = (percentDone/12) * (pathLength);
      line.style.strokeDasharray = [length, pathLength].join(" ");
    }
});
  
var path = document.querySelector('#path');

// Get length of path... ~577px in this demo
var pathLength = path.getTotalLength();

console.log(pathLength)
path.style.strokeDasharray = pathLength + ' ' + pathLength;
console.log(path.style.strokeDasharray)

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;
window.addEventListener("scroll", function(e) {
    console.log('hello')

    // What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;
    
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    
  });
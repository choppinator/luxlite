var stepbl1 = document.getElementById("stepbl1");
var stepbrdr1 = document.getElementById("stepbrdr1");
var stepbl2 = document.getElementById("stepbl2");
var stepbrdr2 = document.getElementById("stepbrdr2");
var stepbl3 = document.getElementById("stepbl3");
var stepbrdr3 = document.getElementById("stepbrdr3");

stepbl1.onmouseover = function() {
    stepbrdr1.style.borderBottom = "3px solid #fff";
}
stepbl1.onmouseout = function() {
    stepbrdr1.style.borderBottom = "3px solid #000";
}
stepbl2.onmouseover = function() {
    stepbrdr2.style.borderBottom = "3px solid #fff";
}
stepbl2.onmouseout = function() {
    stepbrdr2.style.borderBottom = "3px solid #000";
}
stepbl3.onmouseover = function() {
    stepbrdr3.style.borderBottom = "3px solid #fff";
}
stepbl3.onmouseout = function() {
    stepbrdr3.style.borderBottom = "3px solid #000";
}
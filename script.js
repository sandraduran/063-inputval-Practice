//create a click handler for the Post button.

$("button").click(function () {
  var message=$(".newcomment").val();  
 $(".comments").append("<div class='row'><div class='avatar odie'></div><div class='comment'>" + message + "</div></div>");  
});







//Copy and paste the code below inside .append()
 //"<div class='row'><div class='avatar odie'></div><div class='comment'>" + message + "</div></div>"









// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text(brand === "Instagram" ? "Facebook" : "Instagram");
});
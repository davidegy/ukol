"use strict";

$(document).ready(function () {
  var leftSide = $(".left-side");
  var rightSide = $(".right-side");
  var pattern = $(".pattern");
  var leftSideHeight = leftSide.height();
  rightSide.css("height", leftSideHeight + 15);
});
// A $( document ).ready() block.
$(document).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

    // Coloring SVG on footer hyperlink hover
	$( ".a-github, .a-twitter" )
	  .mouseover(function() {
	  	var svgDoc = $(this).children("object")[0].contentDocument; // Get the document object for the SVG
	  	if ($(this).hasClass("a-github")) {
	  		$("path", svgDoc).css({ 'fill' : '#6e5494'});
	  	}
	  	else if ($(this).hasClass("a-twitter")) {
	  		$("path", svgDoc).css({ 'fill' : '#00aced'});
	  	}
	  })
	  .mouseout(function() {
	  	var svgDoc = $(this).children("object")[0].contentDocument; // Get the document object for the SVG
	    $("path", svgDoc).css({ 'fill' : '#000'});
	  });

	// Responsive-Nav
	// var nav = responsiveNav(".nav-collapse");
});

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

  $("#logo_one").click(function(event) {
    event.preventDefault();
    var height = $("#row_one").height();
    $("#row_one").fadeOut("slow", function() {
    $("#banner_one").height(height);
    $("#banner_one").fadeIn("slow");
    });
  });

  $("#logo_two").click(function(event) {
    event.preventDefault();
    var height = $("#row_one").height();
    $("#row_one").fadeOut("slow", function() {
    $("#banner_two").height(height);
    $("#banner_two").fadeIn("slow");
    });
  });

  $("#logo_three").click(function(event) {
    event.preventDefault();
    var height = $("#row_one").height();
    $("#row_one").fadeOut("slow", function() {
    $("#banner_three").height(height);
    $("#banner_three").fadeIn("slow");
    });
  });

  $("#logo_four").click(function(event) {
    event.preventDefault();
    var height = $("#row_two").height();
    $("#row_two").fadeOut("slow", function() {
    $("#banner_four").height(height);
    $("#banner_four").fadeIn("slow");
    });
  });

  $("#logo_five").click(function(event) {
    event.preventDefault();
    var height = $("#row_two").height();
    $("#row_two").fadeOut("slow", function() {
    $("#banner_five").height(height);
    $("#banner_five").fadeIn("slow");
    });
  });

  $("#logo_six").click(function(event) {
    event.preventDefault();
    var height = $("#row_two").height();
    $("#row_two").fadeOut("slow", function() {
    $("#banner_six").height(height);
    $("#banner_six").fadeIn("slow");
    });
  });

  $("#logo_seven").click(function(event) {
    event.preventDefault();
    var height = $("#row_three").height();
    $("#row_three").fadeOut("slow", function() {
    $("#banner_seven").height(height);
    $("#banner_seven").fadeIn("slow");
    });
  });

  $("#logo_eight").click(function(event) {
    event.preventDefault();
    var height = $("#row_three").height();
    $("#row_three").fadeOut("slow", function() {
    $("#banner_eight").height(height);
    $("#banner_eight").fadeIn("slow");
    });
  });

  $("#logo_nine").click(function(event) {
    event.preventDefault();
    var height = $("#row_three").height();
    $("#row_three").fadeOut("slow", function() {
    $("#banner_nine").height(height);
    $("#banner_nine").fadeIn("slow");
    });
  });

  $("#banner_one").click(function(event) {
    event.preventDefault();
    $("#banner_one").fadeOut("slow", function() {
    $("#row_one").fadeIn("slow");
    });
  });

  $("#banner_two").click(function(event) {
    event.preventDefault();
    $("#banner_two").fadeOut("slow", function() {
    $("#row_one").fadeIn("slow");
    });
  });

  $("#banner_three").click(function(event) {
    event.preventDefault();
    $("#banner_three").fadeOut("slow", function() {
    $("#row_one").fadeIn("slow");
    });
  });

  $("#banner_four").click(function(event) {
    event.preventDefault();
    $("#banner_four").fadeOut("slow", function() {
    $("#row_two").fadeIn("slow");
    });
  });

  $("#banner_five").click(function(event) {
    event.preventDefault();
    $("#banner_five").fadeOut("slow", function() {
    $("#row_two").fadeIn("slow");
    });
  });

  $("#banner_six").click(function(event) {
    event.preventDefault();
    $("#banner_six").fadeOut("slow", function() {
    $("#row_two").fadeIn("slow");
    });
  });

  $("#banner_seven").click(function(event) {
    event.preventDefault();
    $("#banner_seven").fadeOut("slow", function() {
    $("#row_three").fadeIn("slow");
    });
  });

  $("#banner_eight").click(function(event) {
    event.preventDefault();
    $("#banner_eight").fadeOut("slow", function() {
    $("#row_three").fadeIn("slow");
    });
  });

  $("#banner_nine").click(function(event) {
    event.preventDefault();
    $("#banner_nine").fadeOut("slow", function() {
    $("#row_three").fadeIn("slow");
    });
  });

})
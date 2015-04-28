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
    $("#banner_one").height(height);
    $("#banner_one").fadeIn("slow");
    });
  });

  $("#logo_three").click(function(event) {
    event.preventDefault();
    var height = $("#row_one").height();
    $("#row_one").fadeOut("slow", function() {
    $("#banner_one").height(height);
    $("#banner_one").fadeIn("slow");
    });
  });

  $("#logo_four").click(function(event) {
    event.preventDefault();
    var height = $("#row_two").height();
    $("#row_two").fadeOut("slow", function() {
    $("#banner_two").height(height);
    $("#banner_two").fadeIn("slow");
    });
  });

  $("#logo_five").click(function(event) {
    event.preventDefault();
    var height = $("#row_two").height();
    $("#row_two").fadeOut("slow", function() {
    $("#banner_two").height(height);
    $("#banner_two").fadeIn("slow");
    });
  });

  $("#logo_six").click(function(event) {
    event.preventDefault();
    var height = $("#row_two").height();
    $("#row_two").fadeOut("slow", function() {
    $("#banner_two").height(height);
    $("#banner_two").fadeIn("slow");
    });
  });

  $("#logo_seven").click(function(event) {
    event.preventDefault();
    var height = $("#row_three").height();
    $("#row_three").fadeOut("slow", function() {
    $("#banner_three").height(height);
    $("#banner_three").fadeIn("slow");
    });
  });

  $("#logo_eight").click(function(event) {
    event.preventDefault();
    var height = $("#row_three").height();
    $("#row_three").fadeOut("slow", function() {
    $("#banner_three").height(height);
    $("#banner_three").fadeIn("slow");
    });
  });

  $("#logo_nine").click(function(event) {
    event.preventDefault();
    var height = $("#row_three").height();
    $("#row_three").fadeOut("slow", function() {
    $("#banner_three").height(height);
    $("#banner_three").fadeIn("slow");
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
    $("#row_two").fadeIn("slow");
    });
  });

  $("#banner_three").click(function(event) {
    event.preventDefault();
    $("#banner_three").fadeOut("slow", function() {
    $("#row_three").fadeIn("slow");
    });
  });

})
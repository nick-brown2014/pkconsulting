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

  $("#logo-1").click(function(event) {
    event.preventDefault();
    var width = $("#logo-1").width();
    var height = $("#logo-1").height() + "px";
    $("#logo-1").fadeOut("slow", function() {
      $("#exp-1").width(width);
      $("#exp-1").css("line-height", height);
      $("#exp-1").fadeIn("slow");
      $("#exp-1").css("display", "inline-block");
    });
  });

  $("#exp-1").click(function(event) {
    event.preventDefault();
    $("#exp-1").fadeOut("slow", function() {
      $("#logo-1").fadeIn("slow");
    });
  });

  $("#logo-2").click(function(event) {
    event.preventDefault();
    var width = $("#logo-2").width();
    var height = $("#logo-2").height() + "px";
    $("#logo-2").fadeOut("slow", function() {
      $("#exp-2").width(width);
      $("#exp-2").css("line-height", height);
      $("#exp-2").fadeIn("slow");
      $("#exp-2").css("display", "inline-block");
    });
  });

  $("#exp-2").click(function(event) {
    event.preventDefault();
    $("#exp-2").fadeOut("slow", function() {
      $("#logo-2").fadeIn("slow");
    });
  });

  $("#logo-3").click(function(event) {
    event.preventDefault();
    var width = $("#logo-3").width();
    var height = $("#logo-3").height() + "px";
    $("#logo-3").fadeOut("slow", function() {
      $("#exp-3").width(width);
      $("#exp-3").css("line-height", height);
      $("#exp-3").fadeIn("slow");
      $("#exp-3").css("display", "inline-block");
    });
  });

  $("#exp-3").click(function(event) {
    event.preventDefault();
    $("#exp-3").fadeOut("slow", function() {
      $("#logo-3").fadeIn("slow");
    });
  });

  $("#logo-4").click(function(event) {
    event.preventDefault();
    var width = $("#logo-4").width();
    var height = $("#logo-4").height() + "px";
    $("#logo-4").fadeOut("slow", function() {
      $("#exp-4").width(width);
      $("#exp-4").css("line-height", height);
      $("#exp-4").fadeIn("slow");
      $("#exp-4").css("display", "inline-block");
    });
  });

  $("#exp-4").click(function(event) {
    event.preventDefault();
    $("#exp-4").fadeOut("slow", function() {
      $("#logo-4").fadeIn("slow");
    });
  });

  $("#logo-5").click(function(event) {
    event.preventDefault();
    var width = $("#logo-5").width();
    var height = $("#logo-5").height() + "px";
    $("#logo-5").fadeOut("slow", function() {
      $("#exp-5").width(width);
      $("#exp-5").css("line-height", height);
      $("#exp-5").fadeIn("slow");
      $("#exp-5").css("display", "inline-block");
    });
  });

  $("#exp-5").click(function(event) {
    event.preventDefault();
    $("#exp-5").fadeOut("slow", function() {
      $("#logo-5").fadeIn("slow");
    });
  });

  $("#logo-6").click(function(event) {
    event.preventDefault();
    var width = $("#logo-6").width();
    var height = $("#logo-6").height() + "px";
    $("#logo-6").fadeOut("slow", function() {
      $("#exp-6").width(width);
      $("#exp-6").css("line-height", height);
      $("#exp-6").fadeIn("slow");
      $("#exp-6").css("display", "inline-block");
    });
  });

  $("#exp-6").click(function(event) {
    event.preventDefault();
    $("#exp-6").fadeOut("slow", function() {
      $("#logo-6").fadeIn("slow");
    });
  });

  $("#about-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about-dest").offset().top
    }, 1000);
  });

  $("#exp-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#exp-dest").offset().top
    }, 1000);
  });

  $("#do-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#do-dest").offset().top
    }, 1000);
  });

  $("#contact-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact-dest").offset().top
    }, 1000);
  });

  $("#top-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#top-dest").offset().top
    }, 1000);
  });

})
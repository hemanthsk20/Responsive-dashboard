$(function () {

  'use strict';

  var aside = $('.side-nav'),
      showAsideBtn = $('.show-side-btn'),
      contents = $('#contents'),
      _window = $(window)

  showAsideBtn.on("click", function () {
    $("#" + $(this).data('show')).toggleClass('show-side-nav');
    contents.toggleClass('margin');
  });

  if (_window.width() <= 767) {
    aside.addClass('show-side-nav');
  }

  _window.on('resize', function () {
    if ($(window).width() > 767) {
      aside.removeClass('show-side-nav');
    }
  });

  // dropdown menu in the side nav
  var slideNavDropdown = $('.side-nav-dropdown');

  $('.side-nav .categories li').on('click', function () {

    var $this = $(this)

    $this.toggleClass('opend').siblings().removeClass('opend');

    if ($this.hasClass('opend')) {
      $this.find('.side-nav-dropdown').slideToggle('fast');
      $this.siblings().find('.side-nav-dropdown').slideUp('fast');
    } else {
      $this.find('.side-nav-dropdown').slideUp('fast');
    }
  });

  $('.side-nav .close-aside').on('click', function () {
    $('#' + $(this).data('close')).addClass('show-side-nav');
    contents.removeClass('margin');
  });


  // Start chart
  // var chart = document.getElementById('myChart');
  // Chart.defaults.global.animation.duration = 2000; 
  // Chart.defaults.global.title.display = false;
  //   Chart.defaults.global.title.text = "Chart"; 
  // Chart.defaults.global.title.position = 'bottom'; 
  // Chart.defaults.global.defaultFontColor = '#999';
  // Chart.defaults.global.defaultFontSize = 10; 

  // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
  // Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
  // Chart.defaults.global.legend.labels.padding = 0;
  // Chart.defaults.scale.ticks.beginAtZero = true;
  // Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
  // Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';
  // Chart.defaults.global.legend.display = false;
});
$(document).ready(function(){
  $( ".search-slt" ).click(function() {
    if($('.search-slt').hasClass('active')){
      $('.search-slt').removeClass('active');
    } else {
      $(this).addClass('active')
    }
  });
});
function upperCaseF(a){
  setTimeout(function(){
      a.value = a.value.toUpperCase();
  }, 1);
}
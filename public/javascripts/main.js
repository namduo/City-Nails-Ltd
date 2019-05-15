
// FORM SUBMISSION
$('#contact-form').submit(function(e) {

  e.preventDefault();

  // Form Validate
  if (
      $('#name-field').val() === '' || 
      $('#email-field').val() === '' || 
      $('#message-field').val() === '' || 
      $('#phone-field').val() === '' ){  
         alert('Please Fill All Fields')
      } else {
		
    $.ajax({
      type: 'post',
      url: '/contact',
      data: {
         name: $('#name-field').val(),
         email: $('#email-field').val(),
            message: $('#message-field').val(),
            phone: $('#phone-field').val()
         },
         
      success: function() {
         // Clear the form
         $('#name-field').val('');
         $('#email-field').val('');
         $('#message-field').val('');
         $('#phone-field').val('');

         // Success Message
         $('#form-message').append('Message sent! We\'ll get back to you as soon as we can.');
         }
			
		});
  }

});

// GOOGLE MAP

function initMap() {

	var location = new google.maps.LatLng(51.5166398, -0.0777387);

	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: location,
		zoom: 18,
		panControl: false,
		scrollwheel: false
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var markerImage = '../images/marker.png';

	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: markerImage
	});

	var contentString = '<div class="info-window">' +
			'<h3 class="map-title text-center">City Nails</h3>' +
			'<div class="info-content">' +
			'<p class="text-center">12 Cobb Street E1, London</p>' +
			'<p class="text-center">Tel: 0203 759 9613 </p>' +
			'</div>' +
			'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 400
	});

	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});

}

// CREATIVE 
 
// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
      $('html, body').animate({
         scrollTop: (target.offset().top - 57)
      }, 1000, "easeInOutExpo");
      return false;
      }
   }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
   $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
   target: '#mainNav',
   offset: 57
});

// Collapse Navbar
var navbarCollapse = function() {
   if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
   } else {
      $("#mainNav").removeClass("navbar-shrink");
   }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Scroll reveal calls
window.sr = ScrollReveal();
sr.reveal('.sr-icons', {
   duration: 600,
   scale: 0.3,
   distance: '0px'
}, 200);
sr.reveal('.sr-button', {
   duration: 1000,
   delay: 200
});
sr.reveal('.sr-contact', {
   duration: 600,
   scale: 0.3,
   distance: '0px'
}, 300);
 
 
 






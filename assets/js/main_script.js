/* ----------------------------------------------------------------------------------------
* Author        : Aman
* Template Name : Resu | Personal Portfolio Template
* File          : Resu main script/js files
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */




    
/* INDEX
----------------------------------------------------------------------------------------

01. General js

02. Navigation js

03. Header js

04. About js

05. Service js

06. Portfolio/work js

07. Testimonial js

08. Contact js

09. Footer js

-------------------------------------------------------------------------------------- */
  
(function ($) {
    'use strict';

    jQuery(document).ready(function () {
			
        /*  -------------------------------------------------------------------------  *
         *                            Preloader                                        *
         *  -------------------------------------------------------------------------  */
          $('#preloader').fadeOut('slow',function(){
              $(this).remove();
          });



        /*  -------------------------------------------------------------------------  *
         *                    change Menu background on scroll donw                    *
         *  -------------------------------------------------------------------------  */
          $(window).on('scroll', function () {
              var menu_area = $('.menu-area');
              if ($(window).scrollTop() > 200) {
                  menu_area.addClass('sticky-menu');
              } else {
                  menu_area.removeClass('sticky-menu');
              }
          });



        /*  -------------------------------------------------------------------------  *
         *                            Navigation js                                    *
         *  -------------------------------------------------------------------------  */
          $(document).on('click', '.navbar-collapse.in', function (e) {
              if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                  $(this).collapse('hide');
              }
          });

          $('body').scrollspy({
              target: '.navbar-collapse',
              offset: 195
          });


        /*  -------------------------------------------------------------------------  *
         *                        Smooth scroll to anchor                              *
         *  -------------------------------------------------------------------------  */
          $('a.smooth_scroll').on("click", function (e) {
              e.preventDefault();
              var anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top - 50
              }, 1000);
          });



        /*  -------------------------------------------------------------------------  *
         *                               Accordion                                     *
         *  -------------------------------------------------------------------------  */
          $('.accordion .panel-heading').on('click', function () {
              
              if (!$(this).hasClass('active')) {
                // clicking inactive panel
                $('.panel-heading').removeClass('active');
                $(this).addClass('active');
              } 
              else {
                // reclicking active panel
                $(this).removeClass('active'); 
              }

          });


        /*  -------------------------------------------------------------------------  *
         *                               Portfolio                                     *
         *  -------------------------------------------------------------------------  */
          $('.portfolio').mixItUp();


        /*  -------------------------------------------------------------------------  *
         *                               Magnific Popup                                *
         *  -------------------------------------------------------------------------  */
          $('.work-popup').magnificPopup({
              type: 'image',
              gallery: {
                  enabled: true
              },
              zoom: {
                  enabled: true,
                  duration: 300, // don't foget to change the duration also in CSS
                  opener: function(element) {
                      return element.find('img');
                  }
              }
              
          });





        /*  -------------------------------------------------------------------------  *
         *                            Testimonial                                      *
         *  -------------------------------------------------------------------------  */
          $(".testimonial-list").owlCarousel({
              items: 2,
              autoPlay: true,
              navigation: true,
              itemsDesktop: [1199, 2],
              itemsDesktopSmall: [980, 1],
              itemsTablet: [768, 1],
              itemsTabletSmall: false,
              itemsMobile: [479, 1],
              pagination: false,
              autoHeight: true,
              navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
          });







        /*  -------------------------------------------------------------------------  *
         *                            Contact Form                                     *
         *  -------------------------------------------------------------------------  */
          // Get the form.
          var form = $('#ajax-contact');

          // Get the messages div.
          var formMessages = $('#form-messages');

          // Set up an event listener for the contact form.
          $(form).submit(function(e) {
              // Stop the browser from submitting the form.
              e.preventDefault();

              // Serialize the form data.
              var formData = $(form).serialize();

              // Submit the form using AJAX.
              $.ajax({
                  type: 'POST',
                  url: $(form).attr('action'),
                  data: formData
              })
              .done(function(response) {
                  // Make sure that the formMessages div has the 'success' class.
                  $(formMessages).removeClass('error');
                  $(formMessages).addClass('success');

                  // Set the message text.
                  $(formMessages).text(response);

                  // Clear the form.
                  $('#name').val('');
                  $('#email').val('');
                  $('#message').val('');
                  form.slideUp();

              })
              .fail(function(data) {
                  // Make sure that the formMessages div has the 'error' class.
                  $(formMessages).removeClass('success');
                  $(formMessages).addClass('error');

                  // Set the message text.
                  if (data.responseText !== '') {
                      $(formMessages).text(data.responseText);
                  } else {
                      $(formMessages).text('Oops! An error occured and your message could not be sent.');
                  }
              });

          });




    });

})(jQuery);
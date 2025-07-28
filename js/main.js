(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Counter-Up Functionality
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('[data-toggle="counter-up"]');
  counters.forEach(counter => {
    const animateCount = () => {
      const target = +counter.textContent.replace(/\D/g, '');
      let count = 0;
      const increment = Math.ceil(target / 100);
      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.textContent = count + '+';
          setTimeout(updateCounter, 20);
        } else {
          counter.textContent = target + '+';
        }
      };
      updateCounter();
    };
    animateCount();
  });
});


$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Modal Popup Functionality
        window.addEventListener('load', function () {
            const modalEl = 
    document.getElementById('imagePopup')
       const popup = new bootstrap.Modal(modalEl);
        popup.show();

        modalEl.addEventListener('hidden.bs.modal' ,
        function () {
            
        });
    });

        function closeModal() {
            const popup = 
        bootstrap.Modal.getInstance(document.getElementById('imagePopup'));
        popup.hide();

        document.getElementById('popupCloseX').style.display = 'none' ;
        }

// Add this to your main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const body = document.body;

    // Toggle navigation
    navbarToggler?.addEventListener('click', function() {
        body.classList.toggle('nav-open');
    });

    // Handle dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                    otherToggle.nextElementSibling.classList.remove('show');
                }
            });

            // Toggle current dropdown
            this.setAttribute('aria-expanded', !isExpanded);
            dropdownMenu.classList.toggle('show');
        });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            navbarCollapse.classList.remove('show');
            body.classList.remove('nav-open');
        }
    });
});


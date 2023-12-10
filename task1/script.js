
    document.addEventListener('DOMContentLoaded', function () {
        var navLinks = document.getElementById('nav-links');
        var toggleBtn = document.getElementById('toggle-btn');

        toggleBtn.addEventListener('click', function () {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        });

        // Close the navigation links when clicking outside the navbar on small screens
        document.addEventListener('click', function (event) {
            if (window.innerWidth <= 998 && !event.target.closest('.navbar')) {
                navLinks.style.display = 'none';
            }
        });
    });


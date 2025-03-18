// -----------------------------Cursor------------------
document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;
}

// left-NAV
document.querySelectorAll('.Left-NAV').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = item.getBoundingClientRect();
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
        cursor.style.width = '80px';
        cursor.style.height = '80px';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 40}px, ${rect.top + rect.height / 2 - 40}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });

    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        document.addEventListener('mousemove', moveCursor);
    });
});

// Responsive Mode: Show cursor only on .Left-NAV component
if (window.innerWidth < 768) {
    const cursor = document.getElementById('custom-cursor');
    const brandElements = document.querySelectorAll('.Left-NAV');

    function hideCursor() {
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.display = 'none';

        // Resume following mouse movements
        document.addEventListener('mousemove', moveCursor);
    }

    brandElements.forEach(item => {
        item.addEventListener('mouseenter', function () {
            cursor.style.display = 'block';

            const rect = item.getBoundingClientRect();
            cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
            cursor.style.width = '80px';
            cursor.style.height = '80px';
            cursor.style.transform = `translate(${rect.left + rect.width / 2 - 40}px, ${rect.top + rect.height / 2 - 40}px)`;

            // Stop following mouse movements in responsive mode
            document.removeEventListener('mousemove', moveCursor);
        });

        item.addEventListener('mouseleave', hideCursor);
    });

    // Hide cursor on touch or scroll
    document.addEventListener('touchstart', hideCursor);
    document.addEventListener('scroll', hideCursor);
}

// Skill Items
document.querySelectorAll('.skill-item').forEach(item => {
    const icon = item.querySelector('.skill-logo'); // Target the icon inside the div

    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = icon.getBoundingClientRect(); // Get the position of the icon

        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.5s';
        cursor.style.width = '80px';
        cursor.style.height = '80px';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 90}px, ${rect.top + rect.height / 2 - 40}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });

    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        document.addEventListener('mousemove', moveCursor);
    });
});

// Heading Points
document.querySelectorAll('.headings').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '100px';
        cursor.style.height = '100px';
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});

// logo
document.querySelectorAll('.brand').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = item.getBoundingClientRect();
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
        cursor.style.width = '200px';
        cursor.style.height = '200px';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 100}px, ${rect.top + rect.height / 2 - 100}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        document.addEventListener('mousemove', moveCursor);
    });
});

// Responsive Mode: Show cursor only on .brand component
if (window.innerWidth < 768) {
    const cursor = document.getElementById('custom-cursor');
    const brandElements = document.querySelectorAll('.brand');

    function hideCursor() {
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.display = 'none';

        // Resume following mouse movements
        document.addEventListener('mousemove', moveCursor);
    }

    brandElements.forEach(item => {
        item.addEventListener('mouseenter', function () {
            cursor.style.display = 'block';

            const rect = item.getBoundingClientRect();
            cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
            cursor.style.width = '200px';
            cursor.style.height = '200px';
            cursor.style.transform = `translate(${rect.left + rect.width / 2 - 100}px, ${rect.top + rect.height / 2 - 100}px)`;

            // Stop following mouse movements in responsive mode
            document.removeEventListener('mousemove', moveCursor);
        });

        item.addEventListener('mouseleave', hideCursor);
    });

    // Hide cursor on touch or scroll
    document.addEventListener('touchstart', hideCursor);
    document.addEventListener('scroll', hideCursor);
}

// images
document.querySelectorAll('.images').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '200px';
        cursor.style.height = '200px';
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});

// Right-NAV
document.querySelectorAll('.Right-NAV').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = item.getBoundingClientRect();
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
        cursor.style.width = '150px';
        cursor.style.height = '50px';
        cursor.style.borderRadius = '0%';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 80}px, ${rect.top + rect.height / 2 - 22}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.borderRadius = '100%';
        document.addEventListener('mousemove', moveCursor);
    });
});

// --------------------------------- scroll logo animation----------------------

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    if (window.scrollY > window.innerHeight * 0.1) {
        navbar.classList.add('navbar-visible');
        logo.classList.add('logo-visible');
    } else {
        navbar.classList.remove('navbar-visible');
        logo.classList.remove('logo-visible');
    }
});

// ---------------------------------- Journey section -----------------------

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item);
    });
});

// -----------------------------Project section---------------------

function showProject(projectId) {
    // Hide all project details
    document.querySelectorAll('.project-details').forEach(function (project) {
        project.classList.add('hidden');
    });

    // Show the selected project details
    document.getElementById(projectId).classList.remove('hidden');
}

// ----------------------------- Section Slide ------------------------

document.querySelectorAll('.nav-rightSide').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const targetPosition = targetSection.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 100; // Duration in milliseconds
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
        }
    });
});

// ------------------------------------menuBar code---------------------
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const responsiveNav = document.getElementById("responsiveNav");
    const icon = menuIcon.querySelector("i");
    const navLinks = document.querySelectorAll("#responsiveNav a");
    const allLinks = document.querySelectorAll("a");

    let lastScrollY = window.scrollY;

    menuIcon.addEventListener("click", function () {
        responsiveNav.classList.toggle("show");

        // Toggle between menu icon (fa-bars) and close icon (fa-times)
        if (responsiveNav.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
            menuIcon.style.transform = "translateY(0)"; // Keep visible
            menuIcon.style.opacity = "1";
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Close menu when clicking a nav link & smoothly scroll to section
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                event.preventDefault();
                const targetSection = document.getElementById(targetId.substring(1));

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: "smooth"
                    });
                }

                // Close menu after clicking a link
                responsiveNav.classList.remove("show");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });

    // Ensure external links (GitHub, LinkedIn, etc.) open normally
    allLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const href = this.getAttribute("href");

            if (href && (href.startsWith("http") || href.startsWith("mailto"))) {
                return;
            }
        });
    });

    // Hide menu icon on scroll down, show on scroll up (only when in "fa-bars" mode)
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const hideThreshold = windowHeight * 0.10; // 10% of window height

        if (scrollY > lastScrollY && scrollY > hideThreshold && icon.classList.contains("fa-bars")) {
            menuIcon.style.transform = "translateY(-110%)";
            menuIcon.style.opacity = "1";
        } else {
            menuIcon.style.transform = "translateY(0)";
            menuIcon.style.opacity = "1";
        }

        lastScrollY = scrollY;
    });
});

// ------------------------------------skill section-------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll('.skill-item');

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up'); // Add the fade-up class
            } else {
                entry.target.classList.remove('fade-up'); // Remove the fade-up class when out of view
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        observer.observe(item); // Observe each skill item
    });
});

// -------------------------------------- Image Slide Left n Right -----------------------------------------------
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Start auto-sliding
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 10000); // Change slide every 5 seconds
}

// Stop auto-sliding
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Initialize swipe functionality
let startX = 0;
let isDragging = false;

document.querySelector('.slides-container').addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.querySelector('.slides-container').addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let moveX = e.clientX - startX;
    if (Math.abs(moveX) > 250) { // Minimum swipe distance
        if (moveX > 0) {
            prevSlide();
        } else {
            nextSlide();
        }
        isDragging = false;
        stopAutoSlide();
        startAutoSlide(); // Restart auto-slide after manual swipe
    }
});

document.querySelector('.slides-container').addEventListener('mouseup', () => {
    isDragging = false;
});

document.querySelector('.slides-container').addEventListener('mouseleave', () => {
    isDragging = false;
});

// Start auto-slide on page load
startAutoSlide();


// ------------------------------------------------------------- Dark Mode ------------------------------------------

document.querySelectorAll('.Dark-mode').forEach(item => {
    item.addEventListener('click', function () {
        // Create and position the sticky circle
        const rect = item.getBoundingClientRect();
        const stickyCircle = document.createElement('div');
        stickyCircle.classList.add('sticky-circle');
        stickyCircle.style.left = `${rect.left + rect.width / 2}px`;
        stickyCircle.style.top = `${rect.top + rect.height / 2}px`;
        document.body.appendChild(stickyCircle);

        // Trigger the animation by setting the final size after a short delay
        setTimeout(() => {
            stickyCircle.style.width = '16000px';
            stickyCircle.style.height = '16000px';
            stickyCircle.style.left = `${rect.left + rect.width / 2 - 8000}px`;
            stickyCircle.style.top = `${rect.top + rect.height / 2 - 8000}px`;
        }, 10);

        // Apply negative effect to the image
        const image = document.querySelector('.ME');
        image.classList.toggle('negative-effect');
    });

    // Get elements by their IDs
    const modeToggle = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const tooltipText = document.getElementById('tooltip-text');

    // Define states for light and dark mode
    let isDarkMode = false; // Assume starting with light mode

    // Toggle icon and tooltip text when clicked
    modeToggle.addEventListener('click', () => {
        // Set a 2-second delay (2000ms)
        setTimeout(() => {
            if (isDarkMode) {
                // Switch to light mode
                modeIcon.classList.remove('fa-sun');
                modeIcon.classList.add('fa-moon');
                tooltipText.textContent = 'Dark Mode'; // Tooltip text for dark mode
            } else {
                // Switch to dark mode
                modeIcon.classList.remove('fa-moon');
                modeIcon.classList.add('fa-sun');
                tooltipText.textContent = 'Light Mode'; // Tooltip text for light mode
            }

            // Toggle the dark mode state
            isDarkMode = !isDarkMode;
        }, 700); // Delay for 2000 milliseconds (2 seconds)
    });

    // Get elements by their IDs
    const modeToggleMobile = document.getElementById('mode-toggle-mobile');
    const modeIconMobile = document.getElementById('mode-icon-mobile');

    // Define states for light and dark mode
    let isDarkModeMobile = false; // Assume starting with light mode

    // Toggle icon and tooltip text when clicked
    modeToggleMobile.addEventListener('click', () => {
        // Set a 2-second delay (2000ms)
        setTimeout(() => {
            if (isDarkModeMobile) {
                // Switch to light mode
                modeIconMobile.classList.remove('fa-sun');
                modeIconMobile.classList.add('fa-moon');
            } else {
                // Switch to dark mode
                modeIconMobile.classList.remove('fa-moon');
                modeIconMobile.classList.add('fa-sun');
            }

            // Toggle the dark mode state
            isDarkModeMobile = !isDarkModeMobile;
        }, 700); // Delay for 2000 milliseconds (2 seconds)
    });
});





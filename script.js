// Select all links in the head_links div
const links = document.querySelectorAll('.head_links a');

// Loop through links and add a click event listener to each
links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 600,   // Keep animations smooth
        offset: 10,      // Avoid animations triggering too early
        debounceDelay: 50, // Optimize resize handling
        throttleDelay: 0,  // Optimize scroll handling
        mirror: true, 
        once: false,     // Allow animations to trigger multiple times
    });

    // Ensure AOS refreshes after all images are loaded
    window.addEventListener('load', () => {
        AOS.refresh();
    });
});

  

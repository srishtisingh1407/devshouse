// Get the current page from your application logic
var currentPage = "/index"; // Update this with the actual current page

// Select the corresponding navigation item and add a class
var navigationItems = document.querySelectorAll('.nav__content ul li a');
navigationItems.forEach(function(item) {
  if (item.getAttribute('href') === currentPage) {
    item.classList.add('active'); // Add your custom class name, e.g., 'active'
  }
});
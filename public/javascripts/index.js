
var currentPage = "/index"; 

var navigationItems = document.querySelectorAll('.nav__content ul li a');
navigationItems.forEach(function(item) {
  if (item.getAttribute('href') === currentPage) {
    item.classList.add('active'); 
  }
});
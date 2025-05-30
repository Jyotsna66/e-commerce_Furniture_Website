
  // Toggle search box visibility when search icon is clicked
  document.getElementById('search-icon').addEventListener('click', function() {
    const searchBox = document.getElementById('search-box-container');
    searchBox.style.display = (searchBox.style.display === 'none' || searchBox.style.display === '') ? 'block' : 'none';
  });


// Wait for images to load before Masonry layout
imagesLoaded('#gallery', function () {
  const msnry = new Masonry('#gallery', {
    itemSelector: '.col-sm-6',
    percentPosition: true
  });

  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      document.querySelectorAll('#gallery > div').forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Re-layout after filtering
      msnry.layout();
    });
  });
});
// <!-- Filter Script -->
// Initialize Isotope after images have loaded
  document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector('#gallery');
    var iso = new Isotope(elem, {
      itemSelector: '.col-sm-6',
      layoutMode: 'fitRows'
    });

    // Filter buttons
    var buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filterValue = btn.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });

        // Active button styling
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

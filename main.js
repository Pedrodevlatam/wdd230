window.onload = function() {
    //  Get the current year and display it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  
    // Get the last modification date of the HTML file and display it in the footer
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
  };
  
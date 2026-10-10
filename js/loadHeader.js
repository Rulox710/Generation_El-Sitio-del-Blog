const DEPTH_HEADER = window.location.pathname.includes('/pages/') ? '../' : './';

fetch(`${DEPTH_HEADER}components/header.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;

    startHeader();
    setupNavigationHeader();
  });

function setupNavigationHeader() {
  document.getElementById("button--home").href = `${DEPTH_HEADER}index.html`;
  document.getElementById("button--about").href = `${DEPTH_HEADER}pages/about.html`;
  document.getElementById("button--contact").href = `${DEPTH_HEADER}pages/contact.html`;
}

function startHeader() {
  const ScrollSensibility = 140;
  const Navbar = document.getElementById('js-main-navigation');
  let lastScrollY = window.pageYOffset;
  window.onscroll = function() {
    const CurrentScrollY = window.pageYOffset;
    // Scroll abajo => hide
    if(CurrentScrollY >= lastScrollY && CurrentScrollY > ScrollSensibility) {
      Navbar.classList.add('hide');
      Navbar.classList.remove('show');
    }
    // Scroll arriba => show
    else {
      Navbar.classList.remove('hide');
      Navbar.classList.add('show');
    }
    lastScrollY = CurrentScrollY;
  }
}

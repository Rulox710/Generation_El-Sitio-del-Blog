const DEPTH_FOOTER = window.location.pathname.includes("/pages/") ? "../" : "./";

fetch(`${DEPTH_FOOTER}components/footer.html`)
  .then(response => response.text())
  .then(data => {
    console.log("Footer cargado:", data);
    document.getElementById("footer-container").innerHTML = data;

    startFooter();
  });

function startFooter() {
  const ScrollSensibility = 140;
  const Navbar = document.getElementById('js-main-footer');
  let lastScrollY = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const CurrentScrollY = window.pageYOffset;
    const MaxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    // final del scroll => mostrar
    if(CurrentScrollY >= MaxScrollY-1) {
      Navbar.classList.remove('hide');
      Navbar.classList.add('show');
    }
    // Scroll abajo => ocultar
    else if(CurrentScrollY >= lastScrollY && CurrentScrollY > ScrollSensibility) {
      Navbar.classList.add('hide');
      Navbar.classList.remove('show');
    }
    // Scroll arriba => mostrar
    else {
      Navbar.classList.remove('hide');
      Navbar.classList.add('show');
    }
    lastScrollY = CurrentScrollY;
  });
}

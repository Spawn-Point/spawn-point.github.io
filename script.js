window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('visible');

  /*
  if (window.scrollY === 0) {
    // At the very top — hide navbar
    navbar.classList.remove('visible');
  } else {
    // Scrolled down anywhere else — show navbar
    navbar.classList.add('visible');
  }*/
});

window.addEventListener('DOMContentLoaded', () => {
  navbar.classList.remove('visible');
  navbarShown = true;
  return;
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll('.fade-in-section');

  function checkFade() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        el.classList.add('is-visible');
      } else {
        el.classList.remove('is-visible'); // if you want it to fade out when scrolled up
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // initial check in case already in view
});

function closeImage(){
  document.getElementById("fullscreenView").style.display = "none";
}

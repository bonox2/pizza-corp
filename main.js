const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


document.body.addEventListener('click',  (event) => {
    const burgerBtn = event.target.closest('.menu-btn')
    if (burgerBtn) {
        document.body.classList.toggle('show-menu')
    }
})
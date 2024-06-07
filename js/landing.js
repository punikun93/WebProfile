let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', buka = () => {
    let navLink = document.querySelector('.nav-links');
    navLink.classList.toggle('open')
    hamburger.classList.toggle('toggle');
});
// close
 tutup = () =>{
    buka();
}



  window.addEventListener("scroll", () => {
    let nav = document.getElementsByTagName('nav')[0];
    nav.classList.toggle("hideung", window.scrollY > 1250 && window.scrollY < 1950);
  });

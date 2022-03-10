const hamBtn = document.querySelector(".hamburger-icon");
const navBar = document.querySelector("#navbar");
const allNavLink = document.querySelectorAll('.nav__link')
hamBtn.addEventListener("click", () => {
  navBar.classList.toggle("hamTog");
  hamBtn.classList.toggle('hamburger-icon-hover')
});

allNavLink.forEach((ele) => {
    ele.addEventListener('click', () => {
        navBar.classList.toggle("hamTog");
        hamBtn.classList.toggle('hamburger-icon-hover')
    })
})
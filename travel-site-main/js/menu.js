export function openMenu() {
  const toggleButton = document.querySelector(".navbar-toggle");
  const navbarLinks = document.querySelector(".navbar div");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
}

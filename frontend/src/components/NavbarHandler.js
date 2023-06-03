import NavbarStyles from "./NavbarStyles.json";

const NavbarHandler = {
  OnScroll() {
    const navbar = document.getElementById("navbar");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if ((winScroll / height) * 100 > 0) {
      navbar.className = NavbarStyles.navbar.scrolled;
    } else {
      navbar.className = NavbarStyles.navbar.def;
    }
  },
};

export default NavbarHandler;

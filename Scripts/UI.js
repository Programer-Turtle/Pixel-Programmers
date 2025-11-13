function LoadNavbar() {
  const Nav = document.createElement("nav");
  Nav.innerHTML = `<a href="index.html" style="text-decoration: none; color: white;"><img style="width: 5rem; margin:4px;" src="Images/Logo.PNG" alt="Home"></a>`;
  document.body.prepend(Nav);
}

function LoadFooter() {
  const Footer = document.createElement("footer");
  Footer.innerHTML = `<div style="display: flex; justify-content: space-between; padding: 1rem"><img style="width: 5rem"src="Images/Logo.PNG"alt="logo"/><div style="display: flex"><a href="https://www.facebook.com/PixelProgrammers/"><img style="width: 3rem; margin: 12px"src="Images/Facebook_Logo_Primary.png"alt="Facebook Logo"/></a></div></div>`;
  document.body.appendChild(Footer);
}

LoadNavbar();
LoadFooter();

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone by-
        <a href="https://www.instagram.com/enthusiast.diy/">DIY ENTHUSIAST</a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/enthusiast.diy/">
          <i class="fa-brands fa-square-instagram fa-2x"></i>
        </a>

        <a href="https://www.instagram.com/enthusiast.diy/">
          <i class="fa-brands fa-linkedin fa-2x"></i>
        </a>

        <a href="https://www.instagram.com/enthusiast.diy/">
          <i class="fa-solid fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};
export default Footer;

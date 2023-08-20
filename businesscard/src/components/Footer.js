import react from "react";
import twitterLogo from "../images/Twitter Icon.png";
import instaLogo from "../images/Instagram Icon.png";
import githubLogo from "../images/GitHub Icon.png";
import facebookLogo from "../images/Facebook Icon.png";

export default function Footer() {
  return (
    <>
      <div className="footer--container">
        <div className="footer--items">
          <a href="https://twitter.com/omarchihadeh">
            <img src={twitterLogo} alt="" className="footer--image" />
          </a>
          <a href="https://www.instagram.com/omar.chihadeh/">
            <img src={instaLogo} alt="" className="footer--image" />
          </a>
          <a href="https://www.github.com/omarchihadeh">
            <img src={githubLogo} alt="" className="footer--image" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100027720973229&mibextid=9R9pXO">
            <img src={facebookLogo} alt="" className="footer--image" />
          </a>
        </div>
      </div>
    </>
  );
}

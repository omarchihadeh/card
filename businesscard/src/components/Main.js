import react from "react";
import emailLogo from "../images/Mail.png";
import linkedinLogo from "../images/linkedin.png";

export default function Main() {
  return (
    <div className="main--container">
      <h3 className="main--heading main--content">Omar Chihadeh</h3>
      <h4 className="main--h4--one main--content">
        Frontend / Backend Developer
      </h4>
      <span className="main--span--two main--content">
        Website Link Channel
      </span>

      <div className="btn--class">
        <a
          className="main--btn btn--email"
          href="mailto:omar.chihadeh.1@gmail.com"
        >
          <img src={emailLogo} className="email" />
          Email
        </a>
        <a
          className="main--btn btn--linkedin"
          href="https://www.linkedin.com/in/omar-chihadeh-232b7224a/"
        >
          <img src={linkedinLogo} className="linkedin" />
          LinkedIn
        </a>
      </div>

      <div className="main--about--interest">
        <h3>About Me</h3>
        <p>
          I'm a Fresh Graduated Web Developer and I'm still working on acquiring
          more experience. My interests range from back-side, front-end, develop
          websites, system management to mobile applications. I am interested in
          all parts of application development. I am well-versed in programming
          and I am also adept at problem-solving techniques and knowledgeable
          about computer languages.
        </p>
        <p>
          I'm creative and like building Frontend pages. I also enjoyed it on
          the backend side, especially using both. PHP-Laravel programmming
          language and MERN Stack. I enjoy coding and creating several websites
          and applications. I am willing to provide the finest service possible
          to my clients.
        </p>
      </div>
    </div>
  );
}

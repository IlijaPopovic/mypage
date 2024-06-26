import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Footer = () => {
  const [submitted, setSubmitted] = useState("Send Message");
  const [disableButton, setdisableButton] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let name = formData.get("name");
    let email = formData.get("email");
    let message = formData.get("message");

    if (!name || !email || !message) {
      setSubmitted("Fill in fields");
      return;
    }

    fetch("https://formspree.io/f/mleqkwqe", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        setSubmitted("Submitted");
      })
      .catch((error) => {
        setSubmitted("Please try again");
      })
      .finally(() => {
        setdisableButton(true);
      });
  };

  return (
    <div className="footer">
      <div className="inner">
        <h2>Get in touch</h2>
        <form
          id="myForm"
          method="post"
          action="https://formspree.io/f/mleqkwqe"
          onSubmit={handleSubmit}
        >
          <div className="fields">
            <div className="fieNameld">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value={submitted} disabled={disableButton} />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Partizanskih+baza+20+Subotica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faHouse} className="iconLogo" />
              <span>Partizanskih baza 20</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Subotica+Serbia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCity} className="iconLogo" />
              <span>Subotica, Serbia</span>
            </a>
          </li>
          <li>
            <a href="tel:+381653310799">
              <FontAwesomeIcon icon={faPhone} className="iconLogo" />
              <span>+381 65 331 07 99</span>
            </a>
          </li>
          <li>
            <a href="mailto:popovic.ilija.99@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="iconLogo" />
              <span>popovic.ilija.99@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ilija-popovi%C4%87-36217917a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="iconLogo" />
              <span>Ilija Popović</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/IlijaPopovic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="iconLogo" />
              <span>Ilija Popović</span>
            </a>
          </li>
          <li>
            <a href=" " target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="iconLogo" />
              <span>ili.ja.ili.ti</span>
            </a>
          </li>
        </ul>
        <p className="copy">&copy; Ilija Popović</p>
      </div>
    </div>
  );
};
export default Footer;

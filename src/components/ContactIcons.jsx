import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactIcons = () => {
  return (
    <div className="flex gap-x-2">
      <a
        href="https://github.com/TapZe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </a>
      <a
        href="https://linkedin.com/in/muhammad-nabil-muyassar-rahman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>
    </div>
  );
};

export default ContactIcons;

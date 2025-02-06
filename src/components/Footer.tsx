import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/mariamehab66" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/marim-ehab-572503262" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:ehabmarim9@gmail.com?" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
        <a href="https://drive.google.com/file/d/1rppQOPykwdEkPP4iLQ0ZomwdsinJDkZV/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><h2>My Resume</h2></a>
        <a href="https://drive.google.com/file/d/1rppQOPykwdEkPP4iLQ0ZomwdsinJDkZV/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFilePdf} size="3x" /></a>
      </div>
      <p>A portfolio by <a href="mailto:ehabmarim9@gmail.com?" target="_blank" rel="noopener noreferrer">Mariam Ehab</a></p>
    </footer>
  );
}

export default Footer;
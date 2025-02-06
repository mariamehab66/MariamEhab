import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import me from '../assets/images/me.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar"  />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mariamehab66" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/marim-ehab-572503262" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ehabmarim9@gmail.com?" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
          </div>
          <h1>Mariam Ehab</h1>
          <h2>Data Analyst</h2>

          <div className="mobile_social_icons">
            <a href="https://github.com/mariamehab66" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/marim-ehab-572503262" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:ehabmarim9@gmail.com?" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
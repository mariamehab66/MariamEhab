import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain,faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "MySQL",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Excel",
    "Power BI",
    "Tableau",
    "R language",
    "Jupyter Notebooks"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "C++",
    "AWS",
    "Python scripting",
    "Google Sheets",
    "Minitab",
    "CSS",
    "HTML",
];

const labelsThird = [
    "Analytical thinking",
    "Adaptability",
    "Continuous learning",
    "Research skills",
    "Coaching",
    "Teamwork",
    "Communication skills",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                <FontAwesomeIcon icon={faChartBar} size="3x"/>
                    <h3>Main Skills & Tools</h3>
                    <p>As a data analyst, I specialize in extracting valuable insights from raw data to support data-driven decision-making. My expertisedata cleaning, exploratory data analysis (EDA), statistical analysis, and data visualization, ensuring accuracy and clarity in findings.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDesktop} size="3x" />
                    <h3>Complementary Skills & Tools</h3>
                    <p>In addition to core data analysis skills, I have experience with complementary tools and technologies that enhance my efficiency and problem-solving capabilities.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Person Skills</h3>
                    <p>Through my studies, courses, and experience in data entry, I discovered my ability to analyze complex data, adapt to new tools, and continuously learn. Working on projects strengthened my research, communication, and teamwork skills, allowing me to collaborate effectively and convey insights clearly.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
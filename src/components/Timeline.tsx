import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import science from '../assets/images/science.png';
import pioneers from '../assets/images/pioneers.png';
import coursera from '../assets/images/coursera.png';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="Education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            iconStyle={{background: 'rgb(255, 255, 255)', color: 'rgb(255, 255, 255)'  }}
            icon={<img src={pioneers} alt="icon" style={{ width: '75px', height: '75px', borderRadius: '40%', position: 'relative', top: '-9px', right: '8px' }} />}
>
            <h3 className="vertical-timeline-element-title">Certification: </h3>
            <h4 className="vertical-timeline-element-subtitle">Google Data Analyst Professional Certificate, part of the Egypt Digital Pioneers initiative </h4>
            <p> fundamentals of data analytics, including data cleaning, analysis, and visualization. working with SQL, Python, R, Spreadsheets, Tableau, and Looker Studio to manipulate and analyze data efficiently. The course also covered data storytelling, dashboards, and reporting, practical experience in solving real-world problems using data-driven approaches.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
             className="vertical-timeline-element--work"
             date="2024"
             iconStyle={{background: 'rgb(255, 255, 255)', color: 'rgb(255, 255, 255)'  }}
             icon={<img src={coursera} alt="icon" style={{ width: '75px', height: '75px', borderRadius: '100%', position: 'relative', top: '-9px', right: '8px'  }} />}
 >
             <h3 className="vertical-timeline-element-title">Certification: </h3>
             <h4 className="vertical-timeline-element-subtitle">Tools for Data Science, Provider: IBM</h4>
             <p>
             Jupyter Notebooks including its features and tools used by R Programmers including RStudio IDE. The earner understands how to use various data science and data visualization tools.
             </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - present"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: 'rgb(255, 255, 255)' }}
            icon={<img src={science} alt="icon" style={{ width: '75px', height: '75px', borderRadius: '50%', position: 'relative', top: '-9px', right: '8px' }} />}
>
            <h3 className="vertical-timeline-element-title">Academic Education:</h3>
            <h4 className="vertical-timeline-element-subtitle">faculty of science, Ain Shams University</h4>
            <p>
            Department of Statistics and Computer Science
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
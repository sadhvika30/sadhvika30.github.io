import React, { useContext, useState } from 'react';
import { ThemeContext } from "../themeProvider";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from '../assets/icons/work.svg';
import { ReactComponent as SchoolIcon } from '../assets/icons/school.svg';
import '../Home.css'; // Import a separate CSS file for styles

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [expandedItem, setExpandedItem] = useState(null); // Track the expanded item
  const typeSchool = 'school';
  const typeWork = 'work';

  const timelineData = [
    {
      id: 0,
      date: 'Sep 2024 - Present',
      title: 'Temporary Worker - Data Analyst',
      subtitle: 'Texas Tech, USA',
      description: [
        'At the STEM CORE Department at Texas Tech University, I work as a Data Analyst where I build dynamic Power BI dashboards to visualize key metrics and research findings that support data-driven decisions. I write and optimize SQL queries to extract and analyze large datasets, and use Snowflake for cloud-based data processing. Additionally, I develop and maintain internal web applications to streamline reporting and feedback collection processes. My work bridges data and education by turning complex information into meaningful insights for faculty, researchers, and stakeholders.'
      ],
      type: typeWork,
    },
    {
      id: 1,
      date: 'Aug 2023 - Sep 2024',
      title: 'Graduate Assistant',
      subtitle: 'Texas Tech University',
      description: ['As a Graduate Assistant in the Dean of Students office at Texas Tech University, I supported data-driven initiatives by developing interactive Power BI dashboards to visualize key student engagement and support metrics. I wrote complex SQL queries to extract, clean, and analyze student data from institutional databases, helping inform policy decisions and strategic planning. I also collaborated with cross-functional teams to identify trends, streamline reporting processes, and deliver actionable insights that enhanced student services and operational effectiveness.'],
      type: typeSchool,
    },
    {
      id: 2,
      date: 'Aug 2023 - May 2025',
      title: 'MS in Computer Science',
      subtitle: 'Texas Tech University',
      description: ['Coursework: Distributed Systems, Big Data Systems, Database Systems, Data Modeling, Operating Systems, Optimization, Artificial Intelligence, Data Visualization.'],
      type: typeSchool,
    },
    {
      id: 3,
      date: 'Jan 2021 - June 2023',
      title: 'Data Analyst',
      subtitle: 'Anheuser-Busch Inbev, India',
      description: [
        'Led migration to Azure cloud, achieving 25% improved scalability and $15,000 annual cost savings. Built and maintained end-to-end data pipelines for financial products (PTP, ATR, OTC) using Python, SQL, and Azure Data Factory, delivering KPI dashboards that enhanced decision-making by 70% while ensuring 99% data availability for critical business processes.'
      ],
      type: typeWork,
    },
    {
      id: 4,
      date: 'Jan 2020 - Jul 2020',
      title: 'Data Engineer Intern',
      subtitle: 'Goldman Sachs, India',
      description: [
        'As a Data Engineer Intern at Goldman Sachs, I worked within the Core Data and Data Engineering teams to design, build, and enhance data pipelines and systems. I collaborated with business stakeholders to define data models, optimize access, and integrate cloud-based tools for efficient data processing. My responsibilities included developing scalable data solutions, automating workflows, and ensuring data accuracy and quality across both real-time and batch environments. I contributed to internal data platforms using open-source technologies, leveraged cloud services, and applied modern engineering practices to support data-driven decision-making across the firm.'
      ],
      type: typeWork,
    },
    {
      id: 5,
      date: 'Jul 2019 - Jul 2023',
      title: 'Bachelor of Technology in CSE',
      subtitle: 'Lovely Professional University, India',
      description: ['Coursework: Data Structures and Algorithms, Object Oriented Programming, Machine Learning, Internet of Things, Data Analytics.'],
      type: typeSchool,
    },
  ];

  const toggleDescription = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null); // Collapse if the same item is clicked
    } else {
      setExpandedItem(id); // Expand the new item
    }
  };

  return (
    <div id="careers" className="vertical-timeline-container">
      <h2 className="text-5xl font-bold text-center my-career-header mb-8 mt-8">My Journey</h2>
      <VerticalTimeline>
  {timelineData.map((item) => (
    <VerticalTimelineElement
      key={item.id}
      date={item.date}
      iconStyle={{ background: item.type === 'work' ? '#00bfff' : '#e91e63' }}
      icon={item.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
      data-type={item.type} // Add data-type attribute for CSS styling
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
      
      {/* Display the description if the item is expanded */}
      {expandedItem === item.id && (
        <p 
          className="vertical-timeline-element-description" 
          dangerouslySetInnerHTML={{ __html: item.description.join(' ') }} // Use dangerouslySetInnerHTML to render HTML
        />
      )}

      {/* Button to toggle description */}
      <button 
        onClick={() => toggleDescription(item.id)} 
        className="cursor-pointer toggle-btn"
        style={{ 
          position: 'absolute', 
          bottom: '0px', 
          right: '10px', 
          fontSize: '14px', 
          padding: '5px 10px', 
          backgroundColor: 'transparent', 
          border: 'none', 
          color: '#7393B3' // Set the color of the text
        }}
      >
        {expandedItem === item.id ? "Hide Description" : "Show Description"}
      </button>

    </VerticalTimelineElement>
  ))}
</VerticalTimeline>
    </div>
  );
};

export default Home;

import React from "react";
import Card from "../components/Card";

const Projects = () => {
  const projectData = [
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=111610&format=png&color=000000", 
      title: "Autonomous Trucking with Remote Monitoring",
      associatedWith: "Texas Tech University",
      skills: "IoT, Mobile Satellites, DQN, Network Coverage, Signal Processing, Python, 3GPP",
      description: [
        "<span class='highlight'>Problem Statement</span>: Investigating connectivity challenges for autonomous trucks in remote regions with limited network infrastructure, focusing on 3GPP standards compliance.",
        "<span class='highlight'>Approach</span>: Designing a DQN-based reinforcement learning agent for network optimization with dynamic bandwidth allocation. Implementing a hybrid IoT-satellite architecture using AWS IoT Core and <a href='https://www.starlink.com/' target='_blank' rel='noopener noreferrer'><i>Starlink</i></a>, with custom protocols for low-latency communication.",
        "<span class='highlight'>Impact</span>: Research in progress, exploring novel approaches to enhance network resilience and signal stability in remote areas. Initial tests show promising results in maintaining consistent connectivity through hybrid network solutions."
      ]
    },

    {
      url: "",  
      imgSrc: "https://img.icons8.com/?size=100&id=31478&format=png&color=000000",
      title: "Optimized External Merge Sort",
      associatedWith: "Texas Tech University",
      skills: "C++, OLAP, Database Systems",
      description: [
        "<span class='highlight'>Problem Statement</span>: Efficiently sorting large datasets exceeding memory capacity with minimal comparison overhead.",
        "<span class='highlight'>Approach</span>: Reduced sorting comparison complexity to logarithmic scale using a tournament tree of losers. Minimized per-row comparison effort to a single integer comparison instruction using Offset Value Coding.",
        "<span class='highlight'>Impact</span>: Achieved highly optimized sorting performance suitable for OLAP systems and large-scale database sorting operations."
      ]
    },
    
    {
      url: "",
      imgSrc: "https://img.icons8.com/plasticine/100/linux-client.png",
      title: "Custom XV6 Operating System Scheduler",
      associatedWith: "Texas Tech University",
      skills: "C, Linux, xv6 Operating System",
      description: [
        "<span class='highlight'>Problem Statement</span>: Default xv6 scheduler lacked priority-based process management.",
        "<span class='highlight'>Approach</span>: Implemented multi-level feedback queue scheduler with aging mechanism. Added support for priority inheritance to prevent priority inversion.",
        "<span class='highlight'>Impact</span>: Successfully demonstrated improved process management with priority-based scheduling. Enhanced system response time for high-priority processes while preventing starvation."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=68239&format=png&color=000000",
      title: "LLM-Enhanced Database Query Solution",
      associatedWith: "Texas Tech University",
      skills: "Python, GenAI, RAG, LLMs, QLoRA, Prompt Engineering",
      description: [
        "<span class='highlight'>Problem Statement</span>: Need for more efficient and accessible database query interfaces for non-technical users.",
        "<span class='highlight'>Approach</span>: Built a Natural Language Interface system using Python and Llama2 for streamlined database queries. Fine-tuned Llama2-7B with QLoRA on <a href='https://yale-lily.github.io/spider' target='_blank' rel='noopener noreferrer'><i>Spider dataset</i></a>, integrating big data technologies for handling large query volumes.",
        "<span class='highlight'>Impact</span>: Achieved 0.361 execution accuracy on extra-hard queries, outperforming baseline models by 5% in execution accuracy and 0.5% in exact match. Reduced query processing time by 40%."
      ]      
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=UKRRxDvDbbdj&format=png&color=000000",
      title: "Brand Performance Analysis Dashboard",
      associatedWith: "Anheuser-Busch Inbev",
      skills: "MySQL, SSIS, Power BI, Snowflake, SAP, Python, Azure",
      description: [
        "<span class='highlight'>Problem Statement</span>: Need for consolidated real-time brand performance analytics across global markets.",
        "<span class='highlight'>Approach</span>: Developed interactive dashboards using MySQL, SSIS, Power BI, and Snowflake to analyze key business metrics, such as brand health and market share, for real-time KPI insights. Integrated data from SAP and internal sources to create multi-dimensional visualizations with dynamic slicers and filters, allowing in-depth analysis of brand performance, premium brand metrics, and global market trends.",
        "<span class='highlight'>Impact</span>: Delivered user-friendly, regularly updated dashboards providing actionable insights, facilitating better decision-making. Contributed to an initiative consolidating 13 dashboards into a unified Power App, enhancing data accessibility and consistency across the organization."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=W9M6LCrTvolF&format=png&color=000000",
      title: "Spotify ETL Pipeline",
      associatedWith: "Personal Project",
      skills: "Python, Airflow, PostgreSQL, Docker, APIs, Pandas",
      description: [
        "<span class='highlight'>Problem Statement</span>: Manual tracking of personal Spotify listening patterns lacked automation and scalability.",
        "<span class='highlight'>Approach</span>: Built ETL pipeline using Apache Airflow DAGs for daily data extraction from Spotify API. Implemented data validation with Pandas and deployed containerized solution using Docker Compose.",
        "<span class='highlight'>Impact</span>: Successfully automated daily music analytics processing with robust error handling and monitoring. Created personal dashboard for tracking listening patterns and discovering music trends."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=45060&format=png&color=000000", 
      title: "Open-source AI Agent",
      associatedWith: "Texas Tech University",
      skills: "OpenAI, Groq, Llama, OpenRouter",
      description: [
        "<span class='highlight'>Problem Statement</span>: Need for cost-effective and efficient routing between different LLM providers.",
        "<span class='highlight'>Approach</span>: Developed a routing system using OpenRouter API to dynamically switch between models (OpenAI, Groq, Llama) based on task requirements and cost constraints.",
        "<span class='highlight'>Impact</span>: Created efficient model selection system reducing API costs by 30% while maintaining performance. Successfully handles different types of queries across multiple LLM providers."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=100&id=NQoLvvpxnQmL&format=png&color=#4E937F",
      title: "Faiss-based Clustering for Efficient IVF Indexing",
      associatedWith: "Texas Tech University",
      skills: "Python, Facebook AI Similarity Search(Faiss), Clustering Algorithms",
      description: [
        "<span class='highlight'>Problem Statement</span>: Optimizing high-dimensional vector search for large-scale LLM applications.",
        "<span class='highlight'>Approach</span>: Implemented various clustering algorithms (K-means variants, DBSCAN, CluStream, STREAM) using Faiss to optimize IVF indexing. Conducted comprehensive benchmarking of algorithms based on index build time, search efficiency, information loss, and cluster balance.",
        "<span class='highlight'>Impact</span>: Identified optimal clustering strategies for efficient and accurate retrieval within the IVF framework, specifically tailored for high-dimensional vector embeddings."
      ]
    },
    {
      url: "",
      imgSrc: "https://img.icons8.com/?size=90&id=Tgrx2Hazfns4&format=png&color=000000",
      title: "Genomic Data Analysis Pipeline",
      associatedWith: "Goldman Sachs",
      skills: "Python, Deep Learning, PyTorch, Bioinformatics, AWS",
      description: [
        "<span class='highlight'>Problem Statement</span>: Need for efficient analysis pipeline for CHIP-Seq and ATAC-seq genomic data.",
        "<span class='highlight'>Approach</span>: Developed deep learning model for DNA sequence analysis. Implemented distributed processing on AWS for parallel data processing. Created custom metrics for biological significance.",
        "<span class='highlight'>Impact</span>: Achieved 8% AUPRC improvement in regulatory region identification. Pipeline successfully processes genomic datasets with validated results against established benchmarks."
      ]
    }
];

  return (
    <div id="projects" className="bg-pink-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Project Gallery</h2>
        <div className="mt-8 flex flex-wrap -mx-4">
          {projectData.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              associatedWith={project.associatedWith}
              skills={project.skills}
              description={project.description}
              zoomOutImage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
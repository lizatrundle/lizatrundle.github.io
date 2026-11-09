import React from 'react'
import './Projects.css'

function Projects() {
  const personalProjects = [
    {
      id: 0,
      title: "Personal Spending Analyzer",
      description: "Pulls CSV exports from three banks and payment apps into one schema, with a React dashboard for category breakdowns, spending trends, and recategorizing transactions.",
      technologies: ["Python", "Flask", "React", "ETL"],
      link: "https://github.com/lizatrundle/spending-analyzer"
    }
  ]

  const academicProjects = [
    {
      id: 1,
      title: "AI Game Agents",
      description: "Enhancing Reinforcement Learning Using DQN with Distributed Training for Taxi and Cartpole",
      technologies: ["Python", "TensorFlow", "Ray"],
      link: "https://github.com/lizatrundle/DS5110-Final-Project"
    },
    {
      id: 2,
      title: "Taxify - Taxi Service Application",
      description: "Full-stack taxi service application with real-time booking and tracking",
      technologies: ["Java", "SQL"],
      link: "https://github.com/lizatrundle/Taxify_SWE"
    },
    {
      id: 3,
      title: "Hoos Getting Fit - Fitness Tracker",
      description: "Comprehensive fitness tracking application for workout logging and progress monitoring",
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      link: "https://github.com/lizatrundle/Hoos-Getting-Fit"
    },
    {
      id: 4,
      title: "Program & Data Structures",
      description: "Data structure implementations from scratch, including hashmap, linked list, and trees, using each for applications like word puzzle solver, postfix calculator, and huffman coding",
      technologies: ["C++"],
      link: "https://github.com/lizatrundle/Program-and-Data-Representation"
    },
    {
      id: 5,
      title: "Algorithms Coursework",
      description: "Advanced algorithm implementations such as backtracking, greedy algorithms, and dynamic programming",
      technologies: ["Python"],
      link: "https://github.com/lizatrundle/Algorithms"
    },
    {
      id: 6,
      title: "Artificial Intelligence Coursework",
      description: "Artificial Intelligence projects including search algorithms, machine learning, and intelligent agents",
      technologies: ["Python"],
      link: "https://github.com/lizatrundle/Artificial-Intelligence"
    },
    {
      id: 7,
      title: "US Marriage Rates Visualization",
      description: "Interactive Tableau visualization mapping marriage percentages by state and geography across the US",
      technologies: ["Tableau", "Data Visualization"]
    }
  ]

  const allProjects = [
    ...personalProjects.map(p => ({ ...p, type: 'Personal' })),
    ...academicProjects.map(p => ({ ...p, type: 'Academic' }))
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        
        <p className="projects-intro">Projects outside of work, including personal and academic</p>
        <div className="projects-grid">
          {allProjects.map(project => (
            <div key={`${project.type}-${project.id}`} className="project-card">
              <span className={`project-label ${project.type.toLowerCase()}`}>{project.type}</span>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="technologies">
                <strong>Tech Stack:</strong> {project.technologies.join(', ')}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="professional-note">
          <p>
            <strong>Note:</strong> My professional projects are under confidentiality agreements and not available in public repositories. See Experience and Selected Work above for what I can share.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects


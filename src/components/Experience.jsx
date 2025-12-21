import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "FTI Consulting",
      role: "Software Developer",
      type: "Full-time",
      dates: "Aug 2024 - Present",
      location: "New York, New York, United States · On-site",
      description: "Forensic Litigation and Consulting Department, Data & Analytics Software Solutions Team",
      responsibilities: [
        "Work on 30-person Agile team—FTI's only internal software engineering group—building customized web applications for internal and external clients in a startup-like environment with high autonomy and ownership",
        "Deliver full-stack features across two major projects: internal AI platform serving 8,000+ employees with multi-tenant architecture (document analysis, expert matching, compliance verification) and custom external client solution",
        "Led AWS production/UAT deployments; implemented WebSocket/SQS features, recursive data structures, deep research and streaming processes; integrated new frameworks into legacy codebase; conducted code reviews and maintained direct client communication",
        "Serve on UX and recruiting taskforces; designed 10+ web pages in Figma for site redesign, led technical workshops, and attended Figma Config conference"
      ],
      certifications: [
        "Public Speaking, Project Management, and Figma courses"
      ],
      skills: ["SQL", "Laravel", "Angular", "React", "AWS", "Figma", "Gitlab", "WebSockets", "SQS", "Reverb"]
    },
    {
      id: 2,
      company: "UVA Engineering",
      role: "Undergraduate Teaching Assistant",
      type: "Part-time",
      dates: "Aug 2022 - May 2024",
      location: "Charlottesville, Virginia, United States · On-site",
      description: "Assisted Teaching in courses CSO1: Computer Systems and Organization, DSA2: Data Structures and Algorithms 2, and CS 1112: Introduction To Programming. Held Head TA role in CSO1, and Jira Task lead in DSA2.",
      skills: ["Python", "C (Programming Language)", "Jira", "Algorithms", "Java"]
    },
    {
      id: 3,
      company: "IBM",
      role: "Backend Developer Intern",
      type: "Internship",
      dates: "May 2023 - Aug 2023",
      location: "New York, New York, United States · On-site",
      description: "Domain: End to End Client Experience, Sales Technology Engineering. Participated in an agile Full Stack internship, updating IBM SalesCloud API to include new filter metrics for prospecting list creation with Node.js, Jest, and MongoDB event logging. Developed a React and Carbon dashboard for IBM sellers to track prospecting metrics and usage. Set foundation for automatic prospecting list generation to increase sellers success.",
      certifications: [
        "IBM Courses: Big Data 101, Docker Essentials: A Developer Introduction, Enterprise Design Thinking, Agile Explorer",
        "Won third place in division-wide intern project showcase"
      ],
      skills: ["Jest Testing", "JavaScript", "MongoDB", "Postman", "Node.js"]
    },
    {
      id: 4,
      company: "Solipay",
      role: "Software Engineer Intern",
      type: "Internship",
      dates: "May 2022 - Aug 2022",
      location: "New York, New York, United States",
      description: "Full Stack Engineering internship in Fintech startup. Strengthened backend with GCP logging, integration testing, email automation, and API endpoints using python. Improved IOS and Android app with Xcode and React: designing welcome screen using dynamic visuals, multiple login options, email verification check, and user onboarding slides.",
      skills: ["React Native", "Python", "JavaScript", "Postman", "Xcode", "Google Cloud Platform (GCP)", "FastAPI"]
    },
    {
      id: 5,
      company: "Various Roles",
      role: "Additional Experience",
      type: "",
      dates: "",
      location: "Charlottesville, Virginia, United States",
      responsibilities: [
        "Social Committee Member - UVA Second Year Council: Elected to represent grade interests, coordinated annual events for sophomore students, handling budgets, catering, and guest management (1 year)",
        "Recruitment Data Assistant - Kappa Alpha Theta sorority: Coordinated logistics and technology for week-long recruitment serving 800+ women (2 years)",
        "Hostess - Sedona Taphouse: Supervised host stand operations, overseeing waitlist, seating, customer service, and training new employees (2 years)",
        "Babysitter : Provided child and animal care for local families, CPR certified (10 years)"
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            <div className="skill-category">
              <h4>Languages:</h4>
              <p>Python, JavaScript, TypeScript, Java, C++, SQL, HTML/CSS, R</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Libraries:</h4>
              <p>React, Laravel, Angular, Node.js, React Native, TensorFlow, NumPy, Pandas</p>
            </div>
            <div className="skill-category">
              <h4>Tools & Platforms:</h4>
              <p>Git, AWS, Google Cloud Platform, MongoDB, Docker, Figma, Adobe Photoshop/Illustrator, Launch Darkly, Filament, WebSockets, Tableau, Xcode, FastAPI, AI tools</p>
            </div>
          </div>
        </div>

        <div className="experience-list">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company} · {exp.type}</p>
                </div>
                <p className="dates">{exp.dates}</p>
              </div>
              {exp.location && <p className="location">{exp.location}</p>}
              <p className="description">{exp.description}</p>
              {exp.responsibilities && (
                <div className="responsibilities-section">
                  <ul className="highlights-list">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
              {exp.projects && (
                <div className="projects-section">
                  <p className="section-label">Projects:</p>
                  <ul className="highlights-list">
                    {exp.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
              {exp.highlights && (
                <div className="highlights-section">
                  <p className="section-label">Additional:</p>
                  <ul className="highlights-list">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              {exp.certifications && (
                <div className="certifications-section">
                  <p className="section-label">Achievements & Certifications:</p>
                  <ul className="highlights-list">
                    {exp.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
              {exp.skills && (
                <div className="skills-used">
                  <p className="skills-label">Skills:</p>
                  <div className="skills-tags">
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


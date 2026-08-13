import React, { useState } from 'react'
import './Experience.css'

function Experience() {
  const [openCards, setOpenCards] = useState(new Set())

  const toggleCard = (id) => {
    setOpenCards(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

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
        "Part of a 30-person Agile team—FTI's only internal engineering group—building web apps for internal and external clients with strong autonomy and ownership",
        "Build full-stack features across three projects at once: an internal AI platform used by 8,000+ employees, plus two external client applications",
        "Architected multi-tenancy layers enabling platform reuse across projects, with data isolation and governance built in",
        "Helped build a modern AI platform with the features users expect from tools like ChatGPT and Claude: Skills, deep research, extended thinking, streaming responses, observability messages, and progress-bar loading states",
        "Serve as primary AWS point of contact — handle UAT/production deployments, debug through CloudWatch logs and direct database queries, and cover deployments for the London team across time zones",
        "Conduct code reviews, attend client meetings with direct client contact, and serve on UX, documentation, and learning taskforces — designed 10+ Figma pages for a site redesign, run a biweekly internal team learning series"
      ],
      architecture: [
        { label: "Backend", value: "Laravel (PHP), RESTful APIs", icon: "ti-server" },
        { label: "Frontend", value: "Angular, React", icon: "ti-device-desktop" },
        { label: "Hosting", value: "AWS (EC2, S3, SQS) — infrastructure managed with Terraform", icon: "ti-cloud" },
        { label: "AI / LLM", value: "Amazon Bedrock, async query processing", icon: "ti-brain" },
        { label: "Data & caching", value: "MySQL, PostgreSQL, Redis (cache, sessions, pub/sub)", icon: "ti-database" },
        { label: "Real-time", value: "WebSockets via Laravel Reverb", icon: "ti-bolt" }
      ],
      certifications: [
        "Led Lightning Talks taskforce—organized speakers, introduced new topics, and hosted sessions",
        "Professional development: Public Speaking, Project Management, and Figma courses",
        "How To Modernize Legacy UX (Without Breaking Everything)",
        "AWS Skills Centers: Becoming an AI Practitioner - Part 1 - Introduction to AI (July 2026)"
      ],
      skills: ["SQL", "Laravel", "Angular", "React", "AWS", "Terraform", "Bedrock", "Figma", "Excel","Gitlab", "WebSockets", "SQS", "Reverb", "Model Prompting", "Redis"]
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
        <div className="experience-list">
          {experiences.map(exp => {
            const isOpen = openCards.has(exp.id)
            return (
              <div
                key={exp.id}
                className={`experience-card${isOpen ? ' expanded' : ''}`}
                onClick={() => toggleCard(exp.id)}
              >
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}{exp.type ? ` · ${exp.type}` : ''}</p>
                  </div>
                  <div className="header-right">
                    <p className="dates">{exp.dates}</p>
                    <span className={`toggle-icon${isOpen ? ' open' : ''}`}>❯</span>
                  </div>
                </div>

                {isOpen && (
                  <div className="card-body">
                    {exp.location && <p className="location">{exp.location}</p>}
                    {exp.description && <p className="description">{exp.description}</p>}
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
                    {exp.architecture && (
                      <div className="architecture-section">
                        <p className="section-label">Project Architecture:</p>
                        <div className="architecture-tile-grid">
                          {exp.architecture.map((item, index) => (
                            <div key={index} className="architecture-tile">
                              <i className={`ti ${item.icon} architecture-tile-icon`} aria-hidden="true"></i>
                              <div>
                                <p className="architecture-tile-label">{item.label}</p>
                                <p className="architecture-tile-value">{item.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
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
                )}
              </div>
            )
          })}
        </div>
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            <div className="skill-category">
              <h4>Languages:</h4>
              <p>Python, JavaScript, Java, SQL, TypeScript, C++, HTML/CSS, R</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Libraries:</h4>
              <p>React, Laravel, Angular, Node.js, React Native, TensorFlow, NumPy, Pandas</p>
            </div>
            <div className="skill-category">
              <h4>Tools & Platforms:</h4>
              <p>AWS, Terraform, Git, Docker, Redis, RESTful API, WebSockets, GCP, MongoDB, Figma, PostgreSQL, Xcode, Excel, Outlook, Tableau, Adobe Photoshop/Illustrator, LaunchDarkly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
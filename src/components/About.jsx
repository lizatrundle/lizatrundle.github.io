import React from 'react'
import './About.css'

const strengths = [
  {
    title: 'Embed with the people I build for',
    text: 'I work out what stakeholders are actually trying to do, not just what they complained about, and turn it into a small, clear scope I ship myself.'
  },
  {
    title: 'Own it end to end',
    text: "From requirements and UX through architecture, release, and on-call. I run UAT and production releases on AWS and Terraform myself."
  },
  {
    title: 'Go beyond the ticket',
    text: "I take on work without being asked, fix what's confusing or cluttered, and stay thorough. When I review teammates' merge requests, I suggest specific changes with code examples."
  },
  {
    title: 'Use AI to my advantage',
    text: "I use agents to plan large features in phases, trace bugs, and draft docs, but I review everything, because I need to be able to explain and debug what I ship."
  }
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="intro">
          I'm a full-stack software engineer based in New York. I graduated from the University of Virginia in 2024 (Computer Science, minor in Data Science) and have spent the past two years at FTI Consulting, building an internal AI platform and client-facing products. I'm happiest working close to the people who use what I build.
        </p>
        <p className="intro">
          Please feel free to reach out—I'd love to connect!
        </p>

        <h3 className="about-subhead">How I work</h3>
        <div className="strengths-grid">
          {strengths.map(s => (
            <div key={s.title} className="strength-card">
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill-category">
              <h4>Customer & product:</h4>
              <p>Requirements gathering, live demos, scoping ambiguous requests, UX design (Figma), stakeholder communication, documentation, UAT</p>
            </div>
            <div className="skill-category">
              <h4>AI & application layer:</h4>
              <p>LLM query processing, response streaming, skills and artifacts, Bedrock-backed models, AI coding agents, rendering and guardrails for model output</p>
            </div>
            <div className="skill-category">
              <h4>Cloud & operations:</h4>
              <p>AWS (ECS, S3, IAM, RDS, SQS, CloudWatch), Terraform, Docker, GitLab CI, LaunchDarkly, production debugging</p>
            </div>
            <div className="skill-category">
              <h4>Data & integrations:</h4>
              <p>ETL pipelines, SQL, Microsoft Graph API, REST APIs, Redis, PostgreSQL, MySQL, MongoDB, Pandas</p>
            </div>
            <div className="skill-category">
              <h4>Languages:</h4>
              <p>Python, JavaScript, TypeScript, PHP, Java, SQL, C++, HTML/CSS, R</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks:</h4>
              <p>Laravel, Angular, React, Node.js, React Native, Filament, TensorFlow, NumPy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

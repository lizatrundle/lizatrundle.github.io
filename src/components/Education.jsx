import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      school: "University of Virginia",
      degree: "BA, Computer Science, Minor in Data Science",
      dates: "Aug 2020 - May 2024",
      gpa: "3.9/4.0",
      description: "Semester Study Abroad: Saint Louis University-Madrid, Computer Science (Jan 2023 - May 2023)",
      activities: "Deans List, Kappa Alpha Theta sorority, Second Year Council, Teaching Assistant, Member of Women in Computing Sciences and Women in Cyber Security clubs",
      coursework: [
        "Artificial Intelligence",
        "Computer Architecture",
        "Cybersecurity",
        "Data Structures and Algorithms 2",
        "Data Visualization",
        "Database Systems",
        "Discrete Mathematics",
        "Foundations of Machine Learning",
        "Introduction to Programming",
        "Program And Data Structures",
        "Programming Languages",
        "Software Development Methods",
        "Software Engineering",
        "Sound Design",
        "Statistics",
        "Technosonics",
        "Theory of Computation",
        "Intro Biology I and II with lab",
        "Intro Chemistry I and II with lab"
      ]
    },
    {
      id: 2,
      school: "Western Albemarle High School",
      degree: "Honors High School Diploma",
      dates: "Aug 2016 - Jun 2020",
      gpa: "4.7/4.0",
      testScores: "ACT: 34",
      apScores: "AP Exam Scores: 5 on AP Literature, AP World History, AP Government, AP US History, AP Spanish, 4 on AP Chemistry, AP Calculus",
      activities: "Varsity Lacrosse Co-Captain, Scholastic Bowl, Model UN, Chess Club Co-President, Book Buddies, National Honors Society, National History Day Nationals, AP Scholar, AP Spanish Award"
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {education.map(edu => (
            <div key={edu.id} className="education-card">
              <h3>{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="dates">{edu.dates}</p>
              {edu.description && <p className="description">{edu.description}</p>}
              {(edu.gpa || edu.testScores || edu.apScores) && (
                <div className="scores">
                  <p className="scores-label">Scores:</p>
                  <ul className="scores-list">
                    {edu.gpa && <li>GPA: {edu.gpa}</li>}
                    {edu.testScores && <li>{edu.testScores}</li>}
                    {edu.apScores && <li>{edu.apScores}</li>}
                  </ul>
                </div>
              )}
              {edu.activities && (
                <div className="activities">
                  <p className="activities-label">Activities:</p>
                  <p className="activities-text">{edu.activities}</p>
                </div>
              )}
              {edu.coursework && (
                <div className="coursework">
                  <p className="coursework-label">Relevant Coursework:</p>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, index) => (
                      <span key={index} className="course-item">{course}</span>
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

export default Education


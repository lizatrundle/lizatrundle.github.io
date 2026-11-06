import React from 'react'
import './Work.css'

// Client and product names are intentionally generic (confidentiality).
const work = [
  {
    title: 'SharePoint folder sync',
    text: 'Keeps AI answers current with source documents. Fail-closed deletes, and sync time cut from ~33s to under 1s. Ongoing, multi-phase, multi-month, with continuous iteration.'
  },
  {
    title: 'Data retention and legal hold',
    text: 'Config-driven framework that deletes data on schedule while guaranteeing held data is never touched. Ongoing, multi-phase, multi-month, with continuous iteration.'
  },
  {
    title: 'Real-time AI streaming and reliability',
    text: 'Model responses streamed over SSE and WebSockets, with global alerts and a timeout sweeper so users never sit on a stuck spinner.'
  },
  {
    title: 'Artifacts and marketplace',
    text: 'Publishing, sharing, and bookmarking for AI-generated outputs like HTML pages and CSVs, with permissions and tenant gating. Built across several phases.'
  },
  {
    title: 'Document upload and ingestion visibility',
    text: 'Batch upload with live progress and clear per-file failure reasons, so users can see what happened instead of guessing.'
  },
  {
    title: 'Client data ETL',
    text: 'Monthly pipeline that validates messy client files before they reach production, because incentive pay depends on them.'
  }
]

function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <h2>Selected Work</h2>
        <p className="work-intro">
          Selected large features I owned end to end.
        </p>

        <ul className="work-list">
          {work.map(w => (
            <li key={w.title}>
              <strong>{w.title}</strong>
              <span>{w.text}</span>
            </li>
          ))}
        </ul>

        <p className="work-cta">
          I'd love to go more in depth on any of these. <a href="mailto:lizatrundle@gmail.com">Get in touch</a>.
        </p>
      </div>
    </section>
  )
}

export default Work

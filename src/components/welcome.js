import React, { Component } from 'react';
import Remarkable from 'remarkable'

// render

var md = new Remarkable({
  html: true,
  breaks: true,
})

function Welcome(props) {
  
  const {
    title,
    subtitle,
    description,
    buttonTitle,
    descriptionhtml = md.render(description.description),
  } = props.content

  return (
    <section>
      <div className="Container">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: descriptionhtml }} />
        <a
          style={{display: 'inline-block', cursor: 'pointer', textDecoration: 'none'}}
          href="glaubensbekenntnis">
          <button>{buttonTitle}</button>
        </a>
      </div>
    </section>
  )
};

export default Welcome;



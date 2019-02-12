import React, { Component } from 'react';
import Remarkable from 'remarkable'

import eyecatcher from '../images/efg_eyecatcher.jpg';

// render

var md = new Remarkable({
  html: true,
  breaks: true,
})

var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")",
  height: "500px",
  backgroundSize: "cover",
  backgroundAlignment: "50% 50%"
};

function Eyecatcher(props) {
  
  const {
    title,
    subtitle,
    description,
    buttonTitle,
    descriptionhtml = md.render(description.description),
  } = props.content

  return (
    <section>
      <div style={eyecatcherBackground} />
      <div className="Container">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div dangerouslySetInnerHTML={{ __html: descriptionhtml }} />
        <button>{buttonTitle}</button>
      </div>
    </section>
  )
};

export default Eyecatcher;



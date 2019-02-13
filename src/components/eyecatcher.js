import React, { Component } from 'react';

import eyecatcher from '../images/efg_eyecatcher.jpg';

function Eyecatcher(props) {
  
  var heightvalue = ''

  if(props.size == 'small') {
    heightvalue = '400px'
  } else {
    heightvalue = '500px'
  }

  console.log(heightvalue)

  var eyecatcherBackground = {
    backgroundImage: "url(" + eyecatcher + ")",
    height: heightvalue,
    backgroundSize: "cover",
    backgroundAlignment: "50% 50%"
  };



  return (
    <section>
      <div style={eyecatcherBackground} />
    </section>
  )
};

export default Eyecatcher;



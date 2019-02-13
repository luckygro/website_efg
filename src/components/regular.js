import React, { Component } from 'react';
import Remarkable from 'remarkable'

import '../style/regular.css'

// render

var md = new Remarkable({
  html: true,
  breaks: true,
})

class EventTile extends Component {
  state = {
    status: 'closed',
    style: {maxHeight: '0px'},
  }

  handleChange = () => {

    // update state
    if(this.state.status == 'open') {
      this.setState({
        status: 'close',
        style: {maxHeight: '0px'}
      })
    
    } else {
      this.setState({
        status: 'open',
        style: {maxHeight: '300px'}
      })
    }

    // update style

  }

  render() {

    const {
      title,
      image,
      bibleText,
      bibleVerse,
      dateDay,
      dateTime,
      description,
      descriptionhtml = md.render(description.description),
      isImage = image 
    } = this.props.content
  
    return (
      <div className="EventTile" onClick={this.handleChange}>

        <div className="TileHeader">
          <h4 style={{margin: "0", padding: "0", color: "#fff"}}>{title}</h4>
          <span style={{color: "#fff"}}>{dateDay}, {dateTime} Uhr</span>
        </div>

        <div className="TileContent" style={this.state.style}>
          <div dangerouslySetInnerHTML={{ __html: descriptionhtml }} />
          <div>
            <span style={{color: "#29ABE2"}}>{bibleText}</span>
            <span style={{color: "#999999"}}> - {bibleVerse}</span>
          </div>
        </div>
        
      </div>
    )

  }
  
}

const RegularEvents = ({ list }) => (
  <div>
    {list.map(singleitem => (
      <Item node={singleitem} key={singleitem.node.slug} />
    ))}
  </div>
)

class Regular extends Component {
  render() {
    const regularEvents = this.props.regularEventsList
    
    return (
        <section style={{backgroundColor: "#eee"}}>
          <div className="Container">
            <h3>Veranstaltungen</h3>
            <div>
              {regularEvents.map(({ node }) => {
                  return (
                    <EventTile content={node} key={node.slug} />
                  )
                })}
            </div>
          </div>
        </section>
    );
  }
}

export default Regular;



import React, { Component } from 'react';
import Remarkable from 'remarkable'

import Special from './special'

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
    const specialEvents = this.props.specialEventsList
    const moreEventsHtml = md.render(this.props.moreEvents)
    
    return (
        <section style={{backgroundColor: "#eee"}}>
          <div className="Container">
            <div style={{width: '60%', float: 'left'}} >
              <h3>Veranstaltungen</h3>
              <p>Wir freuen uns, Sie bei unseren regelmäßigen Veranstaltungen begrüßen zu dürfen. Diese finden in den Räumen unserer Gemeinde in Pforzheim statt. Wenn Sie mehr Informationen wünschen, klicken Sie bitte auf die jeweilige Veranstaltung.</p>
              <div>
                {regularEvents.map(({ node }) => {
                    return (
                      <EventTile content={node} key={node.slug} />
                    )
                  })}
              </div>

              <div dangerouslySetInnerHTML={{ __html: moreEventsHtml }} />
            </div>
            
            <div style={{width: '40%', float: 'left', position: 'relative'}}>
              <div style={{backgroundColor: '#fff', marginLeft: '20px', padding: '20px', top: '-20px', position: 'relative'}}>
                <h3>besondere Veranstaltungen</h3>
                <Special specialEventsList={specialEvents}/>
              </div>
              
            </div>

          </div>

        </section>
    );
  }
}

export default Regular;



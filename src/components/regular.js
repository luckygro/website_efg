import React, { Component } from 'react';
import Remarkable from 'remarkable'

// render

var md = new Remarkable({
  html: true,
  breaks: true,
})

function EventTile(props) {

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
  } = props.node

  return (
    <div style={{
      width: "50%",
      backgroundColor: "#fff",
      marginBottom: "20px"
      }}>

      <div style={{backgroundColor: "#ddd", padding: "10px 20px"}}>
        <h4 style={{margin: "0", padding: "0", color: "#fff"}}>{title}</h4>
        <span style={{color: "#fff"}}>{dateDay}, {dateTime} Uhr</span>
      </div>
      <div style={{padding: "10px 20px"}}>
        <span dangerouslySetInnerHTML={{ __html: descriptionhtml }} />
        <span style={{color: "#29ABE2"}}>{bibleText}</span>
        <span style={{color: "#999"}}> - {bibleVerse}</span>
      </div>
      
    </div>
  )
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
            <h3>Regelmäßige Veranstaltungen</h3>
            <div>
              {regularEvents.map(({ node }) => {
                  return (
                    <EventTile node={node} key={node.slug} />
                  )
                })}
            </div>
          </div>
        </section>
    );
  }
}

export default Regular;



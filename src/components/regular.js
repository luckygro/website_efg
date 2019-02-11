import React, { Component } from 'react';
import Remarkable from 'remarkable'

// render components

function EventTile(props) {

  const {
    title,
    image,
    bibleText,
    bibleVerse,
    dateDay,
    dateTime,
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
        <span style={{color: "#fff"}}>{dateDay}, {dateTime}</span>
      </div>
      <div style={{padding: "10px 20px"}}>
        <p>{bibleText}</p>
        <span>{bibleVerse}</span>
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



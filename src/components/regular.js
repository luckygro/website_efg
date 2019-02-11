import React, { Component } from 'react';


// render components

function EventTile(props) {

  const {
    title,
    image,
    bibleText,
    bibleVerse,
    isImage = image 
  } = props.node

  return (
    <div style={{
      width: "50%",
      backgroundColor: "#fff",
      padding: "20px",
      marginBottom: "20px"
      }}>

      <h4 style={{margin: "0", padding: "0"}}>{title}</h4>
      <span>{bibleText}</span>
      <span>{bibleVerse}</span>

      <div>
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



import React, { Component } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

function SpecialEvent(props) {

    const {
        title,
        dateTime
    } = props.content

    let now = moment()

    // don't show passed events
    if (now.isAfter(dateTime)) {
        return null
      }

    // show upcoming event
    return (
        <div className="SpecialEventTile">
            <span className="Title">{title}</span>
            <span>
                <i style={{marginRight: '8px'}}><FontAwesomeIcon icon={faCalendar} /></i>
                <Moment format="D. MMMM YYYY HH:mm">{dateTime}</Moment> Uhr
            </span>
        </div>

    )
};

class Special extends Component {
    render() {
      const specialEvents = this.props.specialEventsList
      
      return (
          
            <div>
            {specialEvents.map(({ node }) => {
                return (
                    <SpecialEvent content={node} key={node.slug} />
                )
                })}
            </div>
      );
    }
}

export default Special;
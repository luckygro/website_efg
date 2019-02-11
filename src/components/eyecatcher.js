import React, { Component } from 'react';

import eyecatcher from '../images/efg_eyecatcher.jpg';

var eyecatcherBackground = {
  backgroundImage: "url(" + eyecatcher + ")",
  height: "500px",
  backgroundSize: "cover",
  backgroundAlignment: "50% 50%"
};

class Header extends Component {
  render() {
    return (
        <section>
          <div style={eyecatcherBackground} />
          <div className="Container">
            <h1>Herzlich Willkommen</h1>
            <h3>auf der Website der EFG in Pforzheim</h3>
            <p>Als eine Gemeinde von Christen mit evangelischem Schriftverständnis und biblischer Ausrichtung ist unsere Glaubens- und Lebensmitte Jesus Christus - der Sohn Gottes. Wir verstehen uns als eine örtliche Gemeinde, die ein Teil der weltweiten Glaubensgemeinschaft aller bekennenden Christen über alle Konfessionen und Organisationen hinweg ist.</p>
            <p>Unser Herr, unser Heiland, unser Fürsprecher, unser Glaube, unsere Hoffnung, unsere Liebe, unser Trost, unser Friede, unser Halt, unsere Freude ... tragen einen Namen: Jesus Christus.</p>
            <button>Unser Glaubensbekenntnis</button>
          </div>
        </section>
    );
  }
}

export default Header;



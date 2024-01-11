import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div
          className="cards-container"
        >
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetImage={ planet.image }
              planetName={ planet.name }
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;

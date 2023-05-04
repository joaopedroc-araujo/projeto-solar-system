import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {Planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </>
    );
  }
}

export default SolarSystem;

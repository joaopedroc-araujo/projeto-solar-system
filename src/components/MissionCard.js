import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="mission-card"
      >
        <h3 data-testid="mission-name">{name}</h3>
        <p data-testid="mission-country">
          {country}
          {' '}
          -
          {' '}
          {year}
        </p>
        <p
          data-testid="mission-destination"
        >
          {destination}

        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default PlanetCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2
        style={ {
          display: 'flex',
          justifyContent: 'center',
          margin: '30px' } }
      >
        {headline}

      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;

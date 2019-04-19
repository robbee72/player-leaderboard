import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import map from 'lodash/map';

class Players extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(key) {
    const { playersRef } = this.props;

    playersRef.child(key);
  }

  handleDeselect(key) {
    const { playersRef } = this.props;

    playersRef.child(key).remove();
  }

  render() {
    const { players } = this.props;
    return (
      <section className="Restaurants">
        {map(players, (player, key) => {
          return (
            <Player
              key={key}
              {...player}
              handleSelect={() => this.handleSelect(key)}
              handleDeselect={() => this.handleDeselect(key)}
            />
          );
        })}
      </section>
    );
  }
}

Players.propTypes = {
  playersRef: PropTypes.object.isRequired,
  players: PropTypes.object
};

export default Players;

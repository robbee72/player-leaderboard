import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  render() {
    const { name, status, finished } = this.props;

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{status}</td>
              <td>{finished}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.array,
  name: PropTypes.string,
  status: PropTypes.string,
  finished: PropTypes.string,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};
export default Player;

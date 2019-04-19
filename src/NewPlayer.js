import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Newplayer extends Component {
  constructor() {
    super();
    this.state = {
      name: '  '
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.name) return false;

    this.props.playersRef.push({ name: this.state.name });
    this.setState({ name: '' });
  }

  render() {
    const { name } = this.state;

    return (
      <table className="Newplayer">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={name}
                placeholder="Enter player's name"
                onChange={event => this.setState({ name: event.target.value })}
              />

              <button onClick={this.handleSubmit} disabled={!name}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

Newplayer.propTypes = {
  playersRef: PropTypes.object
};

export default Newplayer;

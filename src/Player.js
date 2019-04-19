import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  render() {
    const {
      name,
      hole1,
      hole2,
      hole3,
      hole4,
      hole5,
      hole6,
      hole7,
      hole8,
      hole9,
      hole10,
      hole11,
      hole12,
      hole13,
      hole14,
      hole15,
      hole16,
      hole17,
      hole18
    } = this.props;

    let outScore =
      hole1 + hole2 + hole3 + hole4 + hole5 + hole6 + hole7 + hole8 + hole9;
    let inScore =
      hole10 +
      hole11 +
      hole12 +
      hole13 +
      hole14 +
      hole15 +
      hole16 +
      hole17 +
      hole18;
    let totalScore = outScore + inScore;

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{name}</td>

              <td>{hole1}</td>
              <td>{hole2}</td>
              <td>{hole3}</td>
              <td>{hole4}</td>
              <td>{hole5}</td>
              <td>{hole6}</td>
              <td>{hole7}</td>
              <td>{hole8}</td>
              <td>{hole9}</td>
              <td className="scorecard">{outScore}</td>
              <td>{hole10}</td>
              <td>{hole11}</td>
              <td>{hole12}</td>
              <td>{hole13}</td>
              <td>{hole14}</td>
              <td>{hole15}</td>
              <td>{hole16}</td>
              <td>{hole17}</td>
              <td>{hole18}</td>
              <td className="scorecard">{inScore}</td>
              <td className="scorecardTotal">{totalScore}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string,

  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};
export default Player;

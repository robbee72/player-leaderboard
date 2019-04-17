import React from 'react';
import Players from '../data/players.json';

const PostList = props => {
  return (
    <div>
      <p> The Masters Field 2019</p>
      {Players.map((player, index) => {
        return (
          <div key={player.id}>
            <table className="leaderboard">
              <tbody>
                <tr>
                  <td className="playername">{player.name}</td>
                  <td className="playerfinish">{player.finished}</td>
                  <td className="playerscore">{player.score}</td>
                  <td className="playertopar">{player.topar}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;

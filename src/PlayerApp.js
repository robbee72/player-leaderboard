import React, { Component } from 'react';
import { database } from './firebasedata/firebase';

import NewPlayer from './containers/NewPlayer';
import Players from './Players';

class PlayerApp extends Component {
  constructor(props) {
    super(props);
    this.playersRef = null;
    this.state = {};
  }

  componentWillMount() {
    this.playersRef = database.ref('players');
    this.playersRef.on('value', snapshot => {
      this.setState({ players: snapshot.val() });
    });
  }
  render() {
    const { players } = this.state;

    return (
      <div>
        <header>
          <h1 className="PlayerApp">Player Profile</h1>
        </header>
        <div>
          <NewPlayer playersRef={this.playersRef} />
          {players && (
            <Players players={players} playersRef={this.playersRef} />
          )}
        </div>
      </div>
    );
  }
}

export default PlayerApp;

import React from 'react';
import PropTypes from 'prop-types';

import Firebase from 'firebase';

class NewPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref('/')
      .set(this.state);
    console.log('DATA SAVED');
  };

  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let status = this.refs.status.value;
    let finished = this.refs.finished.value;
    let uid = this.refs.uid.value;

    if (uid && name && status) {
      const { players } = this.state;
      const devIndex = players.findIndex(data => {
        return data.uid === uid;
      });
      players[devIndex].name = name;
      players[devIndex].status = status;
      this.setState({ players });
    } else if (name && status) {
      const uid = new Date().getTime().toString();
      const { players } = this.state;
      players.push({ uid, name, status, finished });
      this.setState({ players });
    }

    this.refs.name.value = '';
    this.refs.status.value = '';
    this.refs.finished.value = '';
    this.refs.uid.value = '';
  };

  removeData = player => {
    const { players } = this.state;
    const newState = players.filter(data => {
      return data.uid !== player.uid;
    });
    this.setState({ players: newState });
  };

  updateData = player => {
    this.refs.uid.value = player.uid;
    this.refs.name.value = player.name;
    this.refs.status.value = player.status;
    this.refs.finished.value = player.finished;
  };

  render() {
    const { players } = this.state;

    return (
      <React.Fragment>
        <div>
          <div>
            <div>
              <h3>The Masters</h3>
            </div>
          </div>
          <div>
            <div>
              {players.map(player => (
                <div key={player.uid}>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>{player.name}</td>
                          <td>{player.status}</td>
                          <td>
                            <button
                              onClick={() => this.removeData(player)}
                              className="btn btn-link"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => this.updateData(player)}
                              className="btn btn-link"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h3>Add new player</h3>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input type="hidden" ref="uid" />
                  <div>
                    <label>Name</label>
                    <input type="text" ref="name" placeholder="Name" />
                  </div>
                  <div>
                    <label>Status</label>
                    <input type="text" ref="status" placeholder="Status" />
                  </div>
                  <div>
                    <label>Finished</label>
                    <input type="text" ref="finished" placeholder="Finished" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NewPlayer.propTypes = {
  playersRef: PropTypes.object.isRequired,
  players: PropTypes.object
};

export default NewPlayer;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Newplayer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '  ',
//       status: ' '
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     this.props.playersRef.push({ name: this.state.name });
//     this.setState({ name: '' });
//   }

//   render() {
//     const { name } = this.state;

//     return (
//       <table className="Newplayer">
//         <tbody>
//           <tr>
//             <td>
//               <input
//                 type="text"
//                 value={name}
//                 placeholder="Enter player's name"
//                 onChange={event => this.setState({ name: event.target.value })}
//               />

//               <button onClick={this.handleSubmit} disabled={!name}>
//                 Add
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

// Newplayer.propTypes = {
//   playersRef: PropTypes.object
// };

// export default Newplayer;

import React from 'react';

import Firebase from 'firebase';

class PlayerChange extends React.Component {
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
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>The Masters</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {players.map(player => (
                <div
                  key={player.uid}
                  className="card float-left"
                  style={{ width: '18rem', marginRight: '1rem' }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{player.name}</h5>
                    <p className="card-text">{player.status}</p>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h2>Add new player</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Status</label>
                    <input
                      type="text"
                      ref="status"
                      className="form-control"
                      placeholder="Status"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Finished</label>
                    <input
                      type="text"
                      ref="finished"
                      className="form-control"
                      placeholder="Finished"
                    />
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

export default PlayerChange;

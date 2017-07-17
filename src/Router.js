import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';

import { RoomChooser } from './components/screens/roomChooser';
import { VideoList } from './components/screens/videoList';
import { leaveRoom } from './actions';

const styles = {
  navBarTitleStyle: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: '600',
  },
};

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.onRoomLeave = this.onRoomLeave.bind(this);
  }

  onRoomLeave() {
    const { roomName } = this.props;
    this.props.leaveRoom(roomName);
  }

  render() {
    const { roomName } = this.props;
    return (
      <Router>
        <Scene key="roomEntry" hideNavBar={true}>
          <Scene key="roomNameInput" component={RoomChooser} />
        </Scene>

        <Scene key="roomContent">
          <Scene
            key="videoList"
            component={VideoList}
            rightTitle="Leave Room"
            onRight={this.onRoomLeave}
            hideNavBar={false}
            titleStyle={styles.navBarTitleStyle}
          />
        </Scene>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { roomName } = state.room;

  return { roomName };
};

export default connect(mapStateToProps, { leaveRoom })(RouterComponent);

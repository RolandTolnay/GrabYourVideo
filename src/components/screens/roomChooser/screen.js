import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { enterRoom, roomNameChanged } from '../../../actions';
import { Card, CardSection, TextField, Button, Spinner } from '../../common';
import { styles } from './styles';

class RoomChooser extends Component {
  constructor(props) {
    super(props);
    this.onRoomInput = this.onRoomInput.bind(this);
    this.onRoomEnter = this.onRoomEnter.bind(this);
  }

  onRoomInput(roomName) {
    this.props.roomNameChanged(roomName);
  }

  onRoomEnter() {
    this.props.enterRoom(this.props.roomName);
  }

  renderEnterButton() {
    const { enterButtonStyle } = styles;
    const { onRoomEnter } = this;

    if (this.props.isLoading) {
      return <Spinner
        size="large"
        color={styles.spinnerColor}
        style={styles.spinnerStyle}
             />;
    }

    return (
      <Button style={enterButtonStyle} onPress={onRoomEnter}>
        Enter
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.screenFrameStyle}>
        <Card>
          <CardSection style={styles.roomNameSectionStyle}>
            <Text style={styles.roomNameTextStyle}>
              Room name
            </Text>
          </CardSection>
          <CardSection>
            <TextField
              placeholder="Enter room name"
              onChangeText={this.onRoomInput}
              value={this.props.roomName}
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContainerStyle}
              onSubmitEditing={this.onRoomEnter}
            />
          </CardSection>

          <CardSection style={styles.enterButtonSectionStyle}>
            {this.renderEnterButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { isLoading, roomName } = state.room;

  return { isLoading, roomName };
};

RoomChooser.propTypes = {
  roomNameChanged: PropTypes.func.isRequired,
  enterRoom: PropTypes.func.isRequired,
  roomName: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { enterRoom, roomNameChanged })(RoomChooser);

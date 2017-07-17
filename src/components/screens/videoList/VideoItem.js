import React, { Component, PropTypes } from 'react';
import { Text, TouchableWithoutFeedback, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../../common';
import { playVideo } from '../../../actions';

const styles = {
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  channelStyle: {
    fontSize: 12,
    marginTop: 4,
  },
  titleSectionStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 4,
    backgroundColor: "#ecf0f1",
  },
  thumbnailSectionStyle: {
    justifyContent: 'center',
    paddingBottom: 8,
    borderBottomWidth: 0,
  },
  thumbnailStyle: {
    height: 180,
    width: 320,
  },
  cardStyle: {
    padding: 5,
    backgroundColor: '#fff',
    shadowColor: "#2980b9",
  },
};

class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    const { playVideo, video } = this.props;
    playVideo(video);
  }

  render() {
    const { title, thumbnail, channel } = this.props.video;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Card style={styles.cardStyle}>
            <CardSection style={styles.titleSectionStyle}>
              <Text style={styles.titleStyle}>
                {title}
              </Text>
              <Text style={styles.channelStyle}>
                {channel}
              </Text>
            </CardSection>
            <CardSection style={styles.thumbnailSectionStyle}>
              <Image
                style={styles.thumbnailStyle}
                source={{ uri: thumbnail }} />
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

VideoItem.propTypes = {
  playVideo: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired,
};

export default connect(null, { playVideo })(VideoItem);

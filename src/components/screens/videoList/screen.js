import React, { Component, PropTypes } from 'react';
import { View, ListView, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { searchForVideos } from '../../../actions';
import { TextField, CardSection, Button, Spinner } from '../../common';
import VideoItem from './VideoItem';
import TextBoldedFinish from './TextBoldedFinish';
import NowPlayingView from './NowPlayingView';
import { styles } from './styles';

class VideoList extends Component {
  // -- Lifecycle --
  constructor(props) {
    super(props);
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onGoPress = this.onGoPress.bind(this);
  }

  componentWillMount() {
    this.createDataSource(this.props.videos);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.videos);
  }

  // -- ListView --
  createDataSource(videos) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(videos);
  }

  renderRow(video) {
    return <VideoItem video={video} />;
  }

  // -- Actions --
  state = { searchInput: '' }

  onSearchInput(searchInput) {
    this.setState({ searchInput });
  }

  onGoPress() {
    Keyboard.dismiss();
    this.setState({ searchInput: '' });
    this.props.searchForVideos(this.state.searchInput);
  }

  // -- Renderers --
  renderGoButton() {
    if (this.props.isLoading) {
      return <Spinner size="small" />;
    }
    return (
      <Button
        style={styles.searchButtonStyle}
        onPress={this.onGoPress}>
        Go
      </Button>
    );
  }

  renderSearchString() {
    const { searchString } = this.props;
    if (searchString !== '') {
      return (
        <TextBoldedFinish fontSize={16} bolded={searchString}>
          Showing results for
        </TextBoldedFinish>
      );
    }
    return <View />;
  }

  renderNowPlaying() {
    const { nowPlayingTitle } = this.props;
    if (nowPlayingTitle !== '') {
      return (
        <NowPlayingView title={nowPlayingTitle}/>
      );
    }
    return <View />;
  }

  render() {
    return (
      <View style={styles.screenFrameStyle}>
        <CardSection>
          <TextField
            placeholder="Search Youtube"
            onChangeText={this.onSearchInput}
            value={this.state.searchInput}
            containerStyle={styles.searchInputStyle}
            onSubmitEditing={this.onGoPress}
          />
          {this.renderGoButton()}
        </CardSection>

        {this.renderSearchString()}
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          style={styles.listViewStyle}
        />
        {this.renderNowPlaying()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading, videos, searchString } = state.search;
  const { nowPlaying } = state.room;

  return { isLoading, videos, searchString, nowPlayingTitle: nowPlaying.title };
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  searchForVideos: PropTypes.function.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  nowPlayingTitle: PropTypes.string,
};

VideoList.defaultProps = {
  nowPlayingTitle: '',
};

export default connect(mapStateToProps, { searchForVideos })(VideoList);

import React, { PropTypes } from 'react';
import { CardSection, TextBoldedFinish } from '../../common';

const styles = {
  viewStyle: {
    paddingLeft: 8,
    height: 65,
    alignItems: 'flex-start',
    backgroundColor: '#2980b9',
    borderBottomWidth: 0,
  },
  textStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
};

const NowPlayingView = ({ title, style }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <CardSection style={[viewStyle, style]}>
      <TextBoldedFinish
        fontSize={14}
        bolded={title}
        color={"#ecf0f1"}
        style={textStyle}
      >
        Now playing:
      </TextBoldedFinish>
    </CardSection>
    );
  };

NowPlayingView.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
};

NowPlayingView.defaultProps = {
  style: {},
};

export default NowPlayingView;

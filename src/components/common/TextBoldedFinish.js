import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const styles = {
  viewStyle: {
    flexDirection: 'row',
    padding: 5,
  },
  boldedStyle: {
    fontWeight: '600',
    flex: 1,
    alignSelf: 'stretch',
  },
  textStyle: {

  },
};

const TextBoldedFinish = ({ children, fontSize, bolded, style, color }) => {
  return (
    <View style={[styles.viewStyle, style]}>
      <Text style={[styles.textStyle, { fontSize, color }]}>
        {children + " "}
      </Text>
      <Text
        style={[styles.boldedStyle, { fontSize: fontSize + 2, color }]}
        numberOfLines={1}
      >
        {bolded}
      </Text>
    </View>
  );
};

TextBoldedFinish.propTypes = {
  children: PropTypes.string.isRequired,
  bolded: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
};

TextBoldedFinish.defaultProps = {
  fontSize: 14,
  style: {},
  color: '#000',
};

export { TextBoldedFinish };

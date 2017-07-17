import React, { PropTypes } from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = (props) => {
  const { size, color, style } = props;

  return (
    <View style={[styles.spinnerStyle, style]}>
      <ActivityIndicator size={size || 'large'} color={color} />
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
  color: PropTypes.string,
  style: PropTypes.object,
};

Spinner.defaultProps = {
  size: 'large',
  color: 'gray',
  style: {},
};

export { Spinner };

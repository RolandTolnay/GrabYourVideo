import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = (props) => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

Card.propTypes = {
  children: React.PropTypes.array.isRequired,
  style: React.PropTypes.object,
};

Card.defaultProps = {
  style: {},
};

export { Card };

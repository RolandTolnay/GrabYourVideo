import React, { PropTypes } from 'react';
import { TextInput, View } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    height: 20,
    alignSelf: 'center',
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const TextField = (props) => {
  const { value, onChangeText, placeholder, secureTextEntry, onSubmitEditing } = props;

  return (
    <View style={[styles.containerStyle, props.containerStyle]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={[styles.inputStyle, props.inputStyle]}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.function.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onSubmitEditing: PropTypes.function,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
};

TextField.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  onSubmitEditing: null,
  containerStyle: {},
  inputStyle: {},
};

export { TextField };

import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/theme';

const FormButton = ({
  labelText = '',
  handleOnPress = null,
  style,
  isPrimary = true,
  ...more
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderColor: COLORS.primary,
        borderRadius: 8,
        ...style,
      }}
      activeOpacity={0.8}
      onPress={handleOnPress}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          color: isPrimary ? COLORS.white : COLORS.primary,
        }}
      >
        {labelText}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/theme';
const FormInput = ({
  labelText = '',
  placeholderText = '',
  onChangeText = null,
  value = null,
  ...more
}) => {
  return (
    <View style={{ width: '100%', marginBottom: 20 }}>
      <Text>{labelText}</Text>
      <TextInput
        style={{
          padding: 10,
          borderColor: COLORS.black + '20',
          borderWidth: 1,
          width: '100%',
          borderRadius: 5,
          marginTop: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        value={value}
        {...more}
      />
    </View>
  );
};

export default FormInput;

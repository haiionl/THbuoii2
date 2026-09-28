import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  keyboardType = 'default',
}) {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={[
          styles.input,
          error && styles.inputError,
        ]}
      />

      {error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 15,
  },

  inputError: {
    borderColor: '#D32F2F',
  },

  error: {
    color: '#D32F2F',
    fontSize: 13,
    marginTop: 4,
  },
});
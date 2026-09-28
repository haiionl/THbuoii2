import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';

export default function AppButton({
  title,
  onPress,
  danger = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        danger && styles.dangerButton,
      ]}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },

  dangerButton: {
    backgroundColor: '#D32F2F',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
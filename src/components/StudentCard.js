import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import {getClassification} from '../data/students';

export default function StudentCard({
  student,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.card}
    >
      <View style={styles.header}>
        <Text style={styles.name}>
          {student.fullName}
        </Text>

        <Text style={styles.code}>
          {student.studentCode}
        </Text>
      </View>

      <Text style={styles.info}>
        Lớp: {student.className}
      </Text>

      <Text style={styles.info}>
        GPA: {Number(student.gpa).toFixed(1)}
      </Text>

      <Text style={styles.info}>
        Xếp loại: {getClassification(student.gpa)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,

    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    flex: 1,
  },

  code: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: 'bold',
  },

  info: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
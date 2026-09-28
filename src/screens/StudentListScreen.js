import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

import StudentCard from '../components/StudentCard';
import AppButton from '../components/AppButton';

export default function StudentListScreen({
  navigation,
  students,
}) {
  const [keyword, setKeyword] = useState('');

  const filteredStudents = students.filter(student => {
    const searchText = keyword.toLowerCase().trim();

    return (
      student.studentCode
        .toLowerCase()
        .includes(searchText) ||

      student.fullName
        .toLowerCase()
        .includes(searchText)
    );
  });

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Danh sách sinh viên
      </Text>

      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm theo mã hoặc họ tên..."
        style={styles.searchInput}
      />

      <AppButton
        title="+ Thêm sinh viên"
        onPress={() =>
          navigation.navigate('AddStudent')
        }
      />

      <Text style={styles.resultText}>
        Có {filteredStudents.length} sinh viên
      </Text>

      <FlatList
        data={filteredStudents}

        keyExtractor={item => item.id}

        renderItem={({item}) => (
          <StudentCard
            student={item}
            onPress={() =>
              navigation.navigate(
                'StudentDetail',
                {
                  studentId: item.id,
                },
              )
            }
          />
        )}

        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Không tìm thấy sinh viên.
          </Text>
        }

        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 15,
    marginBottom: 8,
  },

  resultText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },

  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginTop: 30,
    fontSize: 15,
  },
});
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import AppButton from '../components/AppButton';

import {
  getClassification,
} from '../data/students';

export default function StudentDetailScreen({
  navigation,
  route,
  students,
  onDelete,
}) {
  // Lấy ID sinh viên được truyền từ màn hình danh sách
  const studentId = route.params?.studentId;

  // Tìm sinh viên trong danh sách
  const student = students.find(
    item => item.id === studentId,
  );

  // Nếu không tìm thấy
  if (!student) {
    return (
      <View style={styles.center}>
        <Text>
          Không tìm thấy sinh viên.
        </Text>
      </View>
    );
  }

  // Xử lý xóa sinh viên
  const handleDelete = () => {
    Alert.alert(
      'Xóa sinh viên',
      `Bạn có chắc muốn xóa ${student.fullName}?`,
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: () => {
            onDelete(student.id);

            navigation.goBack();
          },
        },
      ],
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <View style={styles.header}>
        <Text style={styles.name}>
          {student.fullName}
        </Text>

        <Text style={styles.code}>
          {student.studentCode}
        </Text>
      </View>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>
            Mã sinh viên
          </Text>

          <Text style={styles.value}>
            {student.studentCode}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Họ tên
          </Text>

          <Text style={styles.value}>
            {student.fullName}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Ngày sinh
          </Text>

          <Text style={styles.value}>
            {student.dateOfBirth}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Giới tính
          </Text>

          <Text style={styles.value}>
            {student.gender}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Email
          </Text>

          <Text style={styles.value}>
            {student.email}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Số điện thoại
          </Text>

          <Text style={styles.value}>
            {student.phone}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Lớp
          </Text>

          <Text style={styles.value}>
            {student.className}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Khoa
          </Text>

          <Text style={styles.value}>
            {student.faculty}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            GPA
          </Text>

          <Text style={styles.gpa}>
            {Number(student.gpa).toFixed(1)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>
            Xếp loại
          </Text>

          <Text style={styles.classification}>
            {getClassification(student.gpa)}
          </Text>
        </View>

      </View>

      <AppButton
        title="Chỉnh sửa"
        onPress={() =>
          navigation.navigate(
            'EditStudent',
            {
              studentId: student.id,
            },
          )
        }
      />

      <AppButton
        title="Xóa sinh viên"
        danger={true}
        onPress={handleDelete}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    padding: 15,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 15,
  },

  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#222',
  },

  code: {
    fontSize: 15,
    color: '#1976D2',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,

    elevation: 2,
  },

  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  label: {
    fontSize: 13,
    color: '#777',
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
  },

  gpa: {
    fontSize: 18,
    color: '#1976D2',
    fontWeight: 'bold',
  },

  classification: {
    fontSize: 17,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
});
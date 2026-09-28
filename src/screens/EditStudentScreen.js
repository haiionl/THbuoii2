import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

export default function EditStudentScreen({
  navigation,
  route,
  students,
  onUpdate,
}) {
  // Lấy ID sinh viên từ màn hình Chi tiết
  const studentId = route.params?.studentId;

  // Tìm sinh viên cần sửa
  const student = students.find(
    item => item.id === studentId,
  );

  // Nếu không tìm thấy sinh viên
  if (!student) {
    return null;
  }

  const [form, setForm] = useState({
    studentCode: student.studentCode,
    fullName: student.fullName,
    dateOfBirth: student.dateOfBirth,
    gender: student.gender,
    email: student.email,
    phone: student.phone,
    className: student.className,
    faculty: student.faculty,
    gpa: String(student.gpa),
  });

  const [errors, setErrors] = useState({});

  // Cập nhật một trường dữ liệu
  const updateField = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [field]: '',
    }));
  };

  // Kiểm tra dữ liệu
  const validateForm = () => {
    const newErrors = {};

    if (!form.studentCode.trim()) {
      newErrors.studentCode =
        'Vui lòng nhập mã sinh viên.';
    }

    if (!form.fullName.trim()) {
      newErrors.fullName =
        'Vui lòng nhập họ tên.';
    }

    if (!form.dateOfBirth.trim()) {
      newErrors.dateOfBirth =
        'Vui lòng nhập ngày sinh.';
    }

    if (!form.gender.trim()) {
      newErrors.gender =
        'Vui lòng nhập giới tính.';
    }

    if (!form.email.trim()) {
      newErrors.email =
        'Vui lòng nhập email.';
    } else if (
      !form.email.includes('@')
    ) {
      newErrors.email =
        'Email không hợp lệ.';
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        'Vui lòng nhập số điện thoại.';
    } else if (
      !/^[0-9]{9,11}$/.test(form.phone)
    ) {
      newErrors.phone =
        'Số điện thoại phải có 9-11 số.';
    }

    if (!form.className.trim()) {
      newErrors.className =
        'Vui lòng nhập lớp.';
    }

    if (!form.faculty.trim()) {
      newErrors.faculty =
        'Vui lòng nhập khoa.';
    }

    if (!form.gpa.trim()) {
      newErrors.gpa =
        'Vui lòng nhập GPA.';
    } else {
      const gpa = Number(form.gpa);

      if (
        Number.isNaN(gpa) ||
        gpa < 0 ||
        gpa > 10
      ) {
        newErrors.gpa =
          'GPA phải từ 0 đến 10.';
      }
    }

    // Kiểm tra mã sinh viên có bị trùng
    const isDuplicate = students.some(
      item =>
        item.id !== student.id &&
        item.studentCode.toLowerCase() ===
          form.studentCode
            .trim()
            .toLowerCase(),
    );

    if (isDuplicate) {
      newErrors.studentCode =
        'Mã sinh viên đã tồn tại.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Lưu thay đổi
  const handleUpdate = () => {
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const updatedStudent = {
      studentCode:
        form.studentCode.trim(),

      fullName:
        form.fullName.trim(),

      dateOfBirth:
        form.dateOfBirth.trim(),

      gender:
        form.gender.trim(),

      email:
        form.email.trim(),

      phone:
        form.phone.trim(),

      className:
        form.className.trim(),

      faculty:
        form.faculty.trim(),

      gpa: Number(form.gpa),
    };

    onUpdate(
      student.id,
      updatedStudent,
    );

    Alert.alert(
      'Thành công',
      'Đã cập nhật thông tin sinh viên.',
      [
        {
          text: 'OK',
          onPress: () => {
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
      showsVerticalScrollIndicator={false}
    >

      <AppInput
        label="Mã sinh viên *"
        value={form.studentCode}
        onChangeText={text =>
          updateField(
            'studentCode',
            text,
          )
        }
        error={errors.studentCode}
      />

      <AppInput
        label="Họ tên *"
        value={form.fullName}
        onChangeText={text =>
          updateField(
            'fullName',
            text,
          )
        }
        error={errors.fullName}
      />

      <AppInput
        label="Ngày sinh *"
        value={form.dateOfBirth}
        onChangeText={text =>
          updateField(
            'dateOfBirth',
            text,
          )
        }
        error={errors.dateOfBirth}
      />

      <AppInput
        label="Giới tính *"
        value={form.gender}
        onChangeText={text =>
          updateField(
            'gender',
            text,
          )
        }
        error={errors.gender}
      />

      <AppInput
        label="Email *"
        value={form.email}
        onChangeText={text =>
          updateField(
            'email',
            text,
          )
        }
        keyboardType="email-address"
        error={errors.email}
      />

      <AppInput
        label="Số điện thoại *"
        value={form.phone}
        onChangeText={text =>
          updateField(
            'phone',
            text,
          )
        }
        keyboardType="phone-pad"
        error={errors.phone}
      />

      <AppInput
        label="Lớp *"
        value={form.className}
        onChangeText={text =>
          updateField(
            'className',
            text,
          )
        }
        error={errors.className}
      />

      <AppInput
        label="Khoa *"
        value={form.faculty}
        onChangeText={text =>
          updateField(
            'faculty',
            text,
          )
        }
        error={errors.faculty}
      />

      <AppInput
        label="GPA *"
        value={form.gpa}
        onChangeText={text =>
          updateField(
            'gpa',
            text,
          )
        }
        keyboardType="decimal-pad"
        error={errors.gpa}
      />

      <AppButton
        title="Lưu thay đổi"
        onPress={handleUpdate}
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
    paddingBottom: 30,
  },
});
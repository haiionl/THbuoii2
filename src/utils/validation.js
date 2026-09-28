export const validateStudent = (
  form,
  students = [],
  currentStudentId = null,
) => {
  const errors = {};

  // Mã sinh viên
  if (!form.studentCode.trim()) {
    errors.studentCode =
      'Vui lòng nhập mã sinh viên.';
  }

  // Họ tên
  if (!form.fullName.trim()) {
    errors.fullName =
      'Vui lòng nhập họ tên.';
  }

  // Ngày sinh
  if (!form.dateOfBirth.trim()) {
    errors.dateOfBirth =
      'Vui lòng nhập ngày sinh.';
  }

  // Giới tính
  if (!form.gender.trim()) {
    errors.gender =
      'Vui lòng nhập giới tính.';
  }

  // Email
  if (!form.email.trim()) {
    errors.email =
      'Vui lòng nhập email.';
  } else if (!form.email.includes('@')) {
    errors.email =
      'Email không hợp lệ.';
  }

  // Số điện thoại
  if (!form.phone.trim()) {
    errors.phone =
      'Vui lòng nhập số điện thoại.';
  } else if (
    !/^[0-9]{9,11}$/.test(form.phone)
  ) {
    errors.phone =
      'Số điện thoại phải có 9-11 số.';
  }

  // Lớp
  if (!form.className.trim()) {
    errors.className =
      'Vui lòng nhập lớp.';
  }

  // Khoa
  if (!form.faculty.trim()) {
    errors.faculty =
      'Vui lòng nhập khoa.';
  }

  // GPA
  if (!form.gpa.trim()) {
    errors.gpa =
      'Vui lòng nhập GPA.';
  } else {
    const gpa = Number(form.gpa);

    if (
      Number.isNaN(gpa) ||
      gpa < 0 ||
      gpa > 10
    ) {
      errors.gpa =
        'GPA phải từ 0 đến 10.';
    }
  }

  // Kiểm tra trùng mã sinh viên
  const duplicate = students.some(
    student =>
      student.id !== currentStudentId &&
      student.studentCode.toLowerCase() ===
        form.studentCode.trim().toLowerCase(),
  );

  if (duplicate) {
    errors.studentCode =
      'Mã sinh viên đã tồn tại.';
  }

  return errors;
};
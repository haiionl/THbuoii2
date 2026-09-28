export const initialStudents = [
  {
    id: '1',
    studentCode: 'SV001',
    fullName: 'Nguyễn Văn An',
    dateOfBirth: '15/03/2005',
    gender: 'Nam',
    email: 'an@gmail.com',
    phone: '0901234567',
    className: 'CNTT1',
    faculty: 'Công nghệ thông tin',
    gpa: 8.7,
  },
  {
    id: '2',
    studentCode: 'SV002',
    fullName: 'Trần Thị Bình',
    dateOfBirth: '22/08/2005',
    gender: 'Nữ',
    email: 'binh@gmail.com',
    phone: '0912345678',
    className: 'CNTT2',
    faculty: 'Công nghệ thông tin',
    gpa: 7.6,
  },
  {
    id: '3',
    studentCode: 'SV003',
    fullName: 'Lê Minh Khang',
    dateOfBirth: '10/12/2004',
    gender: 'Nam',
    email: 'khang@gmail.com',
    phone: '0987654321',
    className: 'KT1',
    faculty: 'Kinh tế',
    gpa: 6.4,
  },
  {
    id: '4',
    studentCode: 'SV004',
    fullName: 'Phạm Ngọc Mai',
    dateOfBirth: '03/05/2005',
    gender: 'Nữ',
    email: 'mai@gmail.com',
    phone: '0971234567',
    className: 'QTKD1',
    faculty: 'Quản trị kinh doanh',
    gpa: 4.8,
  },
];

export const getClassification = gpa => {
  const value = Number(gpa);

  if (value >= 8.5) {
    return 'Giỏi';
  }

  if (value >= 7.0) {
    return 'Khá';
  }

  if (value >= 5.0) {
    return 'Trung bình';
  }

  return 'Yếu';
};
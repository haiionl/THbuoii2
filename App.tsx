import React, {useState} from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {initialStudents} from './src/data/students';

import StudentListScreen from './src/screens/StudentListScreen';
import StudentDetailScreen from './src/screens/StudentDetailScreen';
import AddStudentScreen from './src/screens/AddStudentScreen';
import EditStudentScreen from './src/screens/EditStudentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [students, setStudents] = useState(
    initialStudents,
  );

  const handleAddStudent = (newStudent: any) => {
    const student = {
      id: Date.now().toString(),
      ...newStudent,
    };

    setStudents(prevStudents => [
      ...prevStudents,
      student,
    ]);
  };

  const handleUpdateStudent = (
    studentId: string,
    updatedStudent: any,
  ) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? {
              ...student,
              ...updatedStudent,
            }
          : student,
      ),
    );
  };

  const handleDeleteStudent = (
    studentId: string,
  ) => {
    setStudents(prevStudents =>
      prevStudents.filter(
        student => student.id !== studentId,
      ),
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StudentList"
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        
        <Stack.Screen
          name="StudentList"
          options={{
            title: 'Quản lý sinh viên',
          }}>
          {props => (
            <StudentListScreen
              {...props}
              students={students}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="StudentDetail"
          options={{
            title: 'Chi tiết sinh viên',
          }}>
          {props => (
            <StudentDetailScreen
              {...props}
              students={students}
              onDelete={handleDeleteStudent}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddStudent"
          options={{
            title: 'Thêm sinh viên',
          }}>
          {props => (
            <AddStudentScreen
              {...props}
              students={students}
              onAdd={handleAddStudent}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="EditStudent"
          options={{
            title: 'Chỉnh sửa sinh viên',
          }}>
          {props => (
            <EditStudentScreen
              {...props}
              students={students}
              onUpdate={handleUpdateStudent}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
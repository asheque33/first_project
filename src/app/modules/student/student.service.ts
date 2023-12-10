import { Student } from './student.interface';
import { StudentModel } from './student.model';

// create student from db
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
// get all students from db
const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
// get single student from db
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
};

package com.student

import org.springframework.stereotype.Service

@Service
class StudentService (
        val studentRepository : StudentRepository
) {
    fun findAll(): MutableList<Student> = studentRepository.findAll()

    fun save(student: Student): Student {
        student.computeGrade()
        return studentRepository.save(student)
    }

    fun findById(id : Long): Student =
        studentRepository.findById(id)
                .orElseThrow { throwResourceNotFoundException(id) }

    fun update(id : Long, studentDetails: Student): Student {
        val student = studentRepository.findById(id)
                .orElseThrow { throwResourceNotFoundException(id) }

        return student.apply {
            firstName = studentDetails.firstName
            lastName = studentDetails.lastName
            email = studentDetails.email
            quantityOfQuestions = studentDetails.quantityOfQuestions
            quantityOfRightQuestions = studentDetails.quantityOfRightQuestions
            computeGrade()
        }.also {
            studentRepository.save(it)
        }
    }

    fun delete(id: Long) {
        val student = studentRepository.findById(id)
                .orElseThrow { throwResourceNotFoundException(id) }

        studentRepository.delete(student)
    }

    private fun throwResourceNotFoundException(id: Long) =
            ResourceNotFoundException("Student not exist with id :$id")
}